import Head from 'next/head'
import { NavBar } from '../components/nav-bar'
import Link from 'next/link'
import { FooterPortfolio } from '../components/footer-portfolio'
import styled from 'styled-components'
import { dark, grey, pink, white } from '../components/colors'

const Body = styled.body`
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${dark};
`

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1em;

  .welcome-section {
    h1 {
      color: ${pink};
      font-size: 1rem;
    }
    h2 {
      color: ${white};
      font-size: 3rem;
    }
    h3 {
      color: ${grey};
      font-size: 3rem;
    }
    h4 {
      color: ${grey};
      font-size: 1.5rem;
    }
  }
`
const Div = styled.div`
  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-size: 2rem;
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: ${grey};
    text-decoration: none;
    border: 1px solid ${white};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    b {
      color: ${pink};
    }
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: ${pink};
    border-color: ${pink};
  }

  .card h5 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`

export default function Home() {
  return (
    <Div className="container">
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body translate="no">
        <NavBar />
        <Main>
          <section id="welcome-section" className="welcome-section">
            <h1>Hi, my name is</h1>
            <h2>Stephania Nevado.</h2>
            <h3>I build things for the web.</h3>
            <h4>
              I'm a nutritionist, manager, writer and now I'm a web development
              &hearts;
            </h4>
          </section>
          <Div className="grid">
            <Link id="about-me" href="/about">
              <a className="card">
                <h5>
                  <b>01.</b> About &rarr;
                </h5>
                <p>Do or do not. There is no try. May the force be with me!!</p>
              </a>
            </Link>
            <Link id="my-skills" href="/myskills">
              <a className="card">
                <h5>
                  <b>02.</b> My skills &rarr;
                </h5>
                <p>Power!! Unlimited power!! The force is strong with me!!</p>
              </a>
            </Link>
            <Link id="work" href="/work">
              <a className="card">
                <h5>
                  <b>03.</b> Work &rarr;
                </h5>
                <p>These are my Padawan and my Jedi Master projects</p>
              </a>
            </Link>

            <Link id="contact" href="/contact">
              <a className="card">
                <h5>
                  <b>04.</b> Contact &rarr;
                </h5>
                <p>Join me, and together, we can rule the galaxy.</p>
              </a>
            </Link>
          </Div>
        </Main>
      </Body>
      <FooterPortfolio />
    </Div>
  )
}
