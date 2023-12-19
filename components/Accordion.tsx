import type { ReactNode } from 'react'
import { useCallback, useState } from 'react'

import { Box } from 'components/common/box/Box'
import { Text } from 'components/common/text/Text'
import { Line, Minus, Plus } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'

type Props = {
  title: string
  text?: string
  description?: string
  children?: ReactNode
}

export const Accordion = ({ title, text, description, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { secondaryBlack, tertiaryBlack, primaryBlue } = Theme.colors
  const { LAPTOP, MOBILE_S } = Breakpoint

  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  const icon = isOpen ? <Minus size={10} /> : <Plus size={10} />
  const color = isOpen ? primaryBlue : secondaryBlack

  return (
    <Box>
      <Box
        cursor="pointer"
        onClick={toggle}
        justifyContent="space-between"
        breakpoints={{
          [MOBILE_S]: { direction: 'column' },
          [LAPTOP]: { direction: 'row', alignItems: 'center' },
        }}>
        <Box flex={2}>
          <Text as="p" color={color} variant="anakin">
            {title}
          </Text>
        </Box>
        <Box flex={2}>
          <Text as="p" color={tertiaryBlack} variant="luke">
            {isOpen ? (
              <>
                {text}
                {children}
              </>
            ) : (
              description
            )}
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end">
          {icon}
        </Box>
      </Box>
      <Line color={primaryBlue} />
    </Box>
  )
}
