'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const STORAGE_KEY = 'theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

const readSystemPreference = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const resolveTheme = (theme: Theme): ResolvedTheme =>
  theme === 'system' ? readSystemPreference() : theme

const applyTheme = (resolved: ResolvedTheme): void => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

const readStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }
  return 'system'
}

const readInitialTheme = (): { theme: Theme; resolved: ResolvedTheme } => {
  const theme = readStoredTheme()
  return { theme, resolved: resolveTheme(theme) }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [{ theme, resolvedTheme }, setState] = useState<{
    theme: Theme
    resolvedTheme: ResolvedTheme
  }>(() => {
    if (typeof window === 'undefined') {
      return { theme: 'system', resolvedTheme: 'light' }
    }
    const initial = readInitialTheme()
    applyTheme(initial.resolved)
    return { theme: initial.theme, resolvedTheme: initial.resolved }
  })

  useEffect(() => {
    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      const resolved = resolveTheme('system')
      setState({ theme: 'system', resolvedTheme: resolved })
      applyTheme(resolved)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    const resolved = resolveTheme(next)
    setState({ theme: next, resolvedTheme: resolved })
    applyTheme(resolved)
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
