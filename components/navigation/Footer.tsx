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
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <Box
      as="footer"
      width="100%"
      justifyContent="space-between"
      alignItems="stretch"
      breakpoints={{
        [Breakpoint.MOBILE_S]: { padding: '0px 16px' },
        [Breakpoint.TABLET]: { padding: '0px 16px' },
        [Breakpoint.LAPTOP]: { padding: '0px 32px' },
      }}>
      Copyright ©{currentYear} Stephania Nevado. All right reserved.
      <Box direction="row" justifyContent="flex-end">
        <Box
          as="a"
          href="https://github.com/stephanianevado"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to my GitHub">
          <GitHub size={10} />
        </Box>
        <Box
          as="a"
          href="https://www.linkedin.com/in/stephanianevado/"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to my LinkedIn">
          <Linkedin size={10} />
        </Box>
        <Box
          as="a"
          href="https://www.instagram.com/stephanianevado/"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to my Instagram">
          <Instagram size={10} />
        </Box>
        <Box
          as="a"
          href="https://www.facebook.com/nevadostephania"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to my Facebook">
          <Facebook size={10} />
        </Box>
        <Box
          as="a"
          href="mailto:stephania.arantxa@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Send me an email">
          <Email size={10} />
        </Box>
      </Box>
    </Box>
  )
}
