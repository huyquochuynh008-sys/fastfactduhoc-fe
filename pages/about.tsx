import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Về chúng tôi – FastFact Du Học</title>
      </Head>
      <section className="section-wrapper py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Hành Trình Của Chúng Tôi</h1>
        <div className="mt-6 space-y-6 body-copy">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Sứ mệnh và Tầm nhìn</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li><span className="font-medium">Sứ mệnh:</span> Giúp học sinh Việt Nam hiện thực hóa giấc mơ du học bằng giải pháp trọn gói, cá nhân hóa và đáng tin cậy.</li>
              <li><span className="font-medium">Tầm nhìn:</span> Trở thành đơn vị tư vấn du học – visa hàng đầu cho thị trường Mỹ & Canada, nơi mỗi học sinh đều tìm thấy “con đường mới” ph�� hợp để phát triển bền vững.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Giá trị cốt lõi</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Tận tâm: Đồng hành 1:1, sát cánh từ định hướng đến nhập học.</li>
              <li>Chuyên nghiệp: Quy trình chuẩn, dữ liệu cập nhật, tiêu chuẩn quốc tế.</li>
              <li>Minh bạch: Rõ ràng về chi phí, thời gian, tình trạng hồ sơ và cơ hội.</li>
              <li>Hiệu quả: Tối ưu chiến lược nộp hồ sơ và tăng tỷ lệ thành công.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Đội ngũ</h2>
            <p>Đội ngũ cố vấn gồm chuyên gia tuyển sinh, cựu du học sinh và chuyên viên visa giàu kinh nghiệm. Chúng tôi kết hợp hiểu biết bản địa với chuẩn mực quốc tế để đưa ra giải pháp phù hợp, thực tế và bền vững cho từng hồ sơ.</p>
          </div>
        </div>
      </section>
    </>
  )
}
