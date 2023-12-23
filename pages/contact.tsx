import Head from 'next/head'

import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Button, Mode } from 'components/common/button/Button'
import { Grid } from 'components/common/grid/Grid'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Headset } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'
import { Title } from 'components/Title'
import { contactItems, Id } from 'utils/contactItems'

export default function Contact() {
  const { secondaryBlack, primaryWhite } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="If you are interested just contact me"
        />
      </Head>
      <Box>
        <Title header="Contact" subHeader="REACH OUT TO ME" />
        <Box
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 2 },
            }}>
            <Text as="p" color={secondaryBlack} variant="ashoka">
              I&apos;m always enthusiastic about learning new things and
              evolving as a developer.
            </Text>
            <Text as="p" color={secondaryBlack} variant="ashoka">
              My inbox is always open to discuss new opportunities. You can also
              find me on social media.
            </Text>
            <Spacer size={5} />
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
                Let&apos;s have a chat
              </Button>
            </Box>
          </Box>
          <Spacer size={10} />
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 2 },
            }}>
            <Grid
              justifyItems="center"
              alignSelf="center"
              breakpoints={{
                [MOBILE_S]: { columns: 'repeat(1, 1fr)', gap: '16px' },
                [LAPTOP]: {
                  columns: 'repeat(2, 1fr)',
                  gap: '20px',
                },
              }}>
              {Object.values(Id)
                .filter((id) => {
                  return [
                    Id.GITHUB,
                    Id.LINKEDIN,
                    Id.INSTAGRAM,
                    Id.FACEBOOK,
                  ].includes(id)
                })
                .map((id) => {
                  const item = contactItems[id]
                  const { alternativeText, href, icon: Icon } = item
                  return (
                    <Button
                      as="a"
                      key={id}
                      href={href}
                      target="_blank"
                      icon={Icon}
                      iconPosition="left"
                      color={primaryWhite}
                      bg={secondaryBlack}
                      mode={Mode.ALTERNATIVE}>
                      {alternativeText}
                    </Button>
                  )
                })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </AppWrapper>
  )
}
