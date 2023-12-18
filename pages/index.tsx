import Head from 'next/head'

import Icosahedron from 'components/animations/Icosahedron'
import { Box } from 'components/common/box/Box'
import { Link } from 'components/common/link/Link'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

export default function Home() {
  const { primaryBlack, secondaryBlack, primaryBlue } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <>
      <Head>
        <meta
          name="description"
          content="This is my portfolio showcase landing page"
        />
      </Head>
      <Box
        alignItems="center"
        breakpoints={{
          [MOBILE_S]: { padding: '40px 16px', direction: 'column' },
          [LAPTOP]: { padding: '40px 0px', direction: 'row' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 2 },
          }}>
          <Text as="h1" color={primaryBlack} variant="vader">
            Hey & Welcome.
          </Text>
          <Text as="h2" color={primaryBlack} variant="padme">
            My name is{' '}
            <Text as="span" color={primaryBlue} variant="padme">
              Stephania
            </Text>
            !
          </Text>
          <Text as="p" color={secondaryBlack} variant="anakin">
            I am a frontend developer, manager and nutritionist located in
            Sweden. Currently working at{' '}
            <Link
              href="https://www.carla.se/"
              target="_blank"
              variant="anakin"
              color={primaryBlue}>
              Carla
            </Link>{' '}
            -a start-up for buying, selling and leasing electrified vehicles
            online. I love to code - it is one of my biggest passions ✨
          </Text>
        </Box>
        <Icosahedron />
      </Box>
    </>
  )
}
