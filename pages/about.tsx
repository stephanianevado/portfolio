import Head from 'next/head'
import Image from 'next/image'

import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Link } from 'components/common/link/Link'
import { Text } from 'components/common/text/Text'

import { Breakpoint, Theme } from 'components/Theme'
import { Title } from 'components/Title'

export default function About() {
  const { tertiaryBlack, primaryBlue } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="In this section you get to know me better"
        />
      </Head>
      <Box paddingVertical={20}>
        <Title header="Nice to meet you!" subHeader="WELCOME" />
        <Box
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 2 },
            }}>
            <Text as="p" color={tertiaryBlack} variant="leia">
              Hello there! My name is Stephania Nevado. I&apos;m a Frontend
              developer, and I&apos;m very passionate and dedicated to my work.
              My interest in web development started in 2020. I wanted to try
              out creating a HealthTech product and get more hands-on experience
              by taking a digital product from idea to release. That&apos;s how
              Nutreto was born. Nutreto is a cloud-based platform for nutrition
              and health, usable for both patients and clinics. Check it out at{' '}
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
              Currently I&apos;m working at a start-up for buying, selling and
              leasing electrified vehicles online. For the frontend we&apos;re
              using modern web technologies (Next.js, TypeScript, React,
              Cypress, Jest, Flora).
            </Text>
            <Text as="p" color={tertiaryBlack} variant="leia">
              In my first job I built an AI product for synthetic data
              generation. I created a frontend application from scratch using
              modern web technologies (JavaScript, React, Styled components,
              Jest). My aim was to create a modular, testable code base with a
              high unit test coverage.
            </Text>
            <Text as="p" color={tertiaryBlack} variant="leia">
              I&apos;m passionate about tech, leadership and health, change
              management, process improvement and teamwork. I&apos;m also always
              curious to learn new things. I&apos;m a well-organized person, a
              problem solver with high attention to detail.
            </Text>
          </Box>
          <Box
            breakpoints={{
              [MOBILE_S]: { alignItems: 'center' },
              [LAPTOP]: {
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              },
            }}>
            <Image
              src="/images/me.png"
              alt="Picture of Stephania Nevado"
              width={350}
              height={370}
              priority
              style={{
                objectFit: 'fill',
                objectPosition: 'center',
              }}
            />
          </Box>
        </Box>
      </Box>
    </AppWrapper>
  )
}
