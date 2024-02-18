import type { Metadata } from 'next'

import localFont from 'next/font/local'

import StyledComponentsRegistry from 'app/registry'

export const metadata: Metadata = {
  title: "Stephania Nevado's portfolio",
  description: 'This is my portfolio showcase landing page',
  icons: '/images/favicon.svg',
}

const font = localFont({
  src: '/fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
