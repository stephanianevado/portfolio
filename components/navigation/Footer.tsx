import { Box } from 'components/common/box/Box'
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from 'components/icons/icons'
import { Breakpoint } from 'components/Theme'

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
        <GitHub />
      </Box>
      <Box
        as="a"
        href="https://www.linkedin.com/in/stephanianevado/"
        target="_blank"
        rel="noreferrer">
        <Linkedin />
      </Box>
      <Box
        as="a"
        href="https://www.instagram.com/stephanianevado/"
        target="_blank"
        rel="noreferrer">
        <Instagram />
      </Box>
      <Box
        as="a"
        href="https://www.facebook.com/nevadostephania"
        target="_blank"
        rel="noreferrer">
        <Facebook />
      </Box>
      <Box
        as="a"
        href="mailto:stephania.arantxa@gmail.com"
        target="_blank"
        rel="noreferrer">
        <Email />
      </Box>
    </Box>
  )
}
