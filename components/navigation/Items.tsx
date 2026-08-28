'use client'

import { useLocale, useTranslations } from 'next-intl'


import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'
import { usePathname } from 'i18n/navigation'

import { Id, items } from 'utils/items'

const namespaceKey: Record<Id, 'about' | 'skills' | 'work' | 'contact'> = {
  [Id.ABOUT]: 'about',
  [Id.SKILLS]: 'skills',
  [Id.WORK]: 'work',
  [Id.CONTACT]: 'contact',
}

export const Items = () => {
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('nav')
  const { MOBILE_S, LAPTOP } = Breakpoint
  const {
    colors: { secondaryGrey, tertiaryPink },
    fontSize: { normal },
    fontWeight: { bold },
  } = Theme

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { marginTop: '50px', justifyContent: 'center' },
        [LAPTOP]: {
          marginTop: '0px',
          direction: 'row',
          alignItems: 'center',
        },
      }}>
      {Object.values(Id).map((id) => {
        const item = items[id]
        const { href } = item
        const isActivePage = pathname === href
        const localizedHref = `/${locale}${href}`

        return (
          <Box
            key={id}
            as="a"
            href={localizedHref}
            direction="row"
            breakpoints={{
              [MOBILE_S]: { margin: '12px 16px' },
              [LAPTOP]: { margin: '0px 24px' },
            }}>
            <Text
              color={isActivePage ? tertiaryPink : secondaryGrey}
              textDecoration={isActivePage ? 'underline' : 'none'}
              textUnderlineOffset="4px"
              variant={normal}
              subStyle={bold}
              hover={{
                color: tertiaryPink,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}>
              {t(namespaceKey[id])}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}
