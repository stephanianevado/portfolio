import { Box } from 'components/common/box/Box'
import { Footer } from 'components/navigation/Footer'
import { Header } from 'components/navigation/Header'
import { Breakpoint, Theme } from 'components/Theme'
import type { Color } from 'types/index'

const { primaryPink } = Theme.colors

type Props = {
  bg?: Color
  children: React.ReactNode
}

export default function AppWrapper({ children, bg = primaryPink }: Props) {
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      bg={bg}
      height="100vh"
      breakpoints={{
        [MOBILE_S]: { margin: '24px 16px' },
        [LAPTOP]: { margin: '24px 80px' },
        [DESKTOP]: { margin: '24px 640px' },
      }}>
      <Header />
      <Box as="main" id="main" grow={1} bg={bg}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
