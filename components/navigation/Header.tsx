import { useState } from 'react'

import Image from 'next/image'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { HamburgerIcon } from 'components/icons'
import { Items } from 'components/navigation/Items'
import { Menu } from 'components/navigation/Menu'

import Breakpoint from 'types/index'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Menu open={open} onClose={() => setOpen(false)} />
      <Box
        as="header"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%">
        <Box as="a" href="/">
          <Image
            src="/logoportfolio.svg"
            alt="logo SVG portfolio"
            width={100}
            height={75.97}
            style={{
              objectFit: 'fill',
              objectPosition: 'center',
              width: 'auto',
            }}
            priority
          />
        </Box>
        <Box>
          <Box
            breakpoints={{
              [Breakpoint.MOBILE_S]: { display: 'none' },
              [Breakpoint.LAPTOP]: { display: 'flex' },
            }}>
            <Items />
          </Box>
          <Box
            breakpoints={{
              [Breakpoint.MOBILE_S]: { display: 'flex' },
              [Breakpoint.LAPTOP]: { display: 'none' },
            }}>
            <Button name="open-menu-button" onClick={() => setOpen(true)}>
              <HamburgerIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
