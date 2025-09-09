export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="section-wrapper py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <p className="text-xl font-semibold"><span className="text-brandBlue">FastFact</span> <span className="text-brandRed">Du Học</span></p>
          <p className="mt-3 text-gray-600">Đồng hành 1:1 giúp bạn vạch rõ con đường du học Mỹ & Canada – từ khám phá bản thân, SOP đến visa.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Liên hệ</h3>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li>Văn phòng HCM: Tầng 5, 12 Nguyễn Huệ, Q.1, TP.HCM</li>
            <li>Điện thoại: 090 000 0000</li>
            <li>Email: hello@fastfactduhoc.vn</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Kết nối</h3>
          <div className="mt-3 flex items-center gap-3">
            <a href="https://facebook.com/fastfactduhoc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-gray-200 hover:ring-brandBlue transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-600 group-hover:text-brandBlue" fill="currentColor" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            <a href="https://instagram.com/fastfactduhoc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-gray-200 hover:ring-rose-400 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-600 group-hover:text-rose-500" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Giờ làm việc</h3>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li>Thứ 2 – Thứ 6: 09:00 – 18:00</li>
            <li>Thứ 7: 09:00 – 12:00</li>
            <li>Chủ nhật: Nghỉ</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="section-wrapper py-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} FastFact Du Học. All rights reserved.</p>
          <p className="text-gray-400">Mở cánh cửa hành trình du học Mỹ & Canada.</p>
        </div>
      </div>
    </footer>
  )
}
