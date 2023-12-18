import Rings from 'components/animations/Rings'
import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { Link } from 'components/common/link/Link'
import { Text } from 'components/common/text/Text'
import { Headset } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'
import { Title } from 'components/Title'

export default function Contact() {
  const { secondaryBlack, primaryBlue } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { padding: '40px 16px' },
        [LAPTOP]: { padding: '40px 0px' },
      }}>
      <Title header="Contact" subHeader="REACH OUT ME" />

      <Box
        breakpoints={{
          [MOBILE_S]: { padding: '40px 16px', direction: 'column' },
          [LAPTOP]: { padding: '40px 0px', direction: 'row' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 1 },
          }}>
          <Text as="p" color={secondaryBlack} variant="leia">
            My inbox is always open to discuss new opportunities. I’m always
            eager to learn new things and grow as a developer. Check out my{' '}
            <Link
              href="https://github.com/stephanianevado"
              target="_blank"
              variant="leia"
              color={primaryBlue}>
              GitHub
            </Link>
            !
          </Text>
          <Box
            breakpoints={{
              [LAPTOP]: { alignSelf: 'flex-start' },
            }}>
            <Button
              as="a"
              href="mailto:stephania.arantxa@gmail.com"
              target="_blank"
              icon={Headset}
              iconPosition="left">
              Let’s talk with me
            </Button>
          </Box>
        </Box>
        <Box
          breakpoints={{
            [MOBILE_S]: { paddingTop: '60px' },
          }}>
          <Rings />
        </Box>
      </Box>
    </Box>
  )
}
