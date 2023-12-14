import type { FC, MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'

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
    onSubmit?: (event: React.SyntheticEvent) => void
    href?: string
    cursor?: 'pointer'
    textDecoration?: 'none' | 'underline'
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledBox = styled.div<BoxProps>`
  ${styledPadding}
  ${styledMargins}
  id: ${(props: BoxProps) => props.id};
  as: ${(props: BoxProps) => props.as};
  box-sizing: ${(props: BoxProps) => props.boxSizing || 'border-box'};
  background-color: ${(props: BoxProps) => props.bg || 'transparent'};
  border: ${(props: BoxProps) => props.border || 'transparent'};
  border-radius: ${(props: BoxProps) => multiplier(props.borderRadius) || 0};
  height: ${(props: BoxProps) => multiplier(props.height)};
  max-height:${(props: BoxProps) => multiplier(props.maxHeight)}
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
  text-decoration: ${(props: BoxProps) => props.textDecoration || 'none'};
  ${({ breakpoints }: { breakpoints: BoxProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
