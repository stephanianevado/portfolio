import Head from 'next/head'
import { FooterPortfolio } from '../components/footer-portfolio'
import { NavBar } from '../components/NavBar'
import { Titles } from '../components/Titles'
import { WorkComp } from '../components/WorkComp'
import styled from 'styled-components'
import { Breakpoints } from '../components/breakpoints'

const Main = styled.main`
  padding: 2rem;
  ${Breakpoints.laptop} {
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`
const Row = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${Breakpoints.laptop} {
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`
const MyWorks = () => {
  return (
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <Titles number="03" title="My work" />
        <Row>
          <WorkComp
            imagen="/Markdown live preview.png"
            title="Markdown live preview"
            description="A simple Markdown live previewer built with HTML, JavaScript, CSS and Bootstrap."
            github="https://github.com/stephanianevado/markdown-live-previewer"
            pages="https://stephanianevado.github.io/markdown-live-previewer/"
          />
          <WorkComp
            imagen="/Feminist quote machine 1.png"
            title="Feminist quote machine"
            description="A quote machine built with HTML, CSS, JS, jQuery, Bootstrap and React."
            github="https://github.com/stephanianevado/feminist-quote-machine"
            pages="https://stephanianevado.github.io/feminist-quote-machine/"
          />
        </Row>
        <Row>
          <WorkComp
            imagen="/Star wars music box.png"
            title="Star Wars music box"
            description="A Star Wars music box built with React and CSS."
            github="https://github.com/stephanianevado/star-wars-music-box"
            pages="https://stephanianevado.github.io/star-wars-music-box/"
          />
          <WorkComp
            imagen="/JS calculator.png"
            title="JavaScript calculator"
            description="A simple calculator built with React and CSS."
            github="https://github.com/stephanianevado/javascript-calculator"
            pages="https://stephanianevado.github.io/javascript-calculator/"
          />
        </Row>
        <Row>
          <WorkComp
            imagen="/Pomodoro clock.png"
            title="Pomodoro clock"
            description="A Pomodoro clock built with React, Materialize and CSS."
            github="https://github.com/stephanianevado/pomodoro-clock"
            pages="https://stephanianevado.github.io/pomodoro-clock/"
          />
        </Row>
      </Main>
      <FooterPortfolio />
    </>
  )
}

export default MyWorks
