import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/nav-bar'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'

const Main = styled.main`
  h2 {
    color: ${white};
    b {
      color: ${pink};
    }
  }
  p {
    color: ${grey};
    display: inline-block;
    position: relative;
    a {
      color: ${pink};
      text-decoration: none;
    }
  }
  .grid {
    display: grid;
    grid-temple-column: repeat(2, 2fr);
    grid-temple-row: 2fr;
    grid-temple-areas: 'text picture';
  }
`

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <NavBar />
        <Main>
          <h2>
            <b>01.</b> About me
          </h2>
          <div className="grid">
            <div className="text">
              <p>
                Hello! My name is Stephania Nevado I'm a nutritionist, manager
                and Front-End Developer located in Sweden.
              </p>
              <p>
                My interest in web development started in 2020 when I wanted to
                try out creating a HealthTech product and get more hands-on
                experience by taking a digital product from idea to release.
                That's how Nutreto was born. Nutreto is a cloud-based platform
                for nutrition and health, usable for both patients and clinics.
                Check it out at
                <a href="https://nutreto.com/en/" target="_blank">
                  {' '}
                  nutreto.com!
                </a>
                .
              </p>
              <p>
                I'm passionate about tech, health and leadership, change
                management, process improvement and teamwork. I'm also always
                curious to learn new things. Well-organised person, problem
                solver with high attetion to detail.
              </p>
              <p>
                <a href="/contact" target="_blank">
                  {' '}
                  Let's rule the galaxy!
                </a>
              </p>
            </div>
            <div className="picture">
              <img src="/public/picture.jpg" />
            </div>
          </div>
        </Main>
        <FooterPortfolio />
      </div>
    </>
  )
}

export default AboutMe
