import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Về chúng tôi – FastFact Du Học</title>
        <meta
          name="description"
          content="Câu chuyện FastFact Du Học: sứ mệnh giúp học sinh tự tin vươn ra thế giới, tầm nhìn đồng hành đáng tin cậy, giá trị tận tâm – chuyên nghiệp – minh bạch – hiệu quả, và đội ngũ chuyên gia gần gũi."
        />
      </Head>

      {/* Intro */}
      <section className="relative py-16 sm:py-20">
        <div className="section-wrapper max-w-4xl">
          <p className="text-sm font-medium text-brandBlue">Câu chuyện bắt đầu</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-gray-900">Cánh cửa du học – Tinh thần của chúng tôi</h1>
          <p className="mt-6 body-copy">
            FastFact ra đời từ những buổi trò chuyện rất thật với các bạn trẻ đang loay hoay giữa vô vàn lựa chọn. Chúng tôi nhận ra điều các bạn
            cần không chỉ là danh sách trường hay thủ tục visa, mà là một người đồng hành hiểu bạn, giúp bạn nhìn rõ thế mạnh và mở một cánh cửa
            mới: một lộ trình du học đúng với bản thân, bền vững và nhiều hy vọng.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sứ mệnh và Tầm nhìn</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brandBlue">Sứ mệnh</h3>
              <p className="mt-2 text-gray-700">
                Chúng tôi giúp học sinh <span className="font-medium">tự tin vươn ra thế giới</span> bằng cách khai mở điểm mạnh, kể câu chuyện chân thật
                và xây dựng một lộ trình học tập – nghề nghiệp rõ ràng. Không chỉ đi du học; đó là hành trình tìm thấy <span className="font-medium">con đường mới</span> của riêng mình.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brandRed">Tầm nhìn</h3>
              <p className="mt-2 text-gray-700">
                Trở thành <span className="font-medium">người đồng hành tin cậy</span> của mỗi bạn học sinh Việt Nam đang ấp ủ giấc mơ Mỹ/Canada — nơi bạn luôn
                tìm thấy giải pháp phù hợp v���i bối cảnh cá nhân, được lắng nghe và hỗ trợ tận tâm ở từng bước đi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-12 sm:py-16">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Giá trị cốt lõi</h2>
          <p className="mt-3 body-copy max-w-3xl">Kim chỉ nam hành động của chúng tôi — được đo lường bằng kết quả thật và sự an tâm của bạn.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-10 w-10 rounded-lg bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                {/* Heart/hand icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-brandBlue" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 21s-6-4.35-8.5-7A5 5 0 1 1 12 6a5 5 0 1 1 8.5 8c-2.5 2.65-8.5 7-8.5 7z"/>
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Tận tâm</h3>
              <p className="mt-2 text-sm text-gray-700">Đồng hành 1:1, lắng nghe kỹ lưỡng, phản hồi nhanh. Bạn luôn biết mình đang ở đâu và bước tiếp theo là gì.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-10 w-10 rounded-lg bg-slate-50 ring-1 ring-slate-100 flex items-center justify-center">
                {/* Shield/check icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 3l7 4v6a8 8 0 0 1-7 8 8 8 0 0 1-7-8V7l7-4z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Chuyên nghiệp</h3>
              <p className="mt-2 text-sm text-gray-700">Quy trình chuẩn, dữ liệu cập nhật, tiêu chuẩn quốc tế — để mỗi quyết định đều có cơ sở rõ ràng.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-10 w-10 rounded-lg bg-rose-50 ring-1 ring-rose-100 flex items-center justify-center">
                {/* Eye icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-brandRed" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Minh bạch</h3>
              <p className="mt-2 text-sm text-gray-700">Chi phí, thời gian, cơ hội – nói rõ từ đầu. Bạn nắm quyền chủ động, không lo “ẩn phí” hay hứa hẹn mơ hồ.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                {/* Target icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="8"/>
                  <path d="M12 8v4l3 2"/>
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Hiệu quả</h3>
              <p className="mt-2 text-sm text-gray-700">Chiến lược nộp hồ sơ tối ưu, mốc thời gian rõ ràng, theo dõi sát sao — tập trung vào kết quả thật.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Gặp gỡ những người đồng hành</h2>
          <p className="mt-3 body-copy max-w-3xl">
            Đội ngũ của chúng tôi gồm các chuyên gia tuyển sinh, cựu du học sinh và cố vấn visa với kinh nghiệm thực chiến tại Mỹ & Canada.
            Điều làm nên khác biệt là sự gần gũi, tinh thần cố vấn và trách nhiệm đến cùng với mỗi hồ sơ.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Member 1 */}
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center text-brandBlue font-bold">HM</div>
              <h3 className="mt-3 font-semibold text-gray-900">Hà Minh</h3>
              <p className="text-sm text-gray-600">Chuyên gia tuyển sinh</p>
              <p className="mt-2 text-sm text-gray-700">10+ năm tư vấn chiến lược hồ sơ, định vị SOP theo thế mạnh cá nhân, tối ưu học bổng.</p>
            </article>
            {/* Member 2 */}
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-rose-50 ring-1 ring-rose-100 flex items-center justify-center text-brandRed font-bold">TK</div>
              <h3 className="mt-3 font-semibold text-gray-900">Trâm Kim</h3>
              <p className="text-sm text-gray-600">Cựu du học sinh Mỹ</p>
              <p className="mt-2 text-sm text-gray-700">Từng học MBA tại California; câu nói yêu thích: “Chọn đúng hướng, mọi nỗ lực đều có ý nghĩa.”</p>
            </article>
            {/* Member 3 */}
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center text-emerald-700 font-bold">QN</div>
              <h3 className="mt-3 font-semibold text-gray-900">Quốc Nam</h3>
              <p className="text-sm text-gray-600">Chuyên viên visa</p>
              <p className="mt-2 text-sm text-gray-700">Chuyên luyện phỏng vấn, chiến lược tài chính minh bạch, tăng xác suất đậu visa.</p>
            </article>
            {/* Member 4 */}
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-amber-50 ring-1 ring-amber-100 flex items-center justify-center text-amber-600 font-bold">LP</div>
              <h3 className="mt-3 font-semibold text-gray-900">Lan Phương</h3>
              <p className="text-sm text-gray-600">Cố vấn học thuật</p>
              <p className="mt-2 text-sm text-gray-700">Thiết kế lộ trình học – nghề phù hợp, k�� năng học thuật và hội nhập văn hóa.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 sm:py-16">
        <div className="section-wrapper max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Câu chuyện tiếp tục cùng bạn</h2>
          <p className="mt-3 body-copy">
            Mỗi hành trình là một câu chuyện khác nhau — và chúng tôi ở đây để lắng nghe, định hướng và đồng hành đến cùng.
            Nếu bạn đã sẵn sàng mở cánh cửa mới cho chính mình, hãy để FastFact cùng đi bước đầu tiên.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/contact" className="primary-cta">Đặt lịch tư vấn miễn phí</Link>
            <Link href="/services" className="secondary-cta">Xem dịch vụ của chúng tôi</Link>
          </div>
        </div>
      </section>
    </>
  )
}
