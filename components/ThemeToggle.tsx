'use client'

import { useEffect, useState } from 'react'

import { useTheme, type Theme } from 'components/ThemeProvider'

const nextTheme = (theme: Theme): Theme => {
  if (theme === 'system') return 'light'
  if (theme === 'light') return 'dark'
  return 'system'
}

const label: Record<Theme, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
}

const icon: Record<Theme, string> = {
  system: '🖥️',
  light: '☀️',
  dark: '🌙',
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme(theme))}
      aria-label={
        mounted ? `Switch theme (currently ${label[theme]})` : 'Switch theme'
      }
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-fg transition-colors hover:bg-muted">
      <span aria-hidden="true" suppressHydrationWarning>
        {mounted ? icon[theme] : ''}
      </span>
    </button>
  )
}
