import type { AppProps } from 'next/app'
import 'pages/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
