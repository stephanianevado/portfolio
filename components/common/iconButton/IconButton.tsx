'use client'

import type {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from 'react'

import type { Icon } from 'components/icons/icons'

import type { Color, Size, Target } from 'types/index'

import { px } from 'utils/buildStyle'
import { cn } from 'utils/cn'

export type IconButtonProps = {
  id?: string
  name: string
  color?: Color | string
  bg?: Color | string
  disabled?: boolean
  icon: Icon
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: Size
  href?: string
  target?: Target
  padding?: Size
  className?: string
  children?: ReactNode
  'aria-label'?: string
}

export const IconButton = ({
  onClick,
  icon: IconComponent,
  color,
  bg,
  disabled,
  size,
  padding,
  id,
  name,
  className,
  'aria-label': ariaLabel,
}: IconButtonProps) => {
  const dimension = px(size) ?? '40px'
  const style: CSSProperties = {
    padding: px(padding) ?? '0px',
    color: color ?? 'transparent',
    backgroundColor: bg ?? 'transparent',
    border: '0px',
    width: dimension,
    height: dimension,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    appearance: 'none',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
  }

  return (
    <button
      id={id}
      name={name}
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={cn('portfolio-icon-button', className)}
      aria-label={ariaLabel}>
      <IconComponent />
    </button>
  )
}
