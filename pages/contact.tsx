import Head from 'next/head'
import { FormEvent } from 'react'

export default function ContactPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    // For now, just log. Integrate backend/MCP later.
    console.log('Contact form submission', data)
    alert('Cảm ơn bạn! Chúng t��i sẽ liên hệ trong 24 giờ làm việc.')
    form.reset()
  }

  return (
    <>
      <Head>
        <title>Liên hệ – FastFact Du Học</title>
      </Head>
      <section className="section-wrapper py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Liên Hệ Với Chúng Tôi</h1>
        <p className="mt-4 body-copy">Sẵn sàng đồng hành cùng bạn trên hành trình mở cánh cửa du học. Hãy kết nối, chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Thông tin liên hệ</h2>
            <ul className="mt-3 text-gray-700 space-y-2">
              <li><span className="font-medium">Địa chỉ:</span> Vui lòng cập nhật địa chỉ văn phòng của bạn tại đây.</li>
              <li><span className="font-medium">Điện thoại:</span> Vui lòng cập nhật số hotline của bạn tại đây.</li>
              <li><span className="font-medium">Email:</span> Vui lòng cập nhật email chính thức của bạn tại đây.</li>
              <li><span className="font-medium">Giờ làm việc:</span> Thứ 2–Thứ 6, 9:00–18:00; Thứ 7, 9:00–12:00.</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên *</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại *</label>
              <input id="phone" name="phone" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tin nhắn</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue" placeholder="Mục tiêu du học, ngành, thời gian dự kiến…" />
            </div>
            <button type="submit" className="primary-cta">Gửi yêu cầu tư vấn</button>
            <p className="text-xs text-gray-500">Chúng tôi cam kết bảo mật thông tin của bạn và chỉ sử dụng cho mục đích tư vấn.</p>
          </form>
        </div>
      </section>
    </>
  )
}
