import { Theme } from 'components/Theme'

import type Breakpoint from 'types/index'
import type { BreakpointStyles } from 'types/index'

import { propToCSSMap } from 'utils/propToCSSMap'

export const createResponsiveStyle = (
  breakpoints: Record<string, BreakpointStyles> | undefined
) => {
  if (!breakpoints) return null

  return Object.keys(breakpoints)
    .map((breakpoint) => {
      const breakpointStyles = breakpoints[breakpoint]
      return `
        ${Theme.breakpoints[breakpoint as Breakpoint]} {
          ${Object.keys(breakpointStyles)
            .map((style) => {
              const cssProperty = propToCSSMap[style] || style

              return `${cssProperty}: ${breakpointStyles[style]};`
            })
            .join(' ')}
        }
      `
    })
    .join('')
}
