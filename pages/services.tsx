import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

const formatVND = (n: number) =>
  n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 })

type Variant = 'blue' | 'rose' | 'emerald' | 'amber' | 'indigo'

function themeOf(variant: Variant) {
  switch (variant) {
    case 'blue':
      return {
        pillBg: 'bg-blue-50 ring-blue-100 text-brandBlue',
        borderHover: 'hover:border-blue-300',
        overlay: 'from-blue-100/40 via-transparent to-blue-200/40',
        iconWrap: 'bg-blue-50 ring-blue-100',
        iconColor: 'text-brandBlue',
        cta: 'bg-brandBlue hover:bg-blue-900',
      }
    case 'rose':
      return {
        pillBg: 'bg-rose-50 ring-rose-100 text-brandRed',
        borderHover: 'hover:border-rose-300',
        overlay: 'from-rose-100/40 via-transparent to-rose-200/40',
        iconWrap: 'bg-rose-50 ring-rose-100',
        iconColor: 'text-brandRed',
        cta: 'bg-brandRed hover:bg-red-700',
      }
    case 'emerald':
      return {
        pillBg: 'bg-emerald-50 ring-emerald-100 text-emerald-700',
        borderHover: 'hover:border-emerald-300',
        overlay: 'from-emerald-100/40 via-transparent to-emerald-200/40',
        iconWrap: 'bg-emerald-50 ring-emerald-100',
        iconColor: 'text-emerald-700',
        cta: 'bg-emerald-600 hover:bg-emerald-700',
      }
    case 'amber':
      return {
        pillBg: 'bg-amber-50 ring-amber-100 text-amber-600',
        borderHover: 'hover:border-amber-300',
        overlay: 'from-amber-100/40 via-transparent to-amber-200/40',
        iconWrap: 'bg-amber-50 ring-amber-100',
        iconColor: 'text-amber-600',
        cta: 'bg-amber-500 hover:bg-amber-600',
      }
    case 'indigo':
      return {
        pillBg: 'bg-indigo-50 ring-indigo-100 text-indigo-700',
        borderHover: 'hover:border-indigo-300',
        overlay: 'from-indigo-100/40 via-transparent to-indigo-200/40',
        iconWrap: 'bg-indigo-50 ring-indigo-100',
        iconColor: 'text-indigo-700',
        cta: 'bg-indigo-600 hover:bg-indigo-700',
      }
  }
}

