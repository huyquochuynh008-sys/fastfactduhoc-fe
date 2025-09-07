export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="section-wrapper py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} FastFact Du Học. All rights reserved.</p>
        <p className="text-gray-400">Mở cánh cửa hành trình du học Mỹ & Canada.</p>
      </div>
    </footer>
  )
}
