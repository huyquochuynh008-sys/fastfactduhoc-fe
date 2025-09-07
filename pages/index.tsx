import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Trang chủ – FastFact Du Học</title>
      </Head>
      <section className="section-wrapper py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
            Mở cánh cửa du học – Đồng hành trên hành trình chạm tới tương lai tại <span className="text-brandBlue">Mỹ</span> & <span className="text-brandRed">Canada</span>
          </h1>
          <p className="mt-6 body-copy">
            Chúng tôi là đối tác tin cậy của phụ huynh và học sinh trên con đường chinh phục giấc mơ du học. Với tông xanh lam – đỏ của khát vọng và cơ hội, chúng tôi xây lộ trình rõ ràng, tối ưu hồ sơ và dẫn dắt bạn vượt qua mọi “cánh cửa” tuyển sinh và visa với sự tận tâm, minh bạch và chuyên nghiệp.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link href="/contact" className="primary-cta">Đăng ký tư vấn miễn phí</Link>
            <Link href="/services" className="secondary-cta">Xem dịch vụ</Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="section-wrapper">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Dịch vụ nổi bật</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Tư vấn 1:1</h3>
              <p className="mt-2 text-sm text-gray-600">Lắng nghe mục tiêu, đánh giá hồ sơ và thiết kế lộ trình cá nhân hóa phù hợp năng lực, ngân sách và thời gian.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Viết SOP</h3>
              <p className="mt-2 text-sm text-gray-600">Xây dựng câu chuyện nổi bật, rõ mục tiêu học thuật – nghề nghiệp, thuyết phục hội đồng tuyển sinh.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Đăng ký trường/đại học</h3>
              <p className="mt-2 text-sm text-gray-600">Chọn trường chiến lược, chuẩn bị hồ sơ chuẩn xác, nộp đúng hạn và theo dõi kết quả.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Hỗ trợ Visa</h3>
              <p className="mt-2 text-sm text-gray-600">Chuẩn bị hồ sơ, luyện phỏng vấn, tối ưu minh chứng tài chính nhằm nâng cao tỷ lệ thành công.</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Đào tạo (Training)</h3>
              <p className="mt-2 text-sm text-gray-600">Luyện phỏng vấn, kỹ năng học t��p, quản lý thời gian và hòa nhập văn hóa Mỹ & Canada.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
