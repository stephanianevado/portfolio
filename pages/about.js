import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/NavBar'
import styled from 'styled-components'
import { grey, pink } from '../components/colors'
import { Titles } from '../components/Titles'
import { Breakpoints } from '../components/breakpoints'

const Main = styled.main`
  padding: 2rem;
  p {
    color: ${grey};
    a {
      color: ${pink};
      text-decoration: none;
    }
  }
  ${Breakpoints.laptop} {
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`
const Row = styled.div`
  ${Breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`

const Column = styled.div`
  img {
    width: 100%;
  }
  ${Breakpoints.laptop} {
    width: 25rem;
  }
`

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <Titles number="01" title="About me" />

        <Row>
          <Column>
            <p>
              Hello! My name is Stephania Nevado. I'm a nutritionist, manager and
              Front-End Developer located in Sweden.
            </p>
            <p>
              My interest in web development started in 2020. I wanted to
              try out creating a HealthTech product and get more hands-on
              experience by taking a digital product from idea to release.
              That's how Nutreto was born. Nutreto is a cloud-based platform for
              nutrition and health, usable for both patients and clinics. Check
              it out at
              <a href="https://nutreto.com/en/" target="_blank">
                {' '}
                nutreto.com!
              </a>
            </p>
            <p>
              I'm passionate about tech, health and leadership, change
              management, process improvement and teamwork. I'm also always
              curious to learn new things. I'm a well-organised person, a problem solver
              with high attention to detail.
            </p>
          </Column>
          <Column>
            <img src="/picture.svg" />
          </Column>
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}

export default AboutMe
