import { Box } from 'components/common/box/Box'
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const { primaryBlack } = Theme.colors
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
          bg="red"
          as="a"
          href="https://github.com/stephanianevado"
          target="_blank"
          rel="noreferrer">
          <GitHub color={primaryBlack} />
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
    </Box>
  )
}
