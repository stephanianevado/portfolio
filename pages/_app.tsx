import type { AppProps } from 'next/app'

import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, Theme } from 'components/Theme'

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
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
