import type { Metadata } from 'next'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import Skills from 'app/[locale]/skills/Skills'

type Params = Promise<{ locale: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.skills' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/skills`,
      languages: {
        en: '/en/skills',
        es: '/es/skills',
        sv: '/sv/skills',
      },
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Skills />
}
