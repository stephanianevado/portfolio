import type { CSSProperties } from 'react'

import type { Breakpoint} from 'components/Theme';
import { breakpointPx } from 'components/Theme'

import type { Size } from 'types/index'

export const px = (value: Size | undefined): string | undefined => {
  if (typeof value === 'number') return `${value * 4}px`
  if (typeof value === 'string') return value
  return undefined
}

export type LayoutStyleInput = {
  boxSizing?: 'border-box' | 'content-box'
  bg?: string
  border?: string
  borderRadius?: Size
  height?: Size
  maxHeight?: Size
  minHeight?: Size
  width?: Size
  maxWidth?: Size
  position?: CSSProperties['position']
  top?: Size
  right?: Size
  bottom?: Size
  left?: Size
  overflow?: CSSProperties['overflow']
  display?: CSSProperties['display']
  grow?: number
  shrink?: number
  basis?: Size
  flex?: number
  direction?: CSSProperties['flexDirection']
  wrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  justifyItems?: CSSProperties['justifyItems']
  justifySelf?: CSSProperties['justifySelf']
  alignContent?: CSSProperties['alignContent']
  alignItems?: CSSProperties['alignItems']
  alignSelf?: CSSProperties['alignSelf']
  textDecoration?: CSSProperties['textDecoration']
  textDecorationColor?: string
  textUnderlineOffset?: string
  textWrap?: CSSProperties['textWrap']
  whiteSpace?: CSSProperties['whiteSpace']
  align?: CSSProperties['textAlign']
  color?: string
  animation?: string
  zIndex?: string | number
  cursor?: CSSProperties['cursor']
  gap?: Size
  columns?: string
  rows?: string
  columnGap?: Size
  rowGap?: Size
  variant?: string
  subStyle?: number
  lineHeight?: number
  fontFamily?: string
  opacity?: number
  margin?: Size
  marginHorizontal?: Size
  marginVertical?: Size
  marginTop?: Size
  marginRight?: Size
  marginBottom?: Size
  marginLeft?: Size
  padding?: Size
  paddingHorizontal?: Size
  paddingVertical?: Size
  paddingTop?: Size
  paddingRight?: Size
  paddingBottom?: Size
  paddingLeft?: Size
}

const setIfDefined = <K extends keyof CSSProperties>(
  target: CSSProperties,
  key: K,
  value: CSSProperties[K] | undefined
): void => {
  if (value !== undefined) target[key] = value
}

type PxDimensionKey =
  | 'width'
  | 'height'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'borderRadius'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'flexBasis'
  | 'gap'
  | 'columnGap'
  | 'rowGap'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'

const setPx = (
  target: CSSProperties,
  key: PxDimensionKey,
  value: Size | undefined
): void => {
  const resolved = px(value)
  if (resolved !== undefined) {
    target[key] = resolved
  }
}

const animationMap: Record<string, string> = {
  fadeInRight: 'fade-in-right 200ms ease-out',
  fadeInLeft: 'fade-in-left 200ms ease-out',
  fadeInUp: 'fade-in-up 200ms ease-out',
  fadeInDown: 'fade-in-down 200ms ease-out',
  fadeOutRight: 'fade-out-right 200ms ease-out',
}

const resolveAnimation = (value: string | undefined): string | undefined => {
  if (value === undefined) return undefined
  return animationMap[value] ?? value
}

