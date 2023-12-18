import type { AppProps } from 'next/app'

import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { Box } from 'components/common/box/Box'
import { Footer } from 'components/navigation/Footer'
import { Header } from 'components/navigation/Header'
import { Breakpoint, GlobalStyle, Theme } from 'components/Theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        position="static"
        height="100vh"
        breakpoints={{
          [Breakpoint.MOBILE_S]: { margin: '24px 0px' },
          [Breakpoint.LAPTOP]: { margin: '24px 80px' },
          [Breakpoint.DESKTOP]: { margin: '24px 640px' },
        }}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1,viewport-fit=cover"
          />
        </Head>
        <Head>
          <title>Stephania Nevado's portfolio</title>
        </Head>
        <GlobalStyle />
        <Header />
        <Box>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
