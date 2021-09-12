import Head from 'next/head'
import { NavBar } from '../components/nav-bar'
import { FooterPortfolio } from '../components/footer-portfolio'
import { Card } from '../components/Card'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const Row = styled.div`
  display: flex;
  width: 100%;
`

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
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

          <Row>
            <Card
              href="/about"
              number="01"
              title="About"
              text="Do or do not. There is no try. May the force be with me!!"
            />
            <Card
              href="/myskills"
              number="02"
              title="My skills"
              text="Power!! Unlimited power!! The force is strong with me!!"
            />
          </Row>
          <Row>
            <Card
              href="/work"
              number="03"
              title="Work"
              text="These are my Padawan and my Jedi Master projects"
            />
            <Card
              href="/contact"
              number="04"
              title="Contact"
              text="Join me, and together, we can rule the galaxy."
            />
          </Row>
        </Main>
        <FooterPortfolio />
      </Container>
    </>
  )
}
