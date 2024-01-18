import type { Metadata } from 'next'

import Contact from 'app/contact/Contact'

export const metadata: Metadata = {
  title: "Stephania Nevado's portfolio | Contact section",
  description: 'If you are interested just contact me',
}

export default function Page() {
  return <Contact />
}
