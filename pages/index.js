import Head from 'next/head'
import styled from 'styled-components'
import { Breakpoints } from '../components/Breakpoints'
import { Card } from '../components/Card'
import { grey, pink, white } from '../components/colors'
import { FooterPortfolio } from '../components/FooterPortfolio'
import { NavBar } from '../components/NavBar'

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
  padding-bottom: 2rem;
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
  ${Breakpoints.laptop} {
    padding: 1rem 8rem 2.5rem 8rem;
    h1 {
      font-size: 1rem;
    }
    h2 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.5rem;
    }
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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBar />
      <Main>
        <Section>
          <h1>Hi! My name is</h1>
          <h2>Stephania Nevado.</h2>
          <h3>
            I'm a full stack developer currently working at a start-up creating
            an AI product for synthetic data generation. I love to code - it was
            an amazing discovery for me &hearts;
          </h3>
        </Section>
        <Row>
          <Card href="/about" number="01" title="About" text="Get to know me" />
          <Card
            href="/myskills"
            number="02"
            title="Skills"
            text="What I know"
          />
        </Row>
        <Row>
          <Card
            href="/work"
            number="03"
            title="Work"
            text="Some things I've built"
          />
          <Card
            href="/contact"
            number="04"
            title="Contact"
            text="What's next? Get in touch!"
          />
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}
