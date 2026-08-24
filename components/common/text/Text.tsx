'use client'

import {
  useId,
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import type { Breakpoint } from 'components/Theme'

import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  Color,
  Direction,
  Display,
  JustifyContent,
  Size,
} from 'types/index'

import { buildStyle, type LayoutStyleInput } from 'utils/buildStyle'
import { cn } from 'utils/cn'
import { buildScopedCss, useScopedCss } from 'utils/scopedCss'

export type TextTag =
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'ul'
  | 'li'
  | 'label'
  | 'strong'
  | 'em'

export type TextBreakpointStyles = Partial<LayoutStyleInput>

export type TextProps = {
  id?: string
  as?: TextTag
  children?: ReactNode
  className?: string
  display?: Display
  grow?: number
  shrink?: number
  basis?: Size
  flex?: number
  direction?: Direction
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: JustifyContent
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  variant?: string
  subStyle?: number
  lineHeight?: number
  color?: Color | string
  align?: 'center' | 'left' | 'right'
  textDecoration?: 'none' | 'underline'
  textDecorationColor?: Color | string
  textUnderlineOffset?: string
  textWrap?: 'wrap' | 'nowrap' | 'balance'
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces'
  animation?: string
  hover?: TextBreakpointStyles
  disabled?: boolean
  breakpoints?: Partial<Record<Breakpoint, TextBreakpointStyles>>
  onClick?: MouseEventHandler<HTMLElement>
  style?: CSSProperties
}

export const Text = ({
  as = 'div',
  children,
  className,
  hover,
  breakpoints,
  onClick,
  id,
  style,
  ...styleProps
}: TextProps) => {
  const reactId = useId()
  const scope = `text-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`

  const baseStyle: CSSProperties = {
    margin: 0,
    padding: '4px 0px',
    ...buildStyle(styleProps),
  }

  const scopedCss = buildScopedCss(scope, baseStyle, hover, breakpoints)
  useScopedCss(scope, scopedCss)

  const commonProps = {
    id,
    className: cn(scope, className),
    style,
    onClick,
  }

  if (as === 'span') return <span {...commonProps}>{children}</span>
  if (as === 'p') return <p {...commonProps}>{children}</p>
  if (as === 'h1') return <h1 {...commonProps}>{children}</h1>
  if (as === 'h2') return <h2 {...commonProps}>{children}</h2>
  if (as === 'h3') return <h3 {...commonProps}>{children}</h3>
  if (as === 'h4') return <h4 {...commonProps}>{children}</h4>
  if (as === 'h5') return <h5 {...commonProps}>{children}</h5>
  if (as === 'h6') return <h6 {...commonProps}>{children}</h6>
  if (as === 'ul') return <ul {...commonProps}>{children}</ul>
  if (as === 'li') return <li {...commonProps}>{children}</li>
  if (as === 'label') return <label {...commonProps}>{children}</label>
  if (as === 'strong') return <strong {...commonProps}>{children}</strong>
  if (as === 'em') return <em {...commonProps}>{children}</em>
  return <div {...commonProps}>{children}</div>
}
