import Head from 'next/head'

import Icosahedron from 'components/animations/Icosahedron'
import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Dash } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'

export default function Home() {
  const { secondaryBlack, secondaryGrey } = Theme.colors
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
          <Box direction="row" alignItems="center">
            <Dash />
            <Spacer size={1} />
            <Text
              as="span"
              color={secondaryGrey}
              variant="kylo"
              subStyle="bold">
              Stephania Nevado
            </Text>
          </Box>
          <Spacer size={3} />
          <Text as="h1" color={secondaryBlack} variant="jedi">
            Frontend developer, manager and nutritionist located in Sweden ✨
          </Text>
        </Box>
        <Icosahedron />
      </Box>
    </AppWrapper>
  )
}
