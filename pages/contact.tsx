import Head from 'next/head'

import Rings from 'components/animations/Rings'
import AppWrapper from 'components/AppWrapper'
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
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="If you are interested just contact me"
        />
      </Head>
      <Box paddingVertical={20}>
        <Title header="Contact" subHeader="REACH OUT ME" />

        <Box
          alignItems="center"
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 1 },
            }}>
            <Text as="p" color={secondaryBlack} variant="leia">
              My inbox is always open to discuss new opportunities. I&apos;m
              always eager to learn new things and grow as a developer. Check
              out my{' '}
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
                Let&apos;s talk with me
              </Button>
            </Box>
          </Box>
          <Box
            breakpoints={{
              [MOBILE_S]: { paddingTop: '60px' },
              [LAPTOP]: { paddingTop: '0px' },
            }}>
            <Rings />
          </Box>
        </Box>
      </Box>
    </AppWrapper>
  )
}
