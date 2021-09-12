import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/nav-bar'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'
import { Titles } from '../components/Titles'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-right: 3rem;
  padding-left: 3rem;
  p {
    color: ${grey};
    display: inline-block;
    position: relative;
    a {
      color: ${pink};
      text-decoration: none;
    }
  }
`

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <Main>
          <Titles number="01" title="About me" />
          <div>
            <div>
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
            <div>
              <img src="/picture.svg" />
            </div>
          </div>
        </Main>
        <FooterPortfolio />
      </div>
    </>
  )
}

export default AboutMe
