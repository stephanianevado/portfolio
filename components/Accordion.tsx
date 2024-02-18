import type { ReactNode } from 'react'
import { useCallback, useState } from 'react'

import { Box } from 'components/common/box/Box'
import { Grid } from 'components/common/grid/Grid'
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
  const {
    colors: { secondaryBlack, tertiaryBlack, primaryBlue },
    fontSize: { small, medium },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const icon = isOpen ? <Minus size={10} /> : <Plus size={10} />
  const color = isOpen ? primaryBlue : secondaryBlack

  return (
    <>
      <Box cursor="pointer" onClick={toggle} hover={{ opacity: 0.5 }}>
        <Grid
          breakpoints={{
            [MOBILE_S]: { rows: '1fr 2fr 1fr', gap: '4px' },
            [LAPTOP]: {
              columns: 'repeat(3, 1fr)',
              rows: '1fr',
              alignItems: 'center',
            },
          }}>
          <Text as="p" color={color} variant={medium} subStyle={bold}>
            {title}
          </Text>
          <Text as="p" color={tertiaryBlack} variant={small}>
            {isOpen ? (
              <>
                {text}
                {children}
              </>
            ) : (
              description
            )}
          </Text>
          <Box alignItems="flex-end">{icon}</Box>
        </Grid>
      </Box>
      <Line color={primaryBlue} />
    </>
  )
}
