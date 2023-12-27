import Image from 'next/image'

import { fadeInLeft } from 'components/animations/animation'
import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { IconButton } from 'components/common/iconButton/IconButton'
import { Close, Link } from 'components/icons/icons'
import { Items } from 'components/navigation/Items'
import { Theme } from 'components/Theme'

type Props = {
  open: boolean
  onClose: () => void
}

export const Menu = ({ open, onClose }: Props) => {
  const { primaryWhite } = Theme.colors

  if (!open) {
    return null
  }

  return (
    <Box
      bg={primaryWhite}
      display="flex"
      position="fixed"
      maxHeight="100%"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      zIndex={1}>
      <Box
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop={6}
        marginHorizontal={4}>
        <Box as="a" href="/">
          <Image
            src="/images/cat-logo.svg"
            alt="svg logo"
            width={100}
            height={40}
            style={{
              objectFit: 'fill',
              objectPosition: 'center',
              width: 'auto',
              height: 'auto'
            }}
            priority
          />
        </Box>
        <IconButton
          size={10}
          name="close-menu-button"
          onClick={onClose}
          icon={Close}
          aria-label="Close navigation menu"
        />
      </Box>
      <Box
        animationName={fadeInLeft}
        animationDuration="200ms"
        animationTimingFunction="ease-out">
        <Items />
      </Box>
      <Box marginHorizontal={3} marginVertical={4}>
        <Button
          as="a"
          href="/documents/cv.pdf"
          target="_blank"
          icon={Link}
          iconPosition="left">
          Resume
        </Button>
      </Box>
    </Box>
  )
}
