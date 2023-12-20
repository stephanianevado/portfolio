import Head from 'next/head'

import LightSaber from 'components/animations/LightSaber'
import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Link } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'
import { Title } from 'components/Title'

export default function NotFound() {
  const { LAPTOP, MOBILE_S } = Breakpoint

  const { primaryBlue, secondaryBlack } = Theme.colors

  return (
    <AppWrapper>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Box paddingVertical={20}>
        <Title header="404" subHeader="Welcome to the dark side of the force" />
        <Box
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 1 },
            }}>
            <Text as="p" color={secondaryBlack} variant="leia">
              Could not find requested resource. In the meantime,{' '}
              <Text
                as="span"
                color={primaryBlue}
                variant="leia"
                subStyle="bold">
                click the Lightsaber button
              </Text>{' '}
              to see what happens. Please, turn on the speakers for a better
              experience.
            </Text>

            <Button as="a" href="/" icon={Link} iconPosition="right">
              Return to the light side
            </Button>
          </Box>
          <Spacer size={6} />
          <Box flex={1} alignItems="center" justifyContent="center">
            <LightSaber />
          </Box>
        </Box>
      </Box>
    </AppWrapper>
  )
}
