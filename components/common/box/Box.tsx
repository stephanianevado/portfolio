'use client'

import {
  useId,
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
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
  Position,
  Size,
  Target,
} from 'types/index'

import { buildStyle, type LayoutStyleInput } from 'utils/buildStyle'
import { cn } from 'utils/cn'
import { buildScopedCss, useScopedCss } from 'utils/scopedCss'

export type BoxTag =
  | 'div'
  | 'a'
  | 'header'
  | 'main'
  | 'footer'
  | 'section'
  | 'nav'
  | 'ul'
  | 'li'

export type BoxBreakpointStyles = Partial<LayoutStyleInput>

export type BoxProps = {
  id?: string
  as?: BoxTag
  boxSizing?: 'border-box' | 'content-box'
  children?: ReactNode
  bg?: Color | string
  border?: Color | string
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
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: JustifyContent
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  ref?: Ref<HTMLElement>
  rel?: string
  className?: string
  target?: Target
  hover?: BoxBreakpointStyles
  onClick?: MouseEventHandler<HTMLElement> | (() => void)
  onMouseEnter?: MouseEventHandler<HTMLElement>
  onMouseLeave?: MouseEventHandler<HTMLElement>
  onSubmit?: (event: React.SyntheticEvent) => void
  href?: string
  cursor?: 'pointer' | 'default' | 'not-allowed'
  textDecoration?: 'none' | 'underline'
  animation?: string
  zIndex?: string | number
  breakpoints?: Partial<Record<Breakpoint, BoxBreakpointStyles>>
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
  'aria-label'?: string
}

export const Box = ({
  as = 'div',
  children,
  className,
  hover,
  breakpoints,
  ref,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onSubmit,
  href,
  rel,
  target,
  id,
  style,
  'aria-label': ariaLabel,
  ...styleProps
}: BoxProps) => {
  const reactId = useId()
  const scope = `box-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`

  const baseStyle: CSSProperties = {
    boxSizing: 'border-box',
    display: styleProps.display ?? 'flex',
    flexDirection: styleProps.direction ?? 'column',
    alignItems: styleProps.alignItems ?? 'stretch',
    justifyContent: styleProps.justifyContent ?? 'flex-start',
    ...buildStyle(styleProps),
  }

  const scopedCss = buildScopedCss(scope, baseStyle, hover, breakpoints)
  useScopedCss(scope, scopedCss)

  const commonProps = {
    id,
    className: cn(scope, className),
    style,
    onMouseEnter,
    onMouseLeave,
    onClick,
    onSubmit,
    'aria-label': ariaLabel,
  }

  if (as === 'a') {
    return (
      <a
        {...commonProps}
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        rel={rel}
        target={target}>
        {children}
      </a>
    )
  }
  if (as === 'header') {
    return (
      <header {...commonProps} ref={ref as Ref<HTMLElement>}>
        {children}
      </header>
    )
  }
  if (as === 'main') {
    return (
      <main {...commonProps} ref={ref as Ref<HTMLElement>}>
        {children}
      </main>
    )
  }
  if (as === 'footer') {
    return (
      <footer {...commonProps} ref={ref as Ref<HTMLElement>}>
        {children}
      </footer>
    )
  }
  if (as === 'section') {
    return (
      <section {...commonProps} ref={ref as Ref<HTMLElement>}>
        {children}
      </section>
    )
  }
  if (as === 'nav') {
    return (
      <nav {...commonProps} ref={ref as Ref<HTMLElement>}>
        {children}
      </nav>
    )
  }
  if (as === 'ul') {
    return (
      <ul {...commonProps} ref={ref as Ref<HTMLUListElement>}>
        {children}
      </ul>
    )
  }
  if (as === 'li') {
    return (
      <li {...commonProps} ref={ref as Ref<HTMLLIElement>}>
        {children}
      </li>
    )
  }
  return (
    <div {...commonProps} ref={ref as Ref<HTMLDivElement>}>
      {children}
    </div>
  )
}
