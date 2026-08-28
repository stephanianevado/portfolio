'use client'

import { useLocale, useTranslations } from 'next-intl'

import { useState } from 'react'

import Image from 'next/image'


import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { IconButton } from 'components/common/iconButton/IconButton'
import { Hamburger, Link } from 'components/icons/icons'
import { LocaleSwitcher } from 'components/LocaleSwitcher'
import { Items } from 'components/navigation/Items'
import { Menu } from 'components/navigation/Menu'
import { Breakpoint } from 'components/Theme'
import { ThemeToggle } from 'components/ThemeToggle'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations('nav')
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint
  return (
    <>
      <Menu open={open} onClose={() => setOpen(false)} />
      <Box
        as="header"
        direction="row"
        alignItems="center"
        breakpoints={{
          [MOBILE_S]: { margin: '24px 16px', justifyContent: 'flex-end' },
          [LAPTOP]: { margin: '24px 80px', justifyContent: 'space-between' },
          [DESKTOP]: { margin: '24px 640px', justifyContent: 'space-between' },
        }}>
        <Box
          as="a"
          href={`/${locale}`}
          breakpoints={{
            [MOBILE_S]: { display: 'none' },
            [LAPTOP]: { display: 'flex' },
          }}>
          <Image
            src="/images/logo.png"
            alt="svg logo"
            width={144}
            height={40}
            className="portfolio-logo"
            style={{
              objectFit: 'fill',
              objectPosition: 'center',
              width: 'auto',
              height: 'auto',
            }}
            priority
          />
        </Box>

        <Box
          breakpoints={{
            [MOBILE_S]: { display: 'none' },
            [LAPTOP]: { display: 'flex' },
          }}>
          <Box animation="fadeInDown">
            <Items />
          </Box>
        </Box>

        <Box
          direction="row"
          alignItems="center"
          breakpoints={{
            [MOBILE_S]: { display: 'flex' },
            [LAPTOP]: { display: 'none' },
          }}>
          <IconButton
            size={10}
            name="open-menu-button"
            onClick={() => setOpen(true)}
            icon={Hamburger}
            aria-label={t('openMenu')}
          />
        </Box>

        <Box
          direction="row"
          alignItems="center"
          animation="fadeInDown"
          breakpoints={{
            [MOBILE_S]: { display: 'none' },
            [LAPTOP]: { display: 'flex' },
          }}>
          <ThemeToggle />
          <Box width={4} />
          <LocaleSwitcher />
          <Box width={4} />
          <Button
            as="a"
            href="/documents/cv.pdf"
            target="_blank"
            icon={Link}
            iconPosition="left">
            {t('resume')}
          </Button>
        </Box>
      </Box>
    </>
  )
}
