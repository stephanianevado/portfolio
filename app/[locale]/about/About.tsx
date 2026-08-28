'use client'

import { useTranslations } from 'next-intl'

import Image from 'next/image'


import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Link } from 'components/common/link/Link'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'
import { Title } from 'components/Title'

export default function About() {
  const {
    colors: { tertiaryBlack, primaryGrey, primaryPurple },
    fontSize: { small, medium },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint
  const t = useTranslations('about')

  return (
    <AppWrapper>
      <Box>
        <Title header={t('header')} subHeader={t('subHeader')} />
        <Box
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 3 },
            }}>
            <Text as="p" color={primaryGrey} variant={medium} subStyle={bold}>
              {t('who')}
            </Text>

            <Text as="p" color={primaryGrey} variant={small}>
              {t('whoBody')}
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
                alt={t('portraitAlt')}
                width={280}
                height={300}
                priority
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </Box>
            <Text as="p" color={primaryGrey} variant={medium} subStyle={bold}>
              {t('firstJob')}
            </Text>
            <Text as="p" color={tertiaryBlack} variant={small}>
              {t('firstJobPre')}
              <Link
                href="https://syndata.co/"
                target="_blank"
                variant={small}
                subStyle={bold}
                color={primaryPurple}>
                {t('firstJobLinkLabel')}
              </Link>
              {t('firstJobPost')}
            </Text>
            <Text as="p" color={primaryGrey} variant={medium} subStyle={bold}>
              {t('currentJob')}
            </Text>
            <Text as="p" color={tertiaryBlack} variant={small}>
              {t('currentJobPre')}
              <Link
                href="https://www.carla.se/"
                target="_blank"
                variant={small}
                subStyle={bold}
                color={primaryPurple}>
                {t('currentJobLinkLabel')}
              </Link>
              {t('currentJobPost')}
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
              alt={t('portraitAlt')}
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

        <Text as="p" color={primaryGrey} variant={medium} subStyle={bold}>
          {t('initiatives')}
        </Text>

        <Text as="ul" color={tertiaryBlack} variant={medium}>
          <Text as="li" color={tertiaryBlack} variant={small}>
            {t('initiative1')}
          </Text>
          <Text as="li" color={tertiaryBlack} variant={small}>
            {t('initiative2')}
          </Text>
          <Text as="li" color={tertiaryBlack} variant={small}>
            {t('initiative3')}
          </Text>
        </Text>

        <Text as="p" color={primaryGrey} variant={medium} subStyle={bold}>
          {t('interests')}
        </Text>

        <Text as="p" color={tertiaryBlack} variant={small}>
          {t('interestsBody')}
        </Text>
      </Box>
    </AppWrapper>
  )
}
