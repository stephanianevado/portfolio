import { useState } from 'react'

import Image from 'next/image'

import { Box } from 'components/common/box/Box'
import { IconButton } from 'components/common/iconButton/IconButton'
import { Hamburger } from 'components/icons/icons'
import { Items } from 'components/navigation/Items'
import { Menu } from 'components/navigation/Menu'
import { Breakpoint } from 'components/Theme'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Menu open={open} onClose={() => setOpen(false)} />
      <Box
        as="header"
        direction="row"
        alignItems="center"
        width="100%"
        breakpoints={{
          [Breakpoint.MOBILE_S]: { justifyContent: 'flex-end' },
          [Breakpoint.LAPTOP]: { justifyContent: 'space-between' },
        }}>
        <Box
          as="a"
          href="/"
          breakpoints={{
            [Breakpoint.MOBILE_S]: { display: 'none' },
            [Breakpoint.LAPTOP]: { display: 'flex' },
          }}>
          <Image
            src="/images/logo.svg"
            alt="svg logo"
            width={100}
            height={40}
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
              [Breakpoint.MOBILE_S]: {
                display: 'flex',
                margin: '0px 16px',
              },
              [Breakpoint.LAPTOP]: {
                display: 'none',
              },
            }}>
            <IconButton
              name="open-menu-button"
              onClick={() => setOpen(true)}
              icon={Hamburger}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
