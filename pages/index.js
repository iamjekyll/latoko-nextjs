import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Latoko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Latoko" />
        <p className="description">
          <Link href="/test">
            <a>Pindah</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
