import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FastFact Du Học – Hành trình của bạn, chúng tôi đồng hành</title>
        <meta
          name="description"
          content="Tư vấn 1:1, viết SOP kể chuyện, hỗ trợ visa tự tin. Biến bối rối thành lộ trình rõ ràng cho du học Mỹ & Canada – có chuyên gia đồng hành từng bước."
        />
      </Head>

      {/* Hero */}
      <section className="hero-section relative py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source
              src="https://videos.pexels.com/video-files/5138030/5138030-sd_338_640_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/6549534/6549534-hd_720_1280_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-white/75"></div>
        </div>
        <div className="section-wrapper max-w-4xl">
          <p className="text-sm font-medium text-brandBlue">Du học không chỉ là đích đến – đó là câu chuyện của bạn</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-gray-900">
            Bạn viết câu chuyện. Chúng tôi mở cánh cửa tới <span className="text-brandBlue">Mỹ</span> &{' '}
            <span className="text-brandRed">Canada</span>
          </h1>
          <p className="mt-6 hero-copy">
            Từ nỗi lo mơ hồ đến lộ trình rõ ràng: chúng tôi lắng nghe, định hướng, và đồng hành 1:1 để biến mục tiêu thành hiện thực –
            từ khám phá bản thân, viết SOP đầy cảm hứng đến tự tin bước qua buổi phỏng vấn visa.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="primary-cta">Bắt đầu ngay</Link>
            <Link href={{ pathname: '/', hash: 'stories' }} className="secondary-cta">Xem câu chuyện thành công</Link>
          </div>
        </div>
      </section>

      {/* Services as a journey */}
      <section className="py-16">
        <div className="section-wrapper">
          <header className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Hành trình của bạn, chúng tôi đồng hành</h2>
            <p className="mt-3 body-copy">Con đường du học của bạn được vạch rõ – từng bước đều mang ý nghĩa, cảm xúc và giá trị riêng.</p>
          </header>

          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <li className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/5 via-brandBlue/0 to-brandRed/10"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 shrink-0 rounded-xl bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center transition-transform group-hover:scale-110">
                  {/* Lightbulb icon */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-brandBlue transition-transform group-hover:-rotate-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M9 18h6"/>
                    <path d="M10 22h4"/>
                    <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.4V18h6v-1.6c0-.9.4-1.8 1-2.4A7 7 0 0 0 12 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Bước 1 – Tư vấn 1:1</p>
                  <h3 className="mt-1 font-semibold text-gray-900">Khám phá chính bạn.</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Trước khi bay cao, bạn cần biết mình là ai. Chúng tôi giúp bạn khám phá những điểm mạnh và đam mê tiềm ẩn để
                    xây dựng hồ sơ độc nhất, làm nổi bật cá tính riêng của bạn.
                  </p>
                  <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: infographic mảnh ghép ghép thành bức tranh, icon hoạt hình về tư duy.</p>
                </div>
              </div>
              <span className="absolute right-4 top-4 text-xs font-medium text-gray-400">01</span>
            </li>

            {/* Step 2 */}
            <li className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-br from-brandRed/10 via-transparent to-brandBlue/5"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 shrink-0 rounded-xl bg-rose-50 ring-1 ring-rose-100 flex items-center justify-center transition-transform group-hover:scale-110">
                  {/* Pen icon */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-brandRed transition-transform group-hover:-rotate-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12.5 6.5l5 5"/>
                    <path d="M3 21l4.5-1.2c.3-.1.6-.2.8-.5l10-10a2.1 2.1 0 0 0-3-3l-10 10c-.2.2-.4.5-.5.8L3 21z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brandRed">Bước 2 – Viết SOP</p>
                  <h3 className="mt-1 font-semibold text-gray-900">Vẽ giấc mơ của bạn.</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Câu chuyện của bạn là chìa khóa. Chúng tôi không chỉ viết SOP, chúng tôi giúp bạn biến những trải nghiệm, khó khăn
                    và ước mơ thành một câu chuyện mạnh mẽ, thuyết phục hội đồng tuyển sinh.
                  </p>
                  <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: GIF bàn tay đang viết, nét chữ tỏa sáng hoặc biểu tượng nghề nghiệp mong muốn.</p>
                </div>
              </div>
              <span className="absolute right-4 top-4 text-xs font-medium text-gray-400">02</span>
            </li>

            {/* Step 3 */}
            <li className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/5 via-transparent to-brandRed/15"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 shrink-0 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center transition-transform group-hover:scale-110">
                  {/* Airplane icon */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-700 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M10.5 12L3 9.5l1.5-2 8 2 6-8 1.5 1.5-4.5 8 2 8-2 1-4-7-3 2v4l-2 1v-5l3-3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Bước 3 – Hỗ trợ Visa</p>
                  <h3 className="mt-1 font-semibold text-gray-900">Chạm tay vào tương lai.</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Không chỉ là hồ sơ, chúng tôi giúp bạn tự tin vượt qua phỏng vấn. Bạn đã có đủ hành trang để chinh phục mọi thử thách
                    và nắm chắc tấm vé đến với giấc mơ du học.
                  </p>
                  <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: GIF máy bay cất cánh từ Việt Nam và hạ cánh tại Mỹ/Canada.</p>
                </div>
              </div>
              <span className="absolute right-4 top-4 text-xs font-medium text-gray-400">03</span>
            </li>
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/services" className="secondary-cta">Xem chi tiết dịch vụ</Link>
            <Link href="/contact" className="primary-cta">Đặt lịch tư vấn miễn phí</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="bg-gray-50 py-16">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Câu chuyện thành công</h2>
          <p className="mt-3 body-copy max-w-3xl">
            Những hành trình thật – từ bối rối đến vỡ òa: visa trong tay, nhận học bổng, và tự tin đặt chân tới cánh cổng mơ ước.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <figure className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <blockquote className="text-gray-800">
                “Mình từng nghĩ hồ sơ của mình bình thường. Sau buổi tư vấn, mọi mảnh ghép được xếp lại đúng chỗ. Mình đậu visa ngay vòng 1.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">Ngọc A. – Cử nhân CS, Canada</figcaption>
            </figure>
            <figure className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <blockquote className="text-gray-800">
                “SOP kể đúng câu chuyện của mình – không màu mè, nhưng thuyết phục. Mình nhận học bổng 50% cho chương trình MBA.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">Minh K. – MBA, USA</figcaption>
            </figure>
            <figure className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <blockquote className="text-gray-800">
                “Buổi luyện phỏng vấn giúp mình bình tĩnh và trả lời mạch lạc. Đến hôm thi, mình thấy như đang diễn lại buổi luyện tập.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">Linh P. – Data Analytics, Canada</figcaption>
            </figure>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="primary-cta">Tôi cũng muốn viết câu chuyện của mình</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Hỏi &amp; Đáp nhanh</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Chuẩn bị gì trước khi bắt đầu?</summary>
              <p className="mt-2 text-sm text-gray-700">
                Xác định mục tiêu, ngành — trường — ngân sách; kiểm tra yêu cầu tiếng Anh/điểm số; chuẩn bị giấy tờ học thuật và tài chính.
                Chúng tôi sẽ lập checklist theo hồ sơ của bạn.
              </p>
            </details>
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">SOP vì sao quan trọng?</summary>
              <p className="mt-2 text-sm text-gray-700">
                SOP thể hiện động lực, năng lực và kế hoạch tương lai. Chúng tôi đồng hành từ dàn ý đến chỉnh sửa nhiều vòng để câu chuyện
                của bạn nổi bật và nhất quán với hồ sơ.
              </p>
            </details>
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Có đảm bảo đậu visa không?</summary>
              <p className="mt-2 text-sm text-gray-700">
                Không ai có thể đảm bảo 100%. Chúng tôi chuẩn bị hồ sơ trung thực, logic và luyện phỏng vấn kỹ lưỡng để tối đa hóa khả năng thành công.
              </p>
            </details>
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Mất bao lâu để hoàn tất?</summary>
              <p className="mt-2 text-sm text-gray-700">
                Tùy chương trình và thời điểm, trung bình 6–12 tuần. Chúng tôi đưa timeline chi tiết theo từng bước để bạn chủ động.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
