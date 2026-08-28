import type { Metadata } from 'next'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import Home from 'app/[locale]/Home'

type Params = Promise<{ locale: string }>

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
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        es: '/es',
        sv: '/sv',
      },
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Home />
}
