import type { MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'

import type { Icon } from 'components/icons/icons'
import { Theme } from 'components/Theme'

import type { BreakpointStyles, Color, Target } from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import type { PaddingProps } from 'utils/styledPadding'

const { tertiaryGrey, primaryBlue } = Theme.colors

export type LinkProps = PaddingProps &
  PropsWithChildren<{
    id?: string
    as?: string
    disabled?: boolean
    children?: React.ReactNode
    color: Color
    onClick?: MouseEventHandler<HTMLInputElement>
    href?: string
    target?: Target
    ref?: string
    breakpoints?: Record<string, BreakpointStyles>
    icon?: Icon
    iconPosition?: string
  }>

export const StyledLink = styled.a<LinkProps>`
  padding: ${(props: PaddingProps) => multiplier(props.padding)};
  id: ${(props: LinkProps) => props.id && props.id};
  &:disabled {
    color: ${tertiaryGrey};
    pointer-events: none;
    cursor: not-allowed;
  };
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  appearance: none;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${primaryBlue}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  white-space: nowrap;
  cursor: pointer;
  text-decoration:${(props: LinkProps) => `underline ${props.color}`};
  as: ${(props: LinkProps) => props.as};
  href: ${(props: LinkProps) => props.href};
  target:${(props: LinkProps) => props.target};
  ref:${(props: LinkProps) => props.ref};
  onclick: ${(props: LinkProps) => {
    props.onClick ? props.onClick : undefined
  }};
  ${({ breakpoints }: { breakpoints: LinkProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
