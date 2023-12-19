import { Box } from 'components/common/box/Box'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Line } from 'components/icons/icons'
import { Theme } from 'components/Theme'
import { footerItems, Id } from 'utils/footerItems'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const { primaryBlack } = Theme.colors

  return (
    <Box as="footer" width="100%" bottom={0}>
      <Line />
      <Spacer size={10} />
      <Text variant="obi" color={primaryBlack}>
        Copyright © {currentYear} Stephania Nevado.
      </Text>
      <Spacer size={1} />
      <Text variant="obi" color={primaryBlack}>
        All rights reserved.
      </Text>
      <Spacer size={6} />
      <Box direction="row">
        {Object.values(Id).map((id) => {
          const item = footerItems[id]
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
              <Icon size={5} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
