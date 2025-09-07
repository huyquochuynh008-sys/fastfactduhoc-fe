import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="section-wrapper flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-brandBlue">FastFact</span>
          <span className="text-xl font-semibold text-brandRed">Du Học</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-brandBlue">Trang chủ</Link>
          <Link href="/about" className="hover:text-brandBlue">Về chúng tôi</Link>
          <Link href="/services" className="hover:text-brandBlue">Dịch vụ</Link>
          <Link href="/contact" className="hover:text-brandBlue">Liên hệ</Link>
        </nav>
      </div>
    </header>
  )
}
