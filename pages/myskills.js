import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/NavBar'
import { Titles } from '../components/Titles'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'

const Main = styled.main`
  padding-top: 4rem;
  padding-right: 3rem;
  padding-left: 3rem;
  p {
    color: ${grey};
    position: relative;
    a {
      color: ${pink};
      text-decoration: none;
    }
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  width: 25rem;
  h4 {
    color: ${white};
  }
`

const MySkills = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <Titles number="02" title="My skills" />
        <Row>
          <Column>
            <p>
              Since beginning my journey I've dedicated myself to learning
              about frontend development starting with responsive web design
              principles in HTML and CSS. Followed by JavaScript algorithms and
              data structure to frontend development libraries.
            </p>
            <p>
              I also have experience as a manager, head of department,
              leadership, process improvement and teamwork.
            </p>
            <p>
              Visit my
              <a
                href="https://www.linkedin.com/in/stephanianevado/"
                target="_blank"
              >
                {' '}
                Linkedin
              </a>{' '}
              profile for more details or just{' '}
              <a href="/contact" target="_blank">
                contact
              </a>{' '}
              me.
            </p>
          </Column>
          <Column>
            <h4>Programming Languages:</h4>
            <p>JavaScript (ES6), TypeScript, HTML, HTML5, CSS/Sass.</p>
            <h4>Libraries & Frameworks:</h4>
            <p>Bootstrap, jQuery, React, Node.js, Next.js, Materialize.</p>
            <h4>Tools & Platforms:</h4>
            <p> Github, Redux, Contentful, Wordpress, Wix, Babel, Terminal.</p>
            <h4>Design:</h4>
            <p>Figma.</p>
          </Column>
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}

export default MySkills
