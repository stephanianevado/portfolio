import type { FC, MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'

import { getAnimation } from 'components/animations/animation'

import {
  type AlignContent,
  type AlignItems,
  type AlignSelf,
  type BreakpointStyles,
  type Color,
  type Direction,
  type Display,
  type JustifyContent,
  type Position,
  type Size,
  type Target,
} from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import { styledMargins, type MarginProps } from 'utils/styledMargins'
import { styledPadding, type PaddingProps } from 'utils/styledPadding'

export type BoxProps = PaddingProps &
  MarginProps &
  PropsWithChildren<{
    id?: string | JSX.Element | FC
    as?: string | HTMLElementTagNameMap
    boxSizing?: 'border-box' | 'content-box'
    children?: React.ReactNode | React.ReactNode[]
    bg?: Color
    border?: Color
    borderRadius?: Size
    height?: Size
    maxHeight?: Size
    minHeight?: Size
    width?: Size
    maxWidth?: Size
    position?: Position
    top?: Size
    right?: Size
    bottom?: Size
    left?: Size
    overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    display?: Display
    grow?: number
    shrink?: number
    basis?: Size
    flex?: number
    direction?: Direction
    wrap?: 'nowrap' | 'wrap' | ' wrap-reverse'
    justifyContent?: JustifyContent
    alignContent?: AlignContent
    alignItems?: AlignItems
    alignSelf?: AlignSelf
    ref?: React.RefObject<HTMLInputElement>
    rel?: string
    className?: string
    target?: Target
    hover?: Record<string, unknown>
    onClick?: MouseEventHandler<HTMLInputElement> | ((a: unknown) => void)
    onMouseEnter?: React.MouseEventHandler<HTMLInputElement>
    onMouseLeave?: React.MouseEventHandler<HTMLInputElement>
    onSubmit?: (event: React.SyntheticEvent) => void
    href?: string
    cursor?: 'pointer'
    textDecoration?: 'none' | 'underline'
    animation?: string
    zIndex?: string | number
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledBox = styled.div<BoxProps>`
  ${styledPadding};
  ${styledMargins};
  box-sizing: ${(props: BoxProps) => props.boxSizing || 'border-box'};
  background-color: ${(props: BoxProps) => props.bg || 'transparent'};
  border: ${(props: BoxProps) => props.border || 'transparent'};
  border-radius: ${(props: BoxProps) => multiplier(props.borderRadius) || 0};
  height: ${(props: BoxProps) => multiplier(props.height)};
  max-height: ${(props: BoxProps) => multiplier(props.maxHeight)};
  min-height: ${(props: BoxProps) => multiplier(props.minHeight)};
  width: ${(props: BoxProps) => props.width && multiplier(props.width)};
  max-width: ${(props: BoxProps) => multiplier(props.maxWidth) || '100%'};
  position: ${(props: BoxProps) => props.position || 'unset'};
  top: ${(props: BoxProps) => multiplier(props.top)};
  right: ${(props: BoxProps) => multiplier(props.right)};
  bottom: ${(props: BoxProps) => multiplier(props.bottom)};
  left: ${(props: BoxProps) => multiplier(props.left)};
  overflow: ${(props: BoxProps) => props.overflow || 'auto'};
  overflow-y: ${(props: BoxProps) => props.overflow || 'auto'};
  overflow-x: ${(props: BoxProps) => props.overflow || 'auto'};
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
  align-items: ${(props: BoxProps) => props.alignItems || 'stretch'};
  align-self: ${(props: BoxProps) => props.alignSelf && props.alignSelf};
  text-decoration: ${(props: BoxProps) => props.textDecoration || 'none'};
  animation: ${(props: BoxProps) =>
    props.animation && getAnimation(props.animation)};
  z-index: ${(props: BoxProps) => props.zIndex};
  &:hover {
    ${(props: BoxProps) => props.hover};
  }
  ${({ breakpoints }: { breakpoints: BoxProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
