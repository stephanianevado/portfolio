import { Theme } from 'components/Theme'
import type { TextProps, ThemeProps } from 'types/index'

export const getTypographyStyle = (
  variant: TextProps['variant'],
  subStyle: TextProps['subStyle']
) => {
  const typography = Theme.typography as ThemeProps['typography']
  const typographyStyle = typography[variant]

  if (!typographyStyle) {
    // eslint-disable-next-line no-console
    console.warn(`Typography style for '${variant}' not found in theme.`)
    return {}
  }

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