export const buildStyle = (props: LayoutStyleInput): CSSProperties => {
  const style: CSSProperties = {}

  setIfDefined(style, 'boxSizing', props.boxSizing)
  setIfDefined(style, 'backgroundColor', props.bg)
  setIfDefined(style, 'border', props.border)
  setPx(style, 'borderRadius', props.borderRadius)
  setPx(style, 'height', props.height)
  setPx(style, 'maxHeight', props.maxHeight)
  setPx(style, 'minHeight', props.minHeight)
  setPx(style, 'width', props.width)
  setPx(style, 'maxWidth', props.maxWidth)
  setIfDefined(style, 'position', props.position)
  setPx(style, 'top', props.top)
  setPx(style, 'right', props.right)
  setPx(style, 'bottom', props.bottom)
  setPx(style, 'left', props.left)
  setIfDefined(style, 'overflow', props.overflow)
  setIfDefined(style, 'display', props.display)
  setIfDefined(style, 'flexGrow', props.grow)
  setIfDefined(style, 'flexShrink', props.shrink)
  setPx(style, 'flexBasis', props.basis)
  setIfDefined(style, 'flex', props.flex)
  setIfDefined(style, 'flexDirection', props.direction)
  setIfDefined(style, 'flexWrap', props.wrap)
  setIfDefined(style, 'justifyContent', props.justifyContent)
  setIfDefined(style, 'justifyItems', props.justifyItems)
  setIfDefined(style, 'justifySelf', props.justifySelf)
  setIfDefined(style, 'alignContent', props.alignContent)
  setIfDefined(style, 'alignItems', props.alignItems)
  setIfDefined(style, 'alignSelf', props.alignSelf)
  setIfDefined(style, 'textAlign', props.align)
  setIfDefined(style, 'textDecoration', props.textDecoration)
  setIfDefined(style, 'textDecorationColor', props.textDecorationColor)
  setIfDefined(style, 'textUnderlineOffset', props.textUnderlineOffset)
  setIfDefined(style, 'textWrap', props.textWrap)
  setIfDefined(style, 'whiteSpace', props.whiteSpace)
  setIfDefined(style, 'color', props.color)
  setIfDefined(style, 'animation', resolveAnimation(props.animation))
  setIfDefined(style, 'zIndex', props.zIndex)
  setIfDefined(style, 'cursor', props.cursor)
  setPx(style, 'gap', props.gap)
  setPx(style, 'columnGap', props.columnGap)
  setPx(style, 'rowGap', props.rowGap)
  setIfDefined(style, 'gridTemplateColumns', props.columns)
  setIfDefined(style, 'gridTemplateRows', props.rows)
  setIfDefined(style, 'fontFamily', props.fontFamily)
  setIfDefined(style, 'fontSize', props.variant)
  setIfDefined(style, 'fontWeight', props.subStyle)
  setIfDefined(style, 'lineHeight', props.lineHeight)
  setIfDefined(style, 'opacity', props.opacity)

  const margin = px(props.margin)
  if (margin !== undefined) style.margin = margin
  const marginVertical = px(props.marginVertical)
  if (marginVertical !== undefined) {
    style.marginTop = marginVertical
    style.marginBottom = marginVertical
  }
  const marginHorizontal = px(props.marginHorizontal)
  if (marginHorizontal !== undefined) {
    style.marginLeft = marginHorizontal
    style.marginRight = marginHorizontal
  }
  setPx(style, 'marginTop', props.marginTop)
  setPx(style, 'marginRight', props.marginRight)
  setPx(style, 'marginBottom', props.marginBottom)
  setPx(style, 'marginLeft', props.marginLeft)

  const padding = px(props.padding)
  if (padding !== undefined) style.padding = padding
  const paddingVertical = px(props.paddingVertical)
  if (paddingVertical !== undefined) {
    style.paddingTop = paddingVertical
    style.paddingBottom = paddingVertical
  }
  const paddingHorizontal = px(props.paddingHorizontal)
  if (paddingHorizontal !== undefined) {
    style.paddingLeft = paddingHorizontal
    style.paddingRight = paddingHorizontal
  }
  setPx(style, 'paddingTop', props.paddingTop)
  setPx(style, 'paddingRight', props.paddingRight)
  setPx(style, 'paddingBottom', props.paddingBottom)
  setPx(style, 'paddingLeft', props.paddingLeft)

  return style
}

export type ResponsiveStyles = Partial<Record<Breakpoint, LayoutStyleInput>>

const camelToKebab = (input: string): string =>
  input.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)

export const buildResponsiveCss = (
  scopeClass: string,
  breakpoints?: ResponsiveStyles
): string => {
  if (!breakpoints) return ''
  const keys = Object.keys(breakpoints) as Breakpoint[]
  return keys
    .map((bp) => {
      const styles = buildStyle(breakpoints[bp] ?? {})
      const body = Object.entries(styles)
        .map(([k, v]) => `${camelToKebab(k)}: ${v};`)
        .join(' ')
      if (body === '') return ''
      return `@media (min-width: ${breakpointPx[bp]}px) { .${scopeClass} { ${body} } }`
    })
    .filter((chunk) => chunk !== '')
    .join(' ')
}

export const scopeClassFromId = (id: string): string =>
  `scope-${id.replace(/[^a-zA-Z0-9_-]/g, '')}`
