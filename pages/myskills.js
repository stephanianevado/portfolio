import Head from 'next/head'
import { FooterPortfolio } from '../components/FooterPortfolio'
import { NavBar } from '../components/NavBar'
import { Title } from '../components/Title'
import styled from 'styled-components'
import { grey, pink, white } from '../components/colors'
import { Breakpoints } from '../components/Breakpoints'

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
  h4 {
    color: ${white};
  }
  ${Breakpoints.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    width: 25rem;
  }
`

const MySkills = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBar />
      <Main>
        <Title number="02" title="My skills" />
        <Row>
          <Column>
            <p>
              Since the beginning of my journey I've dedicated myself to
              learning about frontend development, starting with responsive web
              design principles in HTML and CSS, followed by JavaScript
              algorithms and data structures and frontend development libraries.
            </p>
            <p>
              I also have experience as a manager and head of department, as
              well as with leadership, process improvement and teamwork.
            </p>
            <p>
              Visit my
              <a
                href="https://www.linkedin.com/in/stephanianevado/"
                target="_blank"
              >
                {' '}
                LinkedIn
              </a>{' '}
              profile for more details or just{' '}
              <a href="/contact" target="_blank">
                contact
              </a>{' '}
              me.
            </p>
          </Column>
          <Column>
            <h4>Programming languages:</h4>
            <p> JavaScript (ES6), HTML, CSS/Styled components/Sass.</p>
            <h4>Libraries & frameworks:</h4>
            <p>
              {' '}
              React, Next.js, Node.js , Bootstrap, jQuery, Materialize, Redux.
            </p>
            <h4>Tools & platforms:</h4>
            <p>
              {' '}
              GitHub, Prettier, Contentful, Wordpress, Wix, Babel, Terminal
              (bash/zsh), VSCode, IntelliJ, Figma.
            </p>
            <h4>Management:</h4>
            <p>
              {' '}
              Process and planning, team management, personal development,
              stakeholder communication.
            </p>
          </Column>
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}

export default MySkills
