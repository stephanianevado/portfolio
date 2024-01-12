import type { AppProps } from 'next/app'

import Head from 'next/head'

import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { GlobalStyle, Theme } from 'components/Theme'
import { shouldForwardProp } from 'utils/shouldForwardProp'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,viewport-fit=cover"
        />
        <title>Stephania Nevado&apos;s portfolio</title>
      </Head>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyleSheetManager>
    </ThemeProvider>
  )
}
