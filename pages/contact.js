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
    padding-top: 4rem;
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
    position: relative;
  }
  ${Breakpoints.laptop} {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25rem;
    h4 {
      color: ${white};
    }
    p {
      color: ${grey};
      position: relative;
    }
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
            <h4>Get In Touch</h4>
            <p>
              I'm currently looking for new opportunities, my inbox is always
              open.
            </p>
            <p>
              I'm interested in health tech companies, thanks to my previous
              experience as a health staff and manager it would be a good
              combination. However I'm also open to proposals that help me learn
              more and more about web development and frontend.
            </p>
            <Button>
              <a href="mailto:stephania.arantxa@gmail.com" target="_blank">
                Say Hello
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
