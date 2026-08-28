import type { Metadata } from 'next'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import About from 'app/[locale]/about/About'

type Params = Promise<{ locale: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.about' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        es: '/es/about',
        sv: '/sv/about',
      },
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <About />
}
