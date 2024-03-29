import type { Breakpoint, Variant } from 'components/Theme'

export type BreakpointStyles = Record<string, string | number>

export type Color = string

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

export type AlignContent = 'start' | 'center' | 'space-between' | 'space-around'

export type AlignItems =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'

export type AlignSelf = 'flex-start' | 'flex-end' | 'center' | 'stretch'

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch'

export type JustifySelf = 'start' | 'end' | 'center' | 'stretch'

export type Display =
  | 'none'
  | 'flex'
  | 'inline-flex'
  | 'block'
  | 'inline-block'
  | 'grid'
  | 'inline-grid'
  | 'inline'
  | 'flow-root'

export type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'

export type Size = number | string

export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename'

export type Fonts = {
  HEADER: string
  BODY: string
}
export type Typography = {
  fontFamily: string
  fontWeight?: number
  fontSize: string
  lineHeight: number
  letterSpacing: number
  variants: {
    normal: {
      fontWeight: number
    }
    bold: {
      fontWeight: number
    }
  }
}

export type ThemeProps = {
  colors: Color
  breakpoints: Breakpoint
  fontFamily: string
  fontWeight?: number
  fontSize: Array<Variant>
  lineHeight: number
  letterSpacing: string
}
