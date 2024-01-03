import { useState } from 'react'

import { fadeInUp } from 'components/animations/animation'
import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

type Props = {
  text: string
  children: React.ReactNode | React.ReactNode[]
}

export const Tooltip = ({ text, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const { primaryGrey, primaryWhite } = Theme.colors
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
          animationName={fadeInUp}
          animationDuration="200ms"
          animationTimingFunction="ease-out">
          <Text
            color={primaryWhite}
            breakpoints={{
              [MOBILE_S]: { variant: 'ashoka', subStyle: 'bold' },
              [LAPTOP]: { variant: 'anakin', subStyle: 'bold' },
            }}>
            {text} &rarr;
          </Text>
        </Box>
      )}
      {children}
    </Box>
  )
}
