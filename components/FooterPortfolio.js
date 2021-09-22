import styled from 'styled-components'
import { pink, white } from './colors'
import {
  CodepenIcon,
  EmailIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from './icons'
import { Breakpoints } from './Breakpoints'

const Footer = styled.footer`
  a {
    color: ${white};
    margin: 10px;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
  }

  a:hover {
    color: ${pink};
  }
`
const Contact = styled.div`
  text-align: center;
  margin: 2rem 0;

  ${Breakpoints.laptop} {
    position: fixed;
    width: 2.5rem;
    bottom: 0px;
    left: 0px;
    orientation: left;
    writing-mode: vertical-rl;
    margin-top: 0;
  }
`

export const FooterPortfolio = () => {
  return (
    <Footer>
      <Contact>
        <a href="https://github.com/stephanianevado" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/stephanianevado/" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/stephanianevado/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/nevadostephania" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/nutrinevado" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://codepen.io/stephanianevado" target="_blank">
          <CodepenIcon />
        </a>
        <a href="mailto:stephania.arantxa@gmail.com" target="_blank">
          <EmailIcon />
        </a>
      </Contact>
    </Footer>
  )
}
