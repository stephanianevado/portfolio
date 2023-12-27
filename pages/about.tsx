import Head from 'next/head'

import Image from 'next/image'

import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Link } from 'components/common/link/Link'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'
import { Title } from 'components/Title'

export default function About() {
  const { tertiaryBlack, primaryGrey, primaryPurple } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="In this section you get to know me better"
        />
      </Head>
      <Box>
        <Title header="Nice to meet you!" subHeader="WELCOME" />
        <Box
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 3 },
            }}>
            <Text as="p" color={primaryGrey} variant="leia" subStyle="bold">
              ⸺ Who am I?
            </Text>

            <Text as="p" color={primaryGrey} variant="luke">
              I&apos;m a Frontend developer, and my interest in programming
              started during the pandemic in 2020. As a side project, I created
              a HealthTech product called Nutreto - a cloud-based platform for
              nutrition and health. This turned into a passion for web
              development, and a career change.
            </Text>
            <Box
              breakpoints={{
                [MOBILE_S]: { display: 'flex', alignSelf: 'center' },
                [LAPTOP]: {
                  display: 'none',
                },
              }}>
              <Image
                src="/images/me.png"
                alt="Picture of Stephania Nevado"
                width={280}
                height={300}
                priority
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </Box>
            <Text as="p" color={primaryGrey} variant="leia" subStyle="bold">
              ⸺ My first Frontend developer job
            </Text>
            <Text as="p" color={tertiaryBlack} variant="luke">
              I built an{' '}
              <Link
                href="https://syndata.co/"
                target="_blank"
                variant="luke"
                subStyle="bold"
                color={primaryPurple}>
                AI
              </Link>{' '}
              product for synthetic data generation . There was no other
              frontend developer in the entire company, so I created a frontend
              application from scratch using modern web technologies
              (JavaScript, React, Styled components and Jest).
            </Text>
            <Text as="p" color={primaryGrey} variant="leia" subStyle="bold">
              ⸺ My current job as a Frontend developer
            </Text>
            <Text as="p" color={tertiaryBlack} variant="luke">
              I work at{' '}
              <Link
                href="https://www.carla.se/"
                target="_blank"
                variant="luke"
                subStyle="bold"
                color={primaryPurple}>
                Carla
              </Link>{' '}
              - a start-up for buying, selling and leasing electrified vehicles
              online. We use Next.js, TypeScript and React for the app, as well
              as Jest and Cypress for testing. The static content is served via
              Contentful and the API layer uses GraphQL.
            </Text>
          </Box>
          <Box
            breakpoints={{
              [MOBILE_S]: { display: 'none' },
              [LAPTOP]: {
                display: 'flex',
                position: 'sticky',
                right: 0,
              },
            }}>
            <Image
              src="/images/me.png"
              alt="Picture of Stephania Nevado"
              width={280}
              height={300}
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </Box>
        </Box>

        <Text as="p" color={primaryGrey} variant="leia" subStyle="bold">
          ⸺ Initiatives
        </Text>

        <Text as="ul" color={tertiaryBlack} variant="leia">
          <Text as="li" color={tertiaryBlack} variant="luke">
            I pushed myself and my team at Carla to convert the entire codebase
            from JavaScript to TypeScript.
          </Text>
          <Text as="li" color={tertiaryBlack} variant="luke">
            I created a female engineering club to discuss problems and
            solutions within the company and the tech world in general.
          </Text>
          <Text as="li" color={tertiaryBlack} variant="luke">
            During the last year, I&apos;ve set aside 1 &quot;study hour&quot;
            each day to deepen my web development knowledge.
          </Text>
        </Text>

        <Text as="p" color={primaryGrey} variant="leia" subStyle="bold">
          ⸺ My interests
        </Text>

        <Text as="p" color={tertiaryBlack} variant="luke">
          I&apos;m passionate about tech, leadership, change management, process
          improvement and teamwork. I&apos;m also always curious to learn new
          things. I&apos;m a well-organized person, a problem solver, and I like
          to create modular, readable and testable code which is easy to
          maintain and extend.
        </Text>
      </Box>
    </AppWrapper>
  )
}
