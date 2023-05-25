import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'

import type { AppProps } from 'next/app'

import Head from 'next/head'

import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'

import { GlobalStyle } from 'components/Theme'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Head>
        <title>Stephania Nevado's portfolio</title>
      </Head>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
