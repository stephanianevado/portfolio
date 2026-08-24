'use client'

import type {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react'

import { Text } from 'components/common/text/Text'

import type { Color, Size, Target } from 'types/index'

import { px } from 'utils/buildStyle'

export type LinkProps = {
  id?: string
  children?: ReactNode
  color: Color | string
  variant?: string
  subStyle?: number
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
  href?: string
  target?: Target
  ref?: Ref<HTMLAnchorElement>
  padding?: Size
  paddingHorizontal?: Size
  paddingVertical?: Size
}

export const Link = ({
  color,
  variant,
  subStyle,
  disabled,
  target,
  ref,
  href,
  onClick,
  children,
  padding,
  paddingHorizontal,
  paddingVertical,
  id,
}: LinkProps) => {
  const style: CSSProperties = {
    boxSizing: 'border-box',
    width: 'max-content',
    maxWidth: '100%',
    appearance: 'none',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: `underline ${color}`,
    pointerEvents: disabled ? 'none' : 'auto',
  }
  const paddingValue = px(padding)
  if (paddingValue !== undefined) style.padding = paddingValue
  const paddingVerticalValue = px(paddingVertical)
  if (paddingVerticalValue !== undefined) {
    style.paddingTop = paddingVerticalValue
    style.paddingBottom = paddingVerticalValue
  }
  const paddingHorizontalValue = px(paddingHorizontal)
  if (paddingHorizontalValue !== undefined) {
    style.paddingLeft = paddingHorizontalValue
    style.paddingRight = paddingHorizontalValue
  }

  return (
    <a
      id={id}
      ref={ref}
      href={href}
      target={target}
      onClick={onClick}
      style={style}>
      <Text as="span" variant={variant} subStyle={subStyle} color={color}>
        {children}
      </Text>
    </a>
  )
}
