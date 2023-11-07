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

export type Size = number

export type PaddingProps = {
  padding?: Size
  paddingVertical?: Size
  paddingHorizontal?: Size
  paddingTop?: Size
  paddingRight?: Size
  paddingBottom?: Size
  paddingLeft?: Size
}

export type MarginProps = {
  margin?: Size
  marginHorizontal?: Size
  marginVertical?: Size
  marginTop?: Size
  marginRight?: Size
  marginBottom?: Size
  marginLeft?: Size
}

export type BoxProps = PaddingProps &
  MarginProps &
  PropsWithChildren<
    {
      as?: string | JSX.Element | FC
      boxSizing?: 'border-box' | 'content-box'
      children?: React.ReactNode
      bg?: Color
      height?: Size
      minHeight?: Size
      width?: Size
      maxWidth?: Size
      direction?: Direction
      alignItems?: AlignItems
      alignSelf?: AlignSelf
      justifyContent?: JustifyContent
      space?: Size
      display: Display
      id?: string
      role?: string
      grow?: number
      shrink?: number
      basis?: Size
      ref?: React.RefObject<HTMLInputElement>
      extend?: Record<string, unknown>
      className?: string
      target?: '_blank'
      flex?: number
      wrap?: number
      alignContent: AlignContent
      border?: Color
      borderRadius: Size
      hover: Record<string, unknown>
      onClick?: MouseEventHandler<HTMLInputElement> | ((a: unknown) => void)
      onSubmit?: (event: React.SyntheticEvent) => void
    } & (
      | { as?: string; href?: undefined }
      | { as: 'a'; href: string; cursor: 'pointer' }
    )
  >
