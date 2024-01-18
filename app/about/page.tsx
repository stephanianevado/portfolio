import type { Metadata } from 'next'

import About from 'app/about/About'

export const metadata: Metadata = {
  title: "Stephania Nevado's portfolio | About section",
  description: 'In this section you get to know me better',
}

export default function Page() {
  return <About />
}
