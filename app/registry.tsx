'use client'

import isPropValid from '@emotion/is-prop-valid'

import React, { useState } from 'react'

import { useServerInsertedHTML } from 'next/navigation'

import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components'

import { GlobalStyle, Theme } from 'components/Theme'

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName: string, element: string) {
  if (typeof element === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <ThemeProvider theme={Theme}>
      <StyleSheetManager
        sheet={styledComponentsStyleSheet.instance}
        shouldForwardProp={shouldForwardProp}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyleSheetManager>
    </ThemeProvider>
  )
}
