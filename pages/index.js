import Head from 'next/head'
import { NavBar } from '../components/nav-bar'
import { AboutMe } from '../pages/about'
import { MySkills } from '../pages/myskills'
import { MyWorks } from '../pages/work'
import { MyContacts } from '../pages/contact'
import Link from 'next/link'

import { FooterPortfolio } from '../components/footer-portfolio'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body translate="no">
        <NavBar />
        <main>
          <section id="welcome-section" className="welcome-section">
            <p>Hi, my name is</p>
            <h1>Stephania Nevado.</h1>
            <h2>I build things for the web.</h2>
            <p>I'm a nutritionist, manager, writer and now I'm a web development &hearts;</p>
          </section>

          <div className="grid">
            <Link id="about-me" href="/about">
              <a className="card">
                <h3>About &rarr;</h3>
                <p>Do or do not. There is no try. May the force be with me!!</p>
              </a>
            </Link>

            <Link id="my-skills" href="/myskills">
              <a className="card">
                <h3>My skills &rarr;</h3>
                <p>Power!! Unlimited power!! The force is strong with me!!</p>
              </a>
            </Link>

            <Link id="work"
              href="/work">
              <a className="card">
                <h3>Work &rarr;</h3>
                <p>These are my Padawan and my Jedi Master projects</p>
              </a>
            </Link>

            <Link id="contact"
              href="/contact">
              <a className="card">
                <h3>Contact &rarr;</h3>
                <p>
                  Join me, and together, we can rule the galaxy.
            </p>
              </a>
            </Link>
          </div>
        </main>
      </body>
      <FooterPortfolio />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: blue;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        `}</style>
    </div >
  )
}
