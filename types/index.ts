import type { FC, MouseEventHandler, PropsWithChildren } from 'react'

enum Breakpoint {
  MOBILE_S = 'MOBILE_S',
  MOBILE_M = 'MOBILE_M',
  MOBILE_L = 'MOBILE_L',
  TABLET = 'TABLET',
  LAPTOP = 'LAPTOP',
  LAPTOP_M = 'LAPTOP_M',
  LAPTOP_L = 'LAPTOP_L',
  DESKTOP = 'DESKTOP',
}

export default Breakpoint

export type BreakpointStyles = Record<string, string | number>

export type Color = 'dark' | 'grey' | 'grey2' | 'white' | 'pink'

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

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

export type AlignContent = 'start' | 'center' | 'space-between' | 'space-around'

export type Display = 'none' | 'flex'

export type Position = 'static' | 'relative' | 'absolute' | 'sticky'

export type Size = number

export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename'

export type PaddingProps = {
  padding: Size
  paddingVertical: Size
  paddingHorizontal: Size
  paddingTop: Size
  paddingRight: Size
  paddingBottom: Size
  paddingLeft: Size
}

export type MarginProps = {
  margin: Size
  marginHorizontal: Size
  marginVertical: Size
  marginTop: Size
  marginRight: Size
  marginBottom: Size
  marginLeft: Size
}

export type Fonts = {
  HEADER: string
  BODY: string
}
export type Typography = {
  fontFamily: string
  fontWeight?: number
  fontSize: number
  lineHeight: number
  letterSpacing: number
  variants?: {
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
  fonts: Fonts
  typography: {
    padme: Typography
    anakin: Typography
    ashoka: Typography
    leia: Typography
    luke: Typography
    obi: Typography
  }
}

export type BoxProps = PaddingProps &
  MarginProps &
  PropsWithChildren<
    {
      id: string
      as: string | JSX.Element | FC
      boxSizing: 'border-box' | 'content-box'
      children: React.ReactNode | React.ReactNode[]
      bg: Color
      border: Color
      borderRadius: Size
      height: Size
      minHeight: Size
      width: Size
      maxWidth: Size
      position: Position
      top: Size
      right: Size
      bottom: Size
      left: Size
      display: Display
      grow: number
      shrink: number
      basis: Size
      flex: number
      direction: Direction
      wrap: number
      justifyContent: JustifyContent
      alignContent: AlignContent
      alignItems: AlignItems
      alignSelf: AlignSelf
      ref: React.RefObject<HTMLInputElement>
      className: string
      target: Target
      hover: Record<string, unknown>
      onClick: MouseEventHandler<HTMLInputElement> | ((a: unknown) => void)
      onSubmit: (event: React.SyntheticEvent) => void
      href: string
      breakpoints: Record<string, BreakpointStyles>
    } & (
      | { as: string; href: undefined }
      | { as: 'a'; href: string; cursor: 'pointer' }
    )
  >

export type TextProps = PaddingProps &
  MarginProps &
  PropsWithChildren<
    {
      display: Display
      grow: number
      shrink: number
      basis: Size
      flex: number
      direction: Direction
      wrap: number
      justifyContent: JustifyContent
      alignContent: AlignContent
      alignItems: AlignItems
      alignSelf: AlignSelf
      id: string
      as: string
      children: React.ReactNode | React.ReactNode[]
      variant: 'padme' | 'anakin' | 'ashoka' | 'leia' | 'luke' | 'obi'
      subStyle: 'normal' | 'bold'
      target: '_blank'
      rel: string
      color: Color
      align: 'center' | 'left' | 'right'
      breakpoints: Record<string, BreakpointStyles>
    } & { as?: string; href?: string }
  >

export type ButtonProps = PaddingProps &
  MarginProps &
  PropsWithChildren<{
    id: string
    name: string
    type: 'button' | 'reset' | 'submit'
    color: Color
    bg: Color
    hover: Record<string, unknown>
    disabled: boolean
    boxSizing: 'border-box' | 'content-box'
    children: React.ReactNode
    border: Color
    borderRadius: Size
    height: Size
    minHeight: Size
    width: Size
    maxWidth: Size
    onClick: MouseEventHandler<HTMLInputElement>
    breakpoints: Record<string, BreakpointStyles>
  }>

export type SpacerProps = {
  size: Size
}
