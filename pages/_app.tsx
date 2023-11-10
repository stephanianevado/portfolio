import { type ReactElement, type ReactNode } from 'react'

import type { NextPage } from 'next'

import type { AppProps } from 'next/app'

import Head from 'next/head'

import { Box } from 'components/Box'
import { Footer } from 'components/navigation/Footer'
import { Header } from 'components/navigation/Header'
import { GlobalStyle } from 'components/Theme'

import Breakpoint from 'types/index'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
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
      <Box grow={1}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Box>
  )
}
