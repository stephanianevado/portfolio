'use client'

import { useTranslations } from 'next-intl'

import { useEffect, useState } from 'react'


import { useTheme, type Theme } from 'components/ThemeProvider'

const nextTheme = (theme: Theme): Theme => {
  if (theme === 'system') return 'light'
  if (theme === 'light') return 'dark'
  return 'system'
}

const themeKey: Record<Theme, 'themeSystem' | 'themeLight' | 'themeDark'> = {
  system: 'themeSystem',
  light: 'themeLight',
  dark: 'themeDark',
}

const icon: Record<Theme, string> = {
  system: '🖥️',
  light: '☀️',
  dark: '🌙',
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme(theme))}
      aria-label={
        mounted
          ? t('switchThemeAriaMounted', { theme: t(themeKey[theme]) })
          : t('switchThemeAria')
      }
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-fg transition-colors hover:opacity-80">
      <span aria-hidden="true" suppressHydrationWarning>
        {mounted ? icon[theme] : ''}
      </span>
    </button>
  )
}
