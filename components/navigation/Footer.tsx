import { Box } from 'components/Box'
import {
  CodepenIcon,
  EmailIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  ReplitIcon,
} from 'components/icons'

import Breakpoint from 'types/index'

export const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      justifyContent="space-between"
      alignItems="stretch"
      breakpoints={{
        [Breakpoint.MOBILE_S]: { padding: '0px 16px', direction: 'row' },
        [Breakpoint.TABLET]: { padding: '0px 16px' },
        [Breakpoint.LAPTOP]: { padding: '0px 32px', direction: 'column' },
      }}>
      <Box
        as="a"
        href="https://github.com/stephanianevado"
        target="_blank"
        rel="noreferrer">
        <GitHubIcon />
      </Box>
      <Box
        as="a"
        href="https://www.linkedin.com/in/stephanianevado/"
        target="_blank"
        rel="noreferrer">
        <LinkedinIcon />
      </Box>
      <Box
        as="a"
        href="https://www.instagram.com/stephanianevado/"
        target="_blank"
        rel="noreferrer">
        <InstagramIcon />
      </Box>
      <Box
        as="a"
        href="https://www.facebook.com/nevadostephania"
        target="_blank"
        rel="noreferrer">
        <FacebookIcon />
      </Box>
      <Box
        as="a"
        href="https://codepen.io/stephanianevado"
        target="_blank"
        rel="noreferrer">
        <CodepenIcon />
      </Box>
      <Box
        as="a"
        href="https://replit.com/@stephanianevado"
        target="_blank"
        rel="noreferrer">
        <ReplitIcon />
      </Box>
      <Box
        as="a"
        href="mailto:stephania.arantxa@gmail.com"
        target="_blank"
        rel="noreferrer">
        <EmailIcon />
      </Box>
    </Box>
  )
}
