import { useState } from 'react'

import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

type Props = {
  text: string
  children: React.ReactNode | React.ReactNode[]
}

export const Tooltip = ({ text, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const {
    colors: { primaryGrey, primaryWhite },
    fontSize: { large },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint

  const handleOnMouseEnter = () => {
    setIsHovered(!isHovered)
  }

  const handleOnMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Box
      cursor="pointer"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      {isHovered && (
        <Box
          position="relative"
          bg={primaryGrey}
          borderRadius={4}
          paddingHorizontal={4}
          animation="fadeInUp">
          <Text
            color={primaryWhite}
            breakpoints={{
              [MOBILE_S]: { variant: large, subStyle: bold },
              [LAPTOP]: { variant: large, subStyle: bold },
            }}>
            {text} &rarr;
          </Text>
        </Box>
      )}
      {children}
    </Box>
  )
}
