'use client'

import { useInsertionEffect } from 'react'

import type { CSSProperties } from 'react'

import { useServerInsertedHTML } from 'next/navigation'


import type { Breakpoint } from 'components/Theme'
import { breakpointPx } from 'components/Theme'

import { buildStyle, type LayoutStyleInput } from 'utils/buildStyle'

const camelToKebab = (input: string): string =>
  input.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)

const stylesToCss = (styles: CSSProperties): string =>
  Object.entries(styles)
    .map(([k, v]) => `${camelToKebab(k)}: ${String(v)};`)
    .join(' ')

export const buildScopedCss = (
  scope: string,
  base: CSSProperties,
  hover?: Partial<LayoutStyleInput>,
  breakpoints?: Partial<Record<Breakpoint, Partial<LayoutStyleInput>>>
): string => {
  const chunks: string[] = []
  const baseBody = stylesToCss(base)
  if (baseBody !== '') chunks.push(`.${scope} { ${baseBody} }`)
  if (hover) {
    const body = stylesToCss(buildStyle(hover))
    if (body !== '') chunks.push(`.${scope}:hover { ${body} }`)
  }
  if (breakpoints) {
    for (const bp of Object.keys(breakpoints) as Breakpoint[]) {
      const bpStyles = breakpoints[bp]
      if (!bpStyles) continue
      const body = stylesToCss(buildStyle(bpStyles))
      if (body === '') continue
      chunks.push(
        `@media (min-width: ${breakpointPx[bp]}px) { .${scope} { ${body} } }`
      )
    }
  }
  return chunks.join(' ')
}

const CLIENT_STYLE_ID = 'portfolio-scoped-styles'
const clientRules = new Map<string, string>()

const flushClientStyles = (): void => {
  if (typeof document === 'undefined') return
  let el = document.getElementById(CLIENT_STYLE_ID) as HTMLStyleElement | null
  if (!el) {
    el = document.createElement('style')
    el.id = CLIENT_STYLE_ID
    document.head.appendChild(el)
  }
  el.textContent = Array.from(clientRules.values()).join('\n')
}

export const useScopedCss = (scope: string, css: string): void => {
  useServerInsertedHTML(() => (
    <style
      data-portfolio-scoped={scope}
      dangerouslySetInnerHTML={{ __html: css }}
    />
  ))
  useInsertionEffect(() => {
    clientRules.set(scope, css)
    flushClientStyles()
    return () => {
      clientRules.delete(scope)
      flushClientStyles()
    }
  }, [scope, css])
}
