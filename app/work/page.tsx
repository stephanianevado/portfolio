import type { Metadata } from 'next'

import Work from 'app/work/Work'

export const metadata: Metadata = {
  title: "Stephania Nevado's portfolio | Work section",
  description: 'In this section you get to know my work',
}

export default function Page() {
  return <Work />
}
