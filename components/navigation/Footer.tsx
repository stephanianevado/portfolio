'use client'

import { useTranslations } from 'next-intl'

import { Box } from 'components/common/box/Box'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Line } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'
import { ThemeToggle } from 'components/ThemeToggle'

import { contactItems, Id } from 'utils/contactItems'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const {
    colors: { primaryBlack, primaryBlue },
    fontSize: { xs },
  } = Theme
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  const tFooter = useTranslations('footer')
  const tItems = useTranslations('contactItems')

  return (
    <Box
      as="footer"
      breakpoints={{
        [MOBILE_S]: { margin: '24px 16px' },
        [LAPTOP]: { margin: '24px 80px' },
        [DESKTOP]: { margin: '24px 640px' },
      }}>
      <Line />
      <Spacer size={2} />
      <Text variant={xs} color={primaryBlack}>
        {tFooter('copyright', { year: currentYear })}
      </Text>
      <Text variant={xs} color={primaryBlack}>
        {tFooter('rights')}
      </Text>
      <Spacer size={2} />
      <Box direction="row" alignItems="center" justifyContent="space-between">
        <Box direction="row" alignItems="center">
          {Object.values(Id).map((id) => {
            const item = contactItems[id]
            const { href, icon: Icon } = item

            return (
              <Box
                key={id}
                as="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={tItems(`${id}.text`)}
                wrap="nowrap"
                paddingRight={6}>
                <Icon size={5} hoverColor={primaryBlue} />
              </Box>
            )
          })}
        </Box>
        <Box
          direction="row"
          alignItems="center"
          breakpoints={{
            [MOBILE_S]: { display: 'flex' },
            [LAPTOP]: { display: 'none' },
          }}>
          <ThemeToggle />
        </Box>
      </Box>
    </Box>
  )
}
