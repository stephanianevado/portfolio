import { Box } from 'components/common/box/Box'
import { Footer } from 'components/navigation/Footer'
import { Header } from 'components/navigation/Header'
import { Breakpoint } from 'components/Theme'

type Props = {
  children: React.ReactNode
}

export default function AppWrapper({ children }: Props) {
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      height="100%"
      breakpoints={{
        [MOBILE_S]: { margin: '24px 16px' },
        [LAPTOP]: { margin: '24px 80px' },
        [DESKTOP]: { margin: '24px 640px' },
      }}>
      <Header />
      <Box as="main" id="main" grow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
