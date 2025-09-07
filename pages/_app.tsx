import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FastFact Du Học – Tư vấn du học & visa Mỹ, Canada</title>
        <meta name="description" content="Tư vấn 1:1, viết SOP, hỗ trợ đăng ký trường, hỗ trợ visa, đào tạo phỏng vấn và kỹ năng cho hành trình du học Mỹ & Canada." />
      </Head>
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
