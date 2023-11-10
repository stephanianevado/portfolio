import styled from 'styled-components'

import { Theme } from 'components/Theme'

import type { ButtonProps } from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import { styledMargins } from 'utils/styledMargins'
import { styledPadding } from 'utils/styledPadding'

export const Button = styled.button<ButtonProps>`
  ${styledPadding}
  ${styledMargins}
   id: ${(props: ButtonProps) => props.id};
  name: ${(props: ButtonProps) => props.name || ''};
  type: ${(props: ButtonProps) => props.type || 'button'};
  color: ${(props: ButtonProps) => props.color || ''};
  background-color: ${(props: ButtonProps) => props.bg || Theme.colors.dark};
  &: hover {
    ${(props: ButtonProps) => props.hover}
  }
  disabled: ${(props: ButtonProps) => props.disabled || false},
  box-sizing: ${(props: ButtonProps) => props.boxSizing || 'border-box'};
  border: ${(props: ButtonProps) => props.border || 'transparent'};
  border-radius: ${(props: ButtonProps) => multiplier(props.borderRadius) || 0};
  height: ${(props: ButtonProps) => multiplier(props.height)};
  min-height: ${(props: ButtonProps) => multiplier(props.minHeight)};
  width: ${(props: ButtonProps) => multiplier(props.width)};
  max-width: ${(props: ButtonProps) => multiplier(props.maxWidth)};
  onclick: ${(props: ButtonProps) => {
    props.onClick ? props.onClick : undefined
  }};
  ${({ breakpoints }: { breakpoints: ButtonProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
