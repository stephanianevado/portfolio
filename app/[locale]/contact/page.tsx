import type { Metadata } from 'next'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import Contact from 'app/[locale]/contact/Contact'

type Params = Promise<{ locale: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.contact' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        es: '/es/contact',
        sv: '/sv/contact',
      },
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Contact />
}
