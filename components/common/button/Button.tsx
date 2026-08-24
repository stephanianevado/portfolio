'use client'

import type {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  SyntheticEvent,
} from 'react'

import { Spacer } from 'components/common/spacer/Spacer'
import type { Icon } from 'components/icons/icons'
import { Theme } from 'components/Theme'

import type { Color, JustifyContent, Size } from 'types/index'

import { px } from 'utils/buildStyle'
import { cn } from 'utils/cn'

const {
  colors: { tertiaryBlack },
  fontSize: { small },
  fontWeight: { bold },
} = Theme

export enum Mode {
  STANDARD = 'STANDARD',
  ALTERNATIVE = 'ALTERNATIVE',
}

export type ButtonProps = {
  id?: string
  name?: string
  type?: 'button' | 'reset' | 'submit'
  color?: Color | string
  bg?: Color | string
  bgHover?: Color | string
  disabled?: boolean
  children?: ReactNode
  border?: Color | string
  width?: Size
  borderRadius?: Size
  justifyContent?: JustifyContent
  href?: string
  target?: '_blank'
  icon?: Icon
  iconPosition?: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLElement>
  onSubmit?: (event: SyntheticEvent) => void
  padding?: Size
  paddingHorizontal?: Size
  paddingVertical?: Size
  paddingTop?: Size
  paddingRight?: Size
  paddingBottom?: Size
  paddingLeft?: Size
  fontFamily?: string
  fontSize?: number
  fontWeight?: number
  isCompact?: boolean
  mode?: Mode
  as?: 'button' | 'a'
  className?: string
}

const resolvePadding = (
  padding: Size | undefined,
  paddingVertical: Size | undefined,
  paddingHorizontal: Size | undefined,
  paddingTop: Size | undefined,
  paddingRight: Size | undefined,
  paddingBottom: Size | undefined,
  paddingLeft: Size | undefined
): string | undefined => {
  const top = px(paddingTop) ?? px(paddingVertical)
  const right = px(paddingRight) ?? px(paddingHorizontal)
  const bottom = px(paddingBottom) ?? px(paddingVertical)
  const left = px(paddingLeft) ?? px(paddingHorizontal)
  if (top || right || bottom || left) {
    return `${top ?? '0px'} ${right ?? '0px'} ${bottom ?? '0px'} ${left ?? '0px'}`
  }
  return px(padding)
}

export const Button = ({
  iconPosition = 'right',
  icon: IconComponent,
  onClick,
  onSubmit,
  children,
  isCompact = false,
  mode = Mode.STANDARD,
  color,
  bg,
  bgHover,
  border,
  borderRadius,
  width,
  justifyContent,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  fontFamily,
  fontSize,
  fontWeight,
  disabled,
  type = 'button',
  id,
  name,
  href,
  target,
  as = 'button',
  className,
}: ButtonProps) => {
  const isAlternative = mode === Mode.ALTERNATIVE
  const iconSize = isCompact ? 6 : 10
  const alternativeWidth = isCompact ? 42 : 40

  const resolvedPadding =
    resolvePadding(
      padding ?? (isAlternative ? 1 : undefined),
      paddingVertical,
      paddingHorizontal,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    ) ?? '16px 24px'

  const resolvedWidth = isAlternative
    ? px(alternativeWidth)
    : (px(width) ?? '100%')

  const style: CSSProperties = {
    padding: resolvedPadding,
    fontSize: fontSize ?? small,
    fontWeight: fontWeight ?? bold,
    lineHeight: 1,
    color: color ?? tertiaryBlack,
    backgroundColor: bg ?? 'var(--button-surface)',
    boxSizing: 'border-box',
    borderRadius: px(borderRadius ?? (isAlternative ? 10 : 2)),
    border: border ?? '1px solid var(--button-border)',
    width: resolvedWidth,
    maxWidth: '100%',
    minWidth: '80px',
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center',
    justifyContent: justifyContent ?? (isAlternative ? 'flex-start' : 'center'),
    alignItems: 'center',
    flexShrink: 1,
    appearance: 'none',
    transformOrigin: '50% 50%',
    transitionProperty: 'color, background-color, border-color, transform',
    transitionDuration: '120ms',
    transitionTimingFunction: 'ease-in-out',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
  }
  if (fontFamily !== undefined) style.fontFamily = fontFamily

  const hoverStyle: CSSProperties = {
    boxShadow: `0 0 0 1px var(--border)`,
  }
  if (bgHover !== undefined) hoverStyle.backgroundColor = bgHover

  const iconLeft = iconPosition === 'left' && IconComponent && (
    <>
      {isAlternative ? (
        <IconComponent size={iconSize} color={color} />
      ) : (
        <IconComponent size={4} />
      )}
      <Spacer size={2} />
    </>
  )
  const iconRight = iconPosition === 'right' && IconComponent && (
    <>
      <Spacer size={2} />
      {isAlternative ? (
        <IconComponent size={iconSize} color={color} />
      ) : (
        <IconComponent size={4} />
      )}
    </>
  )

  const hoverEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    Object.assign(event.currentTarget.style, hoverStyle)
  }
  const hoverLeave = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.backgroundColor = bg ?? 'var(--button-surface)'
    event.currentTarget.style.boxShadow = ''
  }

  if (as === 'a') {
    return (
      <a
        id={id}
        href={href}
        target={target}
        style={style}
        className={cn('portfolio-button', className)}
        onClick={onClick}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}>
        {iconLeft}
        {children}
        {iconRight}
      </a>
    )
  }

  return (
    <button
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      style={style}
      className={cn('portfolio-button', className)}
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}