function ServiceCard({
  title,
  description,
  benefits,
  priceFrom,
  variant,
  icon,
  badge,
}: {
  title: string
  description: string
  benefits: string[]
  priceFrom: number
  variant: Variant
  icon: ReactNode
  badge?: string
}) {
  const t = themeOf(variant)
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${t.borderHover}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className={`absolute inset-0 bg-gradient-to-br ${t.overlay}`}></div>
      </div>
      {badge && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
          {badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ${t.pillBg}`}>Giá từ</span>
          <div className="mt-1 text-2xl font-extrabold text-gray-900">{formatVND(priceFrom)}</div>
        </div>
        <div className={`relative h-12 w-12 shrink-0 rounded-xl ${t.iconWrap} ring-1 flex items-center justify-center transition-transform group-hover:scale-110`}>
          <span className={`${t.iconColor}`}>{icon}</span>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
      <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
        {benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs text-gray-500">Giá thay đổi theo hồ sơ/nhu cầu.</p>
        <Link href="/contact" className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors ${t.cta}`}>
          Đặt lịch ngay
        </Link>
      </div>
    </article>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Dịch vụ – FastFact Du Học</title>
      </Head>

      {/* Hero */}
      <section className="relative py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        <div className="section-wrapper max-w-4xl">
          <p className="text-sm font-medium text-brandBlue">Dịch vụ FastFact</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-gray-900">Chọn bước phù hợp, mở cánh cửa du học</h1>
          <p className="mt-4 body-copy">Gói dịch vụ sinh động, rõ ràng về lợi ích và chi phí — để bạn chủ động tiến về phía trước.</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-16">
        <div className="section-wrapper">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Tư vấn 1:1 – Lộ trình cá nhân hóa"
              description="Khám sức học thuật & mục tiêu; phân tích điểm mạnh – hạn chế, ngân sách & thời gian; đề xuất lộ trình tối ưu với mốc rõ ràng."
              benefits={[
                'Bản đồ lộ trình theo mục tiêu',
                'Danh sách trường (reach/target/safe)',
                'Kế hoạch chuẩn bị theo tháng/tuần',
                'Tư vấn học bổng & tài chính',
              ]}
              priceFrom={490000}
              variant="blue"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 18h6"/>
                  <path d="M10 22h4"/>
                  <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.4V18h6v-1.6c0-.9.4-1.8 1-2.4A7 7 0 0 0 12 2z"/>
                </svg>
              }
            />

            <ServiceCard
              title="Viết SOP – Câu chuyện thuyết phục"
              description="Khai thác trải nghiệm, turning point & tầm nhìn nghề nghiệp; SOP mạch lạc, chân thật, nhất quán hồ sơ v�� có khả năng giành học bổng."
              benefits={[
                'Khung theo yêu cầu từng trường',
                'Chỉnh sửa nhiều vòng đến khi sắc nét',
                'Nhất quán với CV, LOR, học thuật',
              ]}
              priceFrom={4900000}
              variant="rose"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12.5 6.5l5 5"/>
                  <path d="M3 21l4.5-1.2c.3-.1.6-.2.8-.5l10-10a2.1 2.1 0 0 0-3-3l-10 10c-.2.2-.4.5-.5.8L3 21z"/>
                </svg>
              }
            />

            <ServiceCard
              title="Hỗ trợ đăng ký trường – Quy trình hiệu quả"
              description="Từ shortlist, chuẩn bị tài liệu, điền form, nộp và theo dõi; mọi khâu có checklist rõ ràng để tiết kiệm thời gian & công sức."
              benefits={[
                'Lịch nộp hồ sơ & nhắc hạn',
                'Rà soát đầy đủ – chính xác trước khi gửi',
                'Hướng dẫn học bổng/miễn phí nếu có',
              ]}
              priceFrom={1900000}
              variant="amber"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 3v4M17 3v4M3 9h18M5 12h6M5 16h6M13 16l2 2 4-4"/>
                </svg>
              }
            />

            <ServiceCard
              title="Hỗ trợ Visa – Chạm tay vào tương lai"
              description="Chuẩn bị hồ sơ chặt chẽ, chiến lược tài chính minh bạch, mock interview bám sát thực tế để tăng xác suất đậu visa Mỹ/Canada."
              benefits={['Danh mục giấy tờ theo hồ sơ', 'Kịch bản phỏng vấn & luyện phản xạ', 'Hướng dẫn thủ tục sau cấp visa']}
              priceFrom={2900000}
              variant="emerald"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M10.5 12L3 9.5l1.5-2 8 2 6-8 1.5 1.5-4.5 8 2 8-2 1-4-7-3 2v4l-2 1v-5l3-3z"/>
                </svg>
              }
            />

            <ServiceCard
              title="Đào tạo – Sẵn sàng hòa nhập"
              description="Khóa học gọn & thực chiến: kỹ năng học thuật, quản lý thời gian, văn hóa campus & networking để tự tin chặng đầu."
              benefits={[
                'Luyện phỏng vấn (trường/visa/học bổng)',
                'Note-taking, academic writing, thuyết trình',
                'Quản lý thời gian & học online hiệu quả',
              ]}
              priceFrom={990000}
              variant="indigo"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 6V4h6v2"/>
                  <rect x="4" y="6" width="16" height="14" rx="2"/>
                  <path d="M9 12l3-1 3 1-3 1-3-1z"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </>
  )
}
