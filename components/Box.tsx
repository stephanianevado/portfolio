import styled from 'styled-components'

import { type BoxProps } from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import { styledMargins } from 'utils/styledMargins'
import { styledPadding } from 'utils/styledPadding'

export const Box = styled.div<BoxProps>`
  ${styledPadding}
  ${styledMargins}
  id: ${(props: BoxProps) => props.id};
  as: ${(props: BoxProps) => props.as};
  box-sizing: ${(props: BoxProps) => props.boxSizing || 'border-box'};
  background-color: ${(props: BoxProps) => props.bg || 'transparent'};
  border: ${(props: BoxProps) => props.border || 'transparent'};
  border-radius: ${(props: BoxProps) => multiplier(props.borderRadius) || 0};
  height: ${(props: BoxProps) => multiplier(props.height)};
  min-height: ${(props: BoxProps) => multiplier(props.minHeight)};
  width: ${(props: BoxProps) => multiplier(props.width)};
  max-width: ${(props: BoxProps) => multiplier(props.maxWidth)};
  position: ${(props: BoxProps) => props.position || 'unset'};
  top: ${(props: BoxProps) => multiplier(props.top)};
  right: ${(props: BoxProps) => multiplier(props.right)};
  bottom: ${(props: BoxProps) => multiplier(props.bottom)};
  left: ${(props: BoxProps) => multiplier(props.left)};
  display: ${(props: BoxProps) => props.display || 'flex'};
  flex-grow: ${(props: BoxProps) => props.grow || 0};
  flex-shrink: ${(props: BoxProps) => props.shrink || 0};
  flex-basis: ${(props: BoxProps) => props.basis || 'auto'};
  flex: ${(props: BoxProps) => props.flex};
  flex-direction: ${(props: BoxProps) => props.direction || 'column'};
  flex-wrap: ${(props: BoxProps) => props.wrap || 'nowrap'};
  justify-content: ${(props: BoxProps) => props.justifyContent || 'flex-start'};
  align-content: ${(props: BoxProps) =>
    props.alignContent && props.alignContent};
  align-items: ${(props: BoxProps) => props.alignItems || 'flex-start'};
  align-self: ${(props: BoxProps) => props.alignSelf};
  ref: ${(props: BoxProps) => props.ref};
  class-name: ${(props: BoxProps) => props.className};
  target: ${(props: BoxProps) => props.target || '_blank'};
  &: hover {
    ${(props: BoxProps) => props.hover}
  }
  onclick: ${(props: BoxProps) => props.onClick};
  onsubmit: ${(props: BoxProps) => props.onSubmit};
  href: ${(props: BoxProps) => props.href};
  cursor: ${(props: BoxProps) => props.cursor};
  ${({ breakpoints }: { breakpoints: BoxProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
