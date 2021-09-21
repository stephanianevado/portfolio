import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/NavBar'
import { Titles } from '../components/Titles'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'
import { Breakpoints } from '../components/breakpoints'

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
  ${Breakpoints.laptop} {
    padding: 2rem;
    width: 25rem;
  }
`

const Button = styled.button`
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <Titles number="04" title="Contact me" />
        <Row>
          <Column>
            <h4>Get in touch</h4>
            <p>
              I'm currently looking for new opportunities and my inbox is always
              open.
            </p>
            <p>
              I love to code - it was an amazing discovery for me. I’m really
              eager to learn new things and excited to start contributing as
              soon as possible.
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
