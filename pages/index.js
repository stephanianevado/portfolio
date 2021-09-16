import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { FooterPortfolio } from '../components/footer-portfolio'
import { Card } from '../components/Card'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'
import { Breakpoints } from '../components/breakpoints'

const Main = styled.main`
  padding: 2rem;
  ${Breakpoints.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`
const Section = styled.section`
  h1 {
    color: ${pink};
    font-size: 1rem;
  }
  h2 {
    color: ${white};
    font-size: 2.5rem;
  }
  h3 {
    color: ${grey};
    font-size: 1.5rem;
  }
  h4 {
    color: ${grey};
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
  ${Breakpoints.laptop}
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
    margin-bottom: 2.5rem;
  }
`

const Row = styled.div`
  margin: 0, 1rem;
  ${Breakpoints.laptop} {
    display: flex;
    flex-wrap: wrap;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <Section>
          <h1>Hi, my name is</h1>
          <h2>Stephania Nevado.</h2>
          <h3>I build things for the web.</h3>
          <h4>
            I'm a nutritionist, manager, writer and now I'm a web developer
            &hearts;
          </h4>
        </Section>
        <Row>
          <Card href="/about" number="01" title="About" text="Get to know me" />
          <Card
            href="/myskills"
            number="02"
            title="Skills"
            text="What I've Worked"
          />
        </Row>
        <Row>
          <Card
            href="/work"
            number="03"
            title="Work"
            text="Some Things I've built"
          />
          <Card
            href="/contact"
            number="04"
            title="Contact"
            text="What's Next? Get in touch!"
          />
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}
