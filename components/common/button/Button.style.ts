import type { MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'

import type { Icon } from 'components/icons/icons'
import { Theme } from 'components/Theme'

import type {
  BreakpointStyles,
  Color,
  JustifyContent,
  Size,
  Variant,
} from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import type { PaddingProps } from 'utils/styledPadding'

const {
  tertiaryBlack,
  secondaryGrey,
  tertiaryGrey,
  primaryWhite,
  primaryBlue,
} = Theme.colors
const { fontFamily, fontSize, variants } = Theme.typography.kylo
const { fontWeight } = variants.bold

export type ButtonProps = PaddingProps &
  PropsWithChildren<{
    fontFamily?: Variant
    fontSize?: number
    fontWeight?: number
    id?: string
    name?: string
    as?: string
    type?: 'button' | 'reset' | 'submit'
    color?: Color
    bg?: Color
    disabled?: boolean
    children?: React.ReactNode
    border?: Color
    width?: Size
    borderRadius?: Size
    justifyContent?: JustifyContent
    href?: string
    target?: '_blank'
    breakpoints?: Record<string, BreakpointStyles>
    icon?: Icon
    iconPosition?: string
    onClick?: MouseEventHandler<HTMLInputElement>
    onSubmit?: (event: React.SyntheticEvent) => void
  }>

export const StyledButton = styled.button<ButtonProps>`
  padding: ${(props: PaddingProps) => multiplier(props.padding) || '16px 24px'};
  font-family: ${(props: ButtonProps) => props.fontFamily || fontFamily};
  font-size: ${(props: ButtonProps) => props.fontSize || fontSize}px;
  font-weight: ${(props: ButtonProps) => props.fontWeight || fontWeight};
  line-height: 1;
  id: ${(props: ButtonProps) => props.id && props.id};
  name: ${(props: ButtonProps) => props.name || ''};
  type: ${(props: ButtonProps) => props.type && props.type};
  color: ${(props: ButtonProps) => props.color || tertiaryBlack};
  background-color: ${(props: ButtonProps) =>
    props.bg || 'rgba(0, 0, 0, 0.04)'};
  &:hover {
    background-color:${secondaryGrey};
    box-shadow: 0 0 0 1px ${primaryWhite};
  };
 &:disabled {
    color: ${primaryWhite};
    background-color: ${tertiaryGrey};
    pointer-events: none;
    cursor: not-allowed;
  };
  box-sizing: border-box;
  border-radius: ${(props: ButtonProps) =>
    multiplier(props.borderRadius) || multiplier(2)};
  border: ${(props: ButtonProps) => props.border || '1px bold #E3E3E3'};
  width: ${(props: ButtonProps) => multiplier(props.width) || '100%'};
  max-width: 100%;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  justify-content: ${(props: ButtonProps) => props.justifyContent || 'center'};
  align-items: center;
  flex-shrink: 1;
  appearance: none;
  transform-origin: 50% 50%;
  transition-property: color, background-color, border-color, transform;
  transition-duration: 120ms, 120ms, 120ms, 50ms;
  transition-timing-function: ease-in-out;
  user-select: none;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${primaryBlue}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  cursor: pointer;
  as: ${(props: ButtonProps) => props.as && props.as};
  href: ${(props: ButtonProps) => props.href && props.href};
  target: ${(props: ButtonProps) => props.target || '_blank'};
  ${({ breakpoints }: { breakpoints: ButtonProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
