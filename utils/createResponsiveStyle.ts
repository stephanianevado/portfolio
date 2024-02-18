import type { Breakpoint } from 'components/Theme'
import { Theme } from 'components/Theme'

import type { BreakpointStyles } from 'types/index'

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

              return `${cssProperty}: ${breakpointStyles[prop]};`
            })
            .join(' ')}
        }
      `
    })
    .join('')
}
