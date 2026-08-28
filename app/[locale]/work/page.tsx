import type { Metadata } from 'next'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import Work from 'app/[locale]/work/Work'

type Params = Promise<{ locale: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.work' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/work`,
      languages: {
        en: '/en/work',
        es: '/es/work',
        sv: '/sv/work',
      },
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Work />
}
