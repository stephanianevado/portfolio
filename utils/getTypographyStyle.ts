import type { TextProps } from 'components/common/text/Text.style'
import { Theme } from 'components/Theme'
import type { Typography, Variant } from 'types/index'

export const getTypographyStyle = <T extends Variant>(
  variant: T,
  subStyle: TextProps['subStyle']
) => {
  const typography = Theme.typography as Record<T, Typography>

  // Type guard function to check if variant is a valid key
  const isValidVariant = (v: T | undefined): v is T => {
    return v !== undefined && v in typography
  }

  if (!isValidVariant(variant)) {
    // eslint-disable-next-line no-console
    console.warn(`Typography style for '${variant}' not found in theme.`)
    return {}
  }

  const typographyStyle = typography[variant]

  let styleToApply = typographyStyle

  if (subStyle && typographyStyle.variants) {
    const variantStyle = typographyStyle.variants[subStyle]

    if (variantStyle) {
      styleToApply = {
        ...typographyStyle,
        ...variantStyle,
      }
    }
  }

  return {
    fontFamily: styleToApply.fontFamily,
    fontWeight: styleToApply.fontWeight || 400,
    fontSize: styleToApply.fontSize,
    lineHeight: styleToApply.lineHeight,
    letterSpacing: styleToApply.letterSpacing,
  }
}
