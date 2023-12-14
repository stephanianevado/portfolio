import type { PropsWithChildren } from 'react'

import styled from 'styled-components'

import { Theme } from 'components/Theme'

import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  BreakpointStyles,
  Color,
  Direction,
  Display,
  JustifyContent,
  Size,
} from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import { getTypographyStyle } from 'utils/getTypographyStyle'
import { styledMargins, type MarginProps } from 'utils/styledMargins'
import { styledPadding, type PaddingProps } from 'utils/styledPadding'

const { primaryBlue } = Theme.colors

export type TextProps = PaddingProps &
  MarginProps &
  PropsWithChildren<{
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
    id?: string
    as?: string
    children?: React.ReactNode | React.ReactNode[]
    variant?: 'vader' | 'padme' | 'anakin' | 'ashoka' | 'leia' | 'luke' | 'obi'
    subStyle?: 'normal' | 'bold'
    rel?: string
    color?: Color
    align?: 'center' | 'left' | 'right'
    textDecoration?: 'none' | 'underline'
    textWrap?: 'wrap' | 'nowrap' | 'balance'
    whiteSpace?:
      | 'normal'
      | 'nowrap'
      | 'pre'
      | 'pre-wrap'
      | 'pre-line'
      | 'break-spaces'
    hover?: Record<string, unknown>
    disabled?: boolean
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledText = styled.div`
  ${styledPadding};
  ${styledMargins};
  id: ${(props: TextProps) => props.id};
  as: ${(props: TextProps) => props.as};
  display: ${(props: TextProps) => props.display || 'inline'};
  flex-grow: ${(props: TextProps) => props.grow || 0};
  flex-shrink: ${(props: TextProps) => props.shrink || 0};
  flex-basis: ${(props: TextProps) => props.basis || 'auto'};
  flex: ${(props: TextProps) => props.flex || 'flex'};
  flex-direction: ${(props: TextProps) => props.direction || 'row'};
  flex-wrap: ${(props: TextProps) => props.wrap || 'nowrap'};
  justify-content: ${(props: TextProps) =>
    props.justifyContent || 'flex-start'};
  align-content: ${(props: TextProps) => props.alignContent || 'start'};
  align-items: ${(props: TextProps) => props.alignItems || 'stretch'};
  align-self: ${(props: TextProps) => props.alignSelf};
  rel: ${(props: TextProps) => props.rel};
  color: ${(props: TextProps) => props.color || 'transparent'};
  text-align: ${(props: TextProps) => props.align || 'left'};
  text-decoration: ${(props: TextProps) => props.textDecoration || 'none'};
  text-wrap:  ${(props: TextProps) => props.textWrap || 'balance'}; 
  &:hover {
    ${(props: TextProps) => props.hover};
  };
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${primaryBlue}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  ${({
    variant,
    subStyle,
  }: {
    variant: TextProps['variant']
    subStyle: TextProps['subStyle']
  }) => (variant || subStyle) && getTypographyStyle(variant, subStyle)};
  ${({ breakpoints }: { breakpoints: TextProps['breakpoints'] }) =>
    breakpoints && createResponsiveStyle(breakpoints)};
`
