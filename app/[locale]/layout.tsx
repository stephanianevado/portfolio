import type { Metadata } from 'next'


import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { notFound } from 'next/navigation'

import { ThemeProvider } from 'components/ThemeProvider'

import { routing } from 'i18n/routing'

type Params = Promise<{ locale: string }>

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.home' })
  return {
    title: t('title'),
    description: t('description'),
    icons: '/images/favicon.svg',
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlClientProvider>
  )
}
