import Head from 'next/head'
import {FooterPortfolio} from '../components/footer-portfolio'
import {NavBar} from '../components/NavBar'
import {Titles} from '../components/Titles'
import {WorkComp} from '../components/WorkComp'
import styled from "styled-components";
import {grey, pink} from "../components/colors";
import {Breakpoints} from "../components/breakpoints";

const Main = styled.main`
padding: 1rem;
  ${Breakpoints.laptop} {
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
    position: relative;
    left: 10%;
  }
`
const MyWorks = () => {
    return (
        <>
            <Head>
                <title>Stephania Nevado's portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar/>
            <Main>
                <Titles number="03" title="My work"/>
                <WorkComp
                    imagen="/Markdown live preview.png"
                    title="Markdown Live Preview"
                    description="A simple Markdown Live Previewer built with HTML, JavaScript, CSS and Bootstrap."
                    github="https://github.com/stephanianevado/markdown-live-previewer"
                    pages="https://stephanianevado.github.io/markdown-live-previewer/"
                />
                <WorkComp
                    imagen="/Feminist quote machine 1.png"
                    title="Feminist Quote Machine"
                    description="A simple quote machine built with HTML, CSS, JS, jQuery, Bootstrap and React."
                    github="https://github.com/stephanianevado/feminist-quote-machine"
                    pages="https://stephanianevado.github.io/feminist-quote-machine/"
                />
                <WorkComp
                    imagen="/Star wars music box.png"
                    title="Star Wars Music Box"
                    description="A simple Star Wars Music Box built with React and CSS."
                    github="https://github.com/stephanianevado/star-wars-music-box"
                    pages="https://stephanianevado.github.io/star-wars-music-box/"
                />
                <WorkComp
                    imagen="/JS calculator.png"
                    title="JavaScript Calculator"
                    description="A simple calculator built with React and CSS."
                    github="https://github.com/stephanianevado/javascript-calculator"
                    pages="https://stephanianevado.github.io/javascript-calculator/"
                />
                <WorkComp
                    imagen="/Pomodoro clock.png"
                    title="Pomodoro Clock"
                    description="A simple Pomodoro Clock built with React, Materialize and CSS."
                    github="https://github.com/stephanianevado/pomodoro-clock"
                    pages="https://stephanianevado.github.io/pomodoro-clock/"
                />
            </Main>
            <FooterPortfolio/>
        </>
    )
}

export default MyWorks
