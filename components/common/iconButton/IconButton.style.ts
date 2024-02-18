import type { MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'

import type { Icon } from 'components/icons/icons'
import { Theme } from 'components/Theme'

import type { BreakpointStyles, Color, Size, Target } from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import type { PaddingProps } from 'utils/styledPadding'

const { secondaryWhite, secondaryGrey } = Theme.colors

export type IconButtonProps = PaddingProps &
  PropsWithChildren<{
    id?: string
    name: string
    as?: string
    color?: Color
    bg?: Color
    hover?: Record<string, unknown>
    disabled?: boolean
    icon: Icon
    onClick?: MouseEventHandler<HTMLInputElement>
    size?: Size
    href?: string
    target?: Target
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledIcon = styled.button<IconButtonProps>`
  padding: ${(props: PaddingProps) => multiplier(props.padding) ?? '0px'};
  color: ${(props: IconButtonProps) => props.color ?? 'transparent'};
  background-color: ${(props: IconButtonProps) => props.bg ?? 'transparent'};
  border: 0px;
  &:disabled {
    background-color: ${secondaryGrey};
    pointer-events: none;
    cursor: not-allowed;
  };
  width: ${(props: IconButtonProps) =>
    multiplier(props.size) ?? multiplier(10)};
  height: ${(props: IconButtonProps) =>
    multiplier(props.size) ?? multiplier(10)};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  appearance: none;
  user-select: none;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${secondaryWhite}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  overflow: hidden;
  cursor: pointer;
${(props: IconButtonProps) => createResponsiveStyle(props.breakpoints)};
`
