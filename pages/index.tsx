import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Trang chủ – FastFact Du Học</title>
        <meta name="description" content="Tư vấn du học Mỹ & Canada, hỗ trợ visa, viết SOP, đăng ký trường, đào tạo kỹ năng. Đồng hành 1:1 biến bối rối thành lộ trình rõ ràng." />
      </Head>

      {/* Hero */}
      <section className="hero-section relative py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden>
            <source src="https://videos.pexels.com/video-files/5138030/5138030-sd_338_640_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6549534/6549534-hd_720_1280_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="section-wrapper max-w-3xl">
          <p className="text-sm font-medium text-brandBlue">Bắt đầu hành trình của bạn</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-gray-900">
            Khởi hành hôm nay, chạm tới tương lai – Cánh cửa du học <span className="text-brandBlue">Mỹ</span> & <span className="text-brandRed">Canada</span> đang mở
          </h1>
          <p className="mt-6 body-copy">
            Bối rối chọn ngành, sợ trượt visa, ngập trong thông tin? Chúng tôi biến lo lắng thành một lộ trình rõ ràng, có chuyên gia đồng hành 1:1 từ định hướng đến nhập h���c – để bạn tự tin tiến bước trên con đường mới.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="primary-cta">Bắt đầu hành trình</Link>
            <Link href={{ pathname: '/', hash: 'stories' }} className="secondary-cta">Khám phá câu chuyện thành công</Link>
          </div>
        </div>
      </section>

      {/* Services as steps */}
      <section className="py-14">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Chúng tôi sẽ làm gì cho bạn?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Bước 1</p>
              <h3 className="mt-1 font-semibold text-gray-900">Tư vấn 1:1 – Hiểu rõ bản thân bạn</h3>
              <p className="mt-2 text-sm text-gray-700">Định hình mục tiêu, ngành học, ngân sách và thời gian. Thiết kế lộ trình cá nhân hóa phù hợp nhất với bạn.</p>
              <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: Icon la bàn/định hướng, avatar trò chuyện.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Bước 2</p>
              <h3 className="mt-1 font-semibold text-gray-900">Viết SOP – Kể câu chuyện của bạn</h3>
              <p className="mt-2 text-sm text-gray-700">Khai thác điểm mạnh, động lực và tầm nhìn nghề nghiệp để tạo SOP mạch lạc, nổi bật và thuyết phục.</p>
              <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: Icon bút viết/tờ giấy, highlight đoạn văn.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Bước 3</p>
              <h3 className="mt-1 font-semibold text-gray-900">Đăng ký trường – Nộp hồ sơ chiến lược</h3>
              <p className="mt-2 text-sm text-gray-700">Chọn trường reach/target/safe, chuẩn bị tài liệu, nộp đúng hạn và theo dõi kết quả sát sao.</p>
              <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: Icon biểu đồ/tick checklist, logo trường.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Bước 4</p>
              <h3 className="mt-1 font-semibold text-gray-900">Hỗ trợ Visa – Vượt qua phỏng vấn tự tin</h3>
              <p className="mt-2 text-sm text-gray-700">Chuẩn bị hồ sơ, luyện phỏng vấn, tối ưu minh chứng tài chính để nâng cao tỷ lệ thành công.</p>
              <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: Icon hộ chiếu/tem visa, khiên bảo vệ.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Bước 5</p>
              <h3 className="mt-1 font-semibold text-gray-900">Đào tạo – Sẵn sàng hòa nhập</h3>
              <p className="mt-2 text-sm text-gray-700">Luyện phỏng vấn, kỹ năng học tập, quản lý thời gian, hòa nhập văn hóa Mỹ & Canada.</p>
              <p className="mt-3 text-xs text-gray-500">Gợi ý hình ảnh: Icon tên lửa/vali, bản đồ thế giới.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="bg-gray-50 py-14">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Câu chuyện thành công</h2>
          <p className="mt-3 body-copy max-w-3xl">Những chia sẻ chân thực từ học viên sau khi bước qua cánh cửa visa và đặt chân tới ngôi trường mơ ước.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <figure className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800">“Trước đây mình rất lo lắng vì hồ sơ lộn xộn. FastFact sắp xếp mọi thứ theo checklist rõ ràng, mình chỉ việc làm theo và cuối cùng đậu visa ngay vòng 1.”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">Ngọc A. – Cử nhân CS, Canada</figcaption>
            </figure>
            <figure className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800">“SOP được team chỉnh nhiều vòng để kể đúng câu chuyện của mình. Hội đồng phản hồi rất tích cực và mình nhận được học bổng 50%.”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">Minh K. – MBA, USA</figcaption>
            </figure>
            <figure className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800">“Buổi luyện phỏng vấn giúp mình tự tin, trả lời vào trọng tâm. Lúc vào phỏng vấn thật, mọi thứ diễn ra đúng ‘kịch bản’ đã luyện.”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">Linh P. – Data Analytics, Canada</figcaption>
            </figure>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="primary-cta">Tôi cũng muốn viết câu chuyện của mình</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Hỏi &amp; Đáp Nhanh</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Du học Mỹ/Canada cần chuẩn bị những gì trước?</summary>
              <p className="mt-2 text-sm text-gray-700">Xác định mục tiêu ngành – trường – ngân sách, kiểm tra yêu cầu tiếng Anh/điểm số, chuẩn bị giấy tờ học thuật và tài chính. Chúng tôi sẽ lập checklist theo hồ sơ của bạn.</p>
            </details>
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">SOP quan trọng thế nào và viết ra sao?</summary>
              <p className="mt-2 text-sm text-gray-700">SOP giúp thể hiện động lực, năng lực và kế hoạch tương lai. Chúng tôi đồng hành từ dàn ý đến chỉnh sửa nhiều vòng để câu chuyện của bạn nổi bật, nhất quán với hồ sơ.</p>
            </details>
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Tỷ lệ đậu visa có đảm bảo không?</summary>
              <p className="mt-2 text-sm text-gray-700">Không ai có thể đảm bảo 100%. Chúng tôi tập trung chuẩn bị hồ sơ trung thực, logic và luyện phỏng vấn kỹ lưỡng để tối đa hóa khả năng thành công.</p>
            </details>
            <details className="rounded-lg border border-gray-100 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Bao lâu để hoàn tất hồ sơ?</summary>
              <p className="mt-2 text-sm text-gray-700">Tùy chương trình và thời điểm, trung bình 6–12 tuần cho chuẩn bị và nộp. Chúng tôi sẽ đưa timeline chi tiết theo từng bước để bạn chủ động.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
