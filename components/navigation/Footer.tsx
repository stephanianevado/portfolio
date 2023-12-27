import { Box } from 'components/common/box/Box'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Line } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'

import { contactItems, Id } from 'utils/contactItems'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const { primaryBlack, primaryBlue } = Theme.colors
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

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
      <Text variant="obi" color={primaryBlack}>
        Copyright © {currentYear} Stephania Nevado.
      </Text>
      <Text variant="obi" color={primaryBlack}>
        All rights reserved.
      </Text>
      <Spacer size={2} />
      <Box direction="row">
        {Object.values(Id).map((id) => {
          const item = contactItems[id]
          const { text, href, icon: Icon } = item

          return (
            <Box
              key={id}
              as="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={text}
              wrap="nowrap"
              paddingRight={6}>
              <Icon size={5} hoverColor={primaryBlue} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
