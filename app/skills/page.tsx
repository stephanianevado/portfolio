import type { Metadata } from 'next'

import Skills from 'app/skills/Skills'

export const metadata: Metadata = {
  title: "Stephania Nevado's portfolio | Skills section",
  description: 'In this section you get to know some of my skills',
}

export default function Page() {
  return <Skills />
}
