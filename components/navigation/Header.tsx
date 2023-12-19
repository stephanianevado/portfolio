import { useState } from 'react'

import Image from 'next/image'

import { fadeInDown } from 'components/animations/animation'
import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { IconButton } from 'components/common/iconButton/IconButton'
import { Hamburger, Link } from 'components/icons/icons'
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
            width={144}
            height={40}
            style={{
              objectFit: 'fill',
              objectPosition: 'center',
              width: 'auto',
              height: 'auto',
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
            <Box
              animationName={fadeInDown}
              animationDuration="200ms"
              animationTimingFunction="ease-out">
              <Items />
            </Box>
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
              size={10}
              name="open-menu-button"
              onClick={() => setOpen(true)}
              icon={Hamburger}
              aria-label="Open navigation menu"
            />
          </Box>
        </Box>
        <Box
          animationName={fadeInDown}
          animationDuration="200ms"
          animationTimingFunction="ease-out"
          breakpoints={{
            [Breakpoint.MOBILE_S]: { display: 'none' },
            [Breakpoint.LAPTOP]: { display: 'flex' },
          }}>
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
    </>
  )
}
