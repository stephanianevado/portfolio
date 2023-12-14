import Image from 'next/image'

import { Box } from 'components/common/box/Box'
import { Link } from 'components/common/link/Link'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

export default function Home() {
  const { primaryBlack, secondaryBlack, tertiaryBlack, primaryBlue } =
    Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { padding: '40px 16px' },
        [LAPTOP]: { padding: '40px 0px' },
      }}>
      <Box
        alignItems="center"
        breakpoints={{
          [MOBILE_S]: { direction: 'column' },
          [LAPTOP]: { direction: 'row' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 2 },
          }}>
          <Text as="h1" color={primaryBlack} variant="vader">
            Hi! My name is{' '}
            <Text as="span" color={primaryBlue} variant="vader">
              Stephania
            </Text>
            !
          </Text>
          <Text as="p" color={secondaryBlack} variant="ashoka">
            I am a frontend developer, manager and nutritionist located in
            Sweden. Currently working at{' '}
            <Link
              href="https://www.carla.se/"
              target="_blank"
              variant="ashoka"
              color={primaryBlue}>
              Carla
            </Link>{' '}
            creating a product to buy or lease an electrified vehicle online. I
            love to code - it was an amazing discovery for me &hearts;
          </Text>
        </Box>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 1, alignItems: 'flex-end' },
          }}>
          <Image
            src="/images/me.svg"
            alt="Picture of Stephania Nevado"
            width={300}
            height={450}
            priority
          />
        </Box>
      </Box>
      <Box paddingVertical={25}>
        <Text as="h2" color={secondaryBlack} variant="anakin">
          About me
        </Text>
        <Text as="p" color={tertiaryBlack} variant="leia">
          My interest in web development started in 2020. I wanted to try out
          creating a HealthTech product and get more hands-on experience by
          taking a digital product from idea to release. That's how Nutreto was
          born. Nutreto is a cloud-based platform for nutrition and health,
          usable for both patients and clinics. Check it out at{' '}
          <Link
            href="https://nutreto.com/en/"
            target="_blank"
            variant="leia"
            color={primaryBlue}>
            nutreto.com
          </Link>
          !
        </Text>
        <Text as="p" color={tertiaryBlack} variant="leia">
          Currently I'm working in a start-up building the most convenient,
          transparent and easy way to buy or lease an electrified vehicle
          online. For the frontend we're using modern web technologies (Next.js,
          TypeScript, React, Cypress, Flora).
        </Text>
        <Text as="p" color={tertiaryBlack} variant="leia">
          In my first job I built an AI product for synthetic data generation. I
          created a frontend application from scratch using modern web
          technologies (JavaScript, React, Styled components, Jest). My aim was
          to create a modular, testable code base with a high unit test
          coverage.
        </Text>
        <Text as="p" color={tertiaryBlack} variant="leia">
          I'm passionate about tech, leadership and health, change management,
          process improvement and teamwork. I'm also always curious to learn new
          things. I'm a well-organized person, a problem solver with high
          attention to detail.
        </Text>
      </Box>
    </Box>
  )
}
