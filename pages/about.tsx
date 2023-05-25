import styled from 'styled-components'

import { Breakpoints } from 'components/Breakpoints'
import { grey, pink } from 'components/colors'
import { Title } from 'components/Title'

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
    img {
      margin-top: 7rem;
    }
  }
`

const AboutMe = () => {
  return (
    <>
      <Main>
        <Title number="01" title="About me" />

        <Row>
          <Column>
            <p>
              Hello! My name is Stephania Nevado. I'm a frontend developer,
              manager and nutritionist located in Sweden.
            </p>
            <p>
              My interest in web development started in 2020. I wanted to try
              out creating a HealthTech product and get more hands-on experience
              by taking a digital product from idea to release. That's how
              Nutreto was born. Nutreto is a cloud-based platform for nutrition
              and health, usable for both patients and clinics. Check it out at
              <a
                href="https://nutreto.com/en/"
                target="_blank"
                rel="noreferrer">
                {' '}
                nutreto.com!
              </a>
            </p>
            <p>
              Currently I'm working in a start-up building the most convenient,
              transparent and easy way to buy or lease an electrified vehicle
              online. For the frontend we're using modern web technologies
              (Next.js, JavaScript, React, Cypress, Flora).
            </p>
            <p>
              In my first job I built an AI product for synthetic data
              generation. I created a frontend application from scratch using
              modern web technologies (JavaScript, React, Styled components,
              Jest). My aim was to create a modular, testable code base with a
              high unit test coverage.
            </p>
            <p>
              I'm passionate about tech, leadership and health, change
              management, process improvement and teamwork. I'm also always
              curious to learn new things. I'm a well-organized person, a
              problem solver with high attention to detail.
            </p>
          </Column>
          <Column>
            <img src="/picture.svg" />
          </Column>
        </Row>
      </Main>
    </>
  )
}

export default AboutMe
