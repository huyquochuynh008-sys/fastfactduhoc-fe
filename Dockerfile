# syntax=docker/dockerfile:1

# 1) Install dependencies (with cache and musl compat)
FROM node:20-alpine AS deps
WORKDIR /app
ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
# Use BuildKit cache if available; fallback safe with conditional CI/install
RUN --mount=type=cache,target=/root/.npm \
    sh -c 'npm config set fund false && npm config set audit false && \
    if [ -f package-lock.json ]; then npm ci --prefer-offline --no-audit --no-fund; \
    else npm install --prefer-offline --no-audit --no-fund; fi'

# 2) Build the app
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1
RUN apk add --no-cache libc6-compat
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Runtime image (standalone)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

# Install runtime deps for healthcheck and sharp
RUN apk add --no-cache libc6-compat curl

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy standalone server and static files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD curl -fsS http://127.0.0.1:3000/ || exit 1
CMD ["node", "server.js"]
