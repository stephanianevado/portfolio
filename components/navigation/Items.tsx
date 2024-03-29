import { usePathname } from 'next/navigation'

import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

import { Id, items } from 'utils/items'

export const Items = () => {
  const pathname = usePathname()
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
        const { title, href } = item
        const isActivePage = pathname === href

        return (
          <Box
            key={id}
            as="a"
            href={href}
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
              {title}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}
