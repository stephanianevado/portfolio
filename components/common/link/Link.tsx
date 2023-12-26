import { StyledLink, type LinkProps } from 'components/common/link/Link.style'
import { Text } from 'components/common/text/Text'
import type { TextProps } from 'components/common/text/Text.style'

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
  ...props
}: LinkProps & Pick<TextProps, 'variant' | 'subStyle' | 'color'>) => {
  const linkBase = (
    <Text as="span" variant={variant} subStyle={subStyle} color={color}>
      {children}
    </Text>
  )

  if (onClick) {
    return (
      <StyledLink
        ref={ref}
        color={color}
        onClick={onClick}
        disabled={disabled}
        {...props}>
        {linkBase}
      </StyledLink>
    )
  }

  return (
    <StyledLink ref={ref} href={href} color={color} target={target} {...props}>
      {linkBase}
    </StyledLink>
  )
}
