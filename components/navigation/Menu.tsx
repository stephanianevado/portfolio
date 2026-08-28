'use client'

import { useLocale, useTranslations } from 'next-intl'

import Image from 'next/image'


import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { IconButton } from 'components/common/iconButton/IconButton'
import { Close, Link } from 'components/icons/icons'
import { LocaleSwitcher } from 'components/LocaleSwitcher'
import { Items } from 'components/navigation/Items'
import { Theme } from 'components/Theme'

type Props = {
  open: boolean
  onClose: () => void
}

export const Menu = ({ open, onClose }: Props) => {
  const { primaryWhite } = Theme.colors
  const locale = useLocale()
  const t = useTranslations('nav')

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
        <Box as="a" href={`/${locale}`}>
          <Image
            src="/images/cat-logo.svg"
            alt="svg logo"
            width={100}
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
        <IconButton
          size={10}
          name="close-menu-button"
          onClick={onClose}
          icon={Close}
          aria-label={t('closeMenu')}
        />
      </Box>
      <Box animation="fadeInLeft">
        <Items />
      </Box>
      <Box
        direction="row"
        alignItems="center"
        marginHorizontal={4}
        marginVertical={2}>
        <LocaleSwitcher />
      </Box>
      <Box marginHorizontal={3} marginVertical={4}>
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
  )
}
