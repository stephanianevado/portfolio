import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/NavBar'
import { Titles } from '../components/Titles'

const MyWorks = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <Titles number="03" title="My work" />
      </main>
      <FooterPortfolio />
    </>
  )
}

export default MyWorks
