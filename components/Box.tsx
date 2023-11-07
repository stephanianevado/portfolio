import styled from 'styled-components'

import { type BoxProps, type BreakpointStyles } from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import { styledMargins } from 'utils/styledMargins'
import { styledPadding } from 'utils/styledPadding'

export const Box = styled.div<
  BoxProps & {
    breakpoints: Record<string, BreakpointStyles> | undefined
  }
>`
  ${styledPadding}
  ${styledMargins}
  as: ${(props: BoxProps) => props.as};
  box-sizing: ${(props: BoxProps) => props.boxSizing || 'border-box'};
  display: ${(props: BoxProps) => props.display || 'flex'};
  flex-grow: ${(props: BoxProps) => props.grow || 0};
  flex-shrink: ${(props: BoxProps) => props.shrink || 0};
  flex-basis: ${(props: BoxProps) => props.basis || 'auto'};
  flex-direction: ${(props: BoxProps) => props.direction || 'column'};
  flex-wrap: ${(props: BoxProps) => props.wrap || 'nowrap'};
  justify-content: ${(props: BoxProps) => props.justifyContent || 'flex-start'};
  align-content: ${(props: BoxProps) =>
    props.alignContent && props.alignContent};
  align-items: ${(props: BoxProps) => props.alignItems || 'flex-start'};
  align-self: ${(props: BoxProps) => props.alignSelf};
  background-color: ${(props: BoxProps) => props.bg || 'transparent'};
  border: ${(props: BoxProps) => props.border};
  border-radius: ${(props: BoxProps) => multiplier(props.borderRadius) || 0}px;
  &: hover {
    ${(props: BoxProps) => props.hover}
  }
  ${({
    breakpoints,
  }: {
    breakpoints: Record<string, BreakpointStyles> | undefined
  }) => createResponsiveStyle(breakpoints)};
`
