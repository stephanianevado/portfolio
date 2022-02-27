import Head from 'next/head'
import styled from 'styled-components'
import { Breakpoints } from '../components/Breakpoints'
import { grey, pink, white } from '../components/colors'
import { FooterPortfolio } from '../components/FooterPortfolio'
import { NavBar } from '../components/NavBar'
import { Title } from '../components/Title'

const Main = styled.main`
  padding: 2.5rem;
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
    margin-top: 5rem;
  }
`
const Column = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    color: ${white};
  }
  p {
    color: ${grey};
  }
  a {
    color: ${pink};
    text-decoration: none;
  }
  ${Breakpoints.laptop} {
    padding: 2rem;
    width: 25rem;
  }
`

const Button = styled.button`
  cursor: pointer;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${pink};
  border-radius: 5px;
  width: 10rem;
  height: 3rem;
  a {
    display: inline-block;
    text-decoration: none;
    color: ${white};
  }
  a:hover {
    color: ${white};
    background-color: ${pink};
  }
  &:hover {
    background-color: ${pink};
    opacity: 0.5;
  }
`
const MyContacts = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBar />
      <Main>
        <Title number="04" title="Contact me" />
        <Row>
          <Column>
            <h4>Get in touch</h4>
            <p>
              I'm currently looking for new opportunities and my inbox is always
              open.
            </p>
            <p>
              I love to code - it was an amazing discovery for me. I'm always
              eager to learn new things and grow as a developer. Check out my
              <a href="https://github.com/stephanianevado" target="_blank">
                {' '}
                GitHub
              </a>{' '}
              !
            </p>
            <Button>
              <a href="mailto:stephania.arantxa@gmail.com" target="_blank">
                Say hello
              </a>
            </Button>
          </Column>
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}

export default MyContacts
