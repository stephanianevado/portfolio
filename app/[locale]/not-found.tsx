'use client'

import { useTranslations } from 'next-intl'

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

  const {
    colors: { primaryBlue, secondaryBlack },
    fontSize: { medium },
    fontWeight: { bold },
  } = Theme

  const t = useTranslations('notFound')

  return (
    <AppWrapper>
      <Box paddingVertical={20}>
        <Title header={t('header')} subHeader={t('subHeader')} />
        <Box
          breakpoints={{
            [MOBILE_S]: { direction: 'column' },
            [LAPTOP]: { direction: 'row' },
          }}>
          <Box
            breakpoints={{
              [LAPTOP]: { flex: 1 },
            }}>
            <Text as="p" color={secondaryBlack} variant={medium}>
              {t('bodyPre')}
              <Text
                as="span"
                color={primaryBlue}
                variant={medium}
                subStyle={bold}>
                {t('bodyHighlight')}
              </Text>
              {t('bodyPost')}
            </Text>
            <Spacer size={6} />
            <Button as="a" href="/" icon={Link} iconPosition="right">
              {t('backHome')}
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
