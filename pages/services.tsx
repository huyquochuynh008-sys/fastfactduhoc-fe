import Head from 'next/head'

function ServiceCard({ title, description, benefits }: { title: string; description: string; benefits: string[] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
      <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
        {benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Dịch vụ – FastFact Du Học</title>
      </Head>
      <section className="section-wrapper py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Dịch vụ</h1>
        <p className="mt-4 body-copy">Trình bày chi tiết dịch vụ và lợi ích bạn nhận được trong hành trình mở cánh cửa du học.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Tư vấn 1:1 – Lộ trình cá nhân hóa"
            description="Bắt đầu bằng buổi khám sức học thuật và mục tiêu, chúng tôi phân tích điểm mạnh – hạn chế, ngân sách và thời gian để đề xuất lộ trình tối ưu. Mỗi bước đều có mốc thời gian và kết quả kỳ vọng."
            benefits={[
              'Bản đồ lộ trình chi tiết theo mục tiêu',
              'Danh sách trường phù hợp (reach/target/safe)',
              'Kế hoạch chuẩn bị hồ sơ theo tháng/tuần',
              'Tư vấn học bổng và tài chính',
              'Theo dõi tiến độ và điều chỉnh linh hoạt',
            ]}
          />
          <ServiceCard
            title="Viết SOP (Tuyên bố Mục đích) – Câu chuyện thuyết phục"
            description="Khai thác câu chuyện cá nhân, thành tựu, động lực và tầm nhìn nghề nghiệp để xây SOP mạch lạc, nổi bật và chân thực. Mỗi câu chữ đều hướng tới thông điệp ‘vì sao bạn xứng đáng’."
            benefits={[
              'Khung nội dung theo yêu cầu từng trường',
              'Chỉnh sửa nhiều vòng đến khi sắc nét',
              'Tối ưu tính nhất quán với CV, LOR, hồ sơ học thuật',
              'Gia tăng sức thuyết phục và khác biệt',
            ]}
          />
          <ServiceCard
            title="H��� trợ đăng ký trường học/đại học – Quy trình hiệu quả"
            description="Từ lập danh sách trường, chuẩn bị tài liệu, điền form, nộp hồ sơ đến theo dõi trạng thái – mọi khâu đều có checklist rõ ràng để tiết kiệm thời gian và công sức."
            benefits={[
              'Lịch nộp hồ sơ và nhắc hạn',
              'Kiểm tra tính đầy đủ – chính xác trước khi gửi',
              'Hướng dẫn học bổng, miễn/giảm phí nếu có',
              'Theo dõi kết quả, hỗ trợ phản hồi/bổ sung',
            ]}
          />
          <ServiceCard
            title="Hỗ trợ Visa – Mở cánh cửa nhập cảnh"
            description="Chuẩn bị hồ sơ chặt chẽ, luyện phỏng vấn, sắp xếp lịch hẹn và hướng dẫn từng bước cho tới khi nhận visa. Tập trung vào tính trung thực, nhất quán và năng lực tài chính – học tập."
            benefits={[
              'Danh mục giấy tờ chuẩn/bổ sung theo hồ sơ',
              'Kịch bản phỏng vấn và luyện phản xạ tự tin',
              'Rà soát minh chứng tài chính và kế hoạch học tập',
              'Hướng dẫn các thủ tục sau cấp visa',
            ]}
          />
          <ServiceCard
            title="Đào tạo (Training) – Sẵn sàng cho chặng đường mới"
            description="Các khóa học gọn – thực chiến, giúp bạn vượt qua những ‘khúc cua’ đầu tiên tại Mỹ & Canada."
            benefits={[
              'Luyện phỏng vấn (trường/visa/học bổng)',
              'Kỹ năng học tập: ghi chú, nghiên cứu, bài luận, thuyết trình',
              'Quản lý thời gian, tư duy phản biện, học online hiệu quả',
              'Hòa nhập văn hóa, kỹ năng sống và an toàn cá nhân',
            ]}
          />
        </div>
      </section>
    </>
  )
}
