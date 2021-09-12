import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/nav-bar'

const MyWorks = () => {
    return (
      <div className="container">
        <Head>
          <title>Stephania Nevado's portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <NavBar />
          <main>
            <p>lalalalalalalalalalalalalalala.°°°!!!</p>
          </main>
        </body>
        <FooterPortfolio />
      </div>
    )
}

export default MyWorks;