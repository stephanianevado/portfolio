import { render, type RenderOptions } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import type { ReactElement, ReactNode } from 'react'

import { ThemeProvider } from 'components/ThemeProvider'
import { routing, type Locale } from 'i18n/routing'

import enMessages from 'messages/en.json'
import esMessages from 'messages/es.json'
import svMessages from 'messages/sv.json'

type Messages = typeof enMessages

const catalogs: Record<Locale, Messages> = {
  en: enMessages,
  es: esMessages,
  sv: svMessages,
}

export type RenderWithProvidersOptions = Omit<RenderOptions, 'wrapper'> & {
  locale?: Locale
  messages?: Messages
  withTheme?: boolean
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    locale = 'en',
    messages,
    withTheme = true,
    ...options
  }: RenderWithProvidersOptions = {}
) => {
  const resolvedMessages = messages ?? catalogs[locale]

  const Wrapper = ({ children }: { children: ReactNode }) => {
    const intl = (
      <NextIntlClientProvider locale={locale} messages={resolvedMessages}>
        {children}
      </NextIntlClientProvider>
    )
    return withTheme ? <ThemeProvider>{intl}</ThemeProvider> : intl
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

export { routing }
