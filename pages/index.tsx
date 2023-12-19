import Head from 'next/head'

import Icosahedron from 'components/animations/Icosahedron'
import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

export default function Home() {
  const { primaryBlack, secondaryBlack, primaryBlue } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="This is my portfolio showcase landing page"
        />
      </Head>
      <Box
        alignItems="center"
        paddingVertical={10}
        breakpoints={{
          [MOBILE_S]: { direction: 'column' },
          [LAPTOP]: { direction: 'row' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 1 },
          }}>
          <Text
            as="h1"
            color={primaryBlack}
            variant={MOBILE_S ? 'vader' : 'sith'}>
            My name is{' '}
            <Text
              as="span"
              color={primaryBlue}
              variant={MOBILE_S ? 'vader' : 'sith'}
              subStyle="bold">
              Stephania Nevado...
            </Text>
          </Text>
          <Text
            as="p"
            color={secondaryBlack}
            variant={MOBILE_S ? 'padme' : 'vader'}>
            Frontend developer, manager and nutritionist located in Sweden ✨
          </Text>
        </Box>
        <Icosahedron />
      </Box>
    </AppWrapper>
  )
}
