import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aspire</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Main />
      <Footer />
    </>
  )
}
