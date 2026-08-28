import { getLocale } from 'next-intl/server'

import localFont from 'next/font/local'


import 'app/globals.css'

const font = localFont({
  src: './fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  preload: true,
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  return (
    <html lang={locale} className={font.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
