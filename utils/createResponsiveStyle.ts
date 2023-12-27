import type { TextProps } from 'components/common/text/Text.style'
import type { Breakpoint } from 'components/Theme'
import { Theme } from 'components/Theme'

import type { BreakpointStyles, Variant } from 'types/index'

import { getTypographyStyle } from 'utils/getTypographyStyle'
import { propToCSSMap } from 'utils/propToCSSMap'

export const createResponsiveStyle = (
  breakpoints?: Record<string, BreakpointStyles>
) => {
  if (!breakpoints) return null

  // Map over each breakpoint and generate responsive styles
  return Object.keys(breakpoints)
    .map((breakpoint) => {
      const breakpointStyles = breakpoints[breakpoint]

      return `
        ${Theme.breakpoints[breakpoint as Breakpoint]} {
          ${Object.keys(breakpointStyles)
            .map((prop) => {
              const cssProperty = propToCSSMap[prop] || prop

              // Check if both 'variant' and 'subStyle' are present in breakpointStyles
              if (
                'variant' in breakpointStyles &&
                'subStyle' in breakpointStyles
              ) {
                // Create a new 'typography' object for each iteration to avoid overwriting
                const typography = {
                  ...(breakpointStyles.variant && {
                    variant: breakpointStyles.variant,
                  }),
                  ...(breakpointStyles.subStyle && {
                    subStyle: breakpointStyles.subStyle,
                  }),
                }

                const typographyStyle = getTypographyStyle(
                  typography.variant as Variant,
                  typography.subStyle as TextProps['subStyle']
                ) as Record<string, string>

                // Generate CSS properties based on the returned typographyStyle
                return Object.keys(typographyStyle)
                  .map(
                    (typographyProp) =>
                      `${propToCSSMap[typographyProp]}: ${typographyStyle[typographyProp]};`
                  )
                  .join(' ')
              } else {
                // Use regular style
                return `${cssProperty}: ${breakpointStyles[prop]};`
              }
            })
            .join(' ')}
        }
      `
    })
    .join('')
}
