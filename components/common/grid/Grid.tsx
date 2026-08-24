'use client'

import { useId, type CSSProperties, type ReactNode } from 'react'

import type { Breakpoint } from 'components/Theme'

import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  JustifyContent,
  JustifyItems,
  JustifySelf,
  Size,
} from 'types/index'

import { buildStyle, type LayoutStyleInput } from 'utils/buildStyle'
import { cn } from 'utils/cn'
import { buildScopedCss, useScopedCss } from 'utils/scopedCss'

export type GridBreakpointStyles = Partial<LayoutStyleInput>

export type GridProps = {
  id?: string
  as?: 'div' | 'section'
  children?: ReactNode
  className?: string
  gap?: Size
  columns?: string
  rows?: string
  justifyContent?: JustifyContent
  justifyItems?: JustifyItems
  justifySelf?: JustifySelf
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  breakpoints?: Partial<Record<Breakpoint, GridBreakpointStyles>>
  padding?: Size
  paddingHorizontal?: Size
  paddingVertical?: Size
  paddingTop?: Size
  paddingRight?: Size
  paddingBottom?: Size
  paddingLeft?: Size
  margin?: Size
  marginHorizontal?: Size
  marginVertical?: Size
  marginTop?: Size
  marginRight?: Size
  marginBottom?: Size
  marginLeft?: Size
  style?: CSSProperties
}

export const Grid = ({
  as = 'div',
  children,
  className,
  breakpoints,
  id,
  style,
  ...styleProps
}: GridProps) => {
  const reactId = useId()
  const scope = `grid-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`

  const baseStyle: CSSProperties = {
    display: 'grid',
    padding: '16px 0px',
    ...buildStyle(styleProps),
  }

  const scopedCss = buildScopedCss(scope, baseStyle, undefined, breakpoints)
  useScopedCss(scope, scopedCss)

  const commonProps = {
    id,
    className: cn(scope, className),
    style,
  }

  if (as === 'section') {
    return <section {...commonProps}>{children}</section>
  }
  return <div {...commonProps}>{children}</div>
}
