'use client'

import { useLocale, useTranslations } from 'next-intl'

import { useEffect, useRef, useState, useTransition } from 'react'


import { usePathname, useRouter } from 'i18n/navigation'
import { routing, type Locale } from 'i18n/routing'

import { cn } from 'utils/cn'

const flag: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  sv: '🇸🇪',
}

const label: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  sv: 'Svenska',
}

type Props = {
  placement?: 'down' | 'up'
  align?: 'left' | 'right'
}

export const LocaleSwitcher = ({
  placement = 'down',
  align = 'left',
}: Props) => {
  const t = useTranslations('common')
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current) return
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleSelect = (next: Locale) => {
    setOpen(false)
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div ref={rootRef} className="relative inline-flex shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t('switchLanguageAria')}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-fg transition-colors hover:opacity-80',
          isPending && 'opacity-70'
        )}>
        <span aria-hidden="true" suppressHydrationWarning>
          {mounted ? flag[locale] : ''}
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t('switchLanguageAria')}
          className={cn(
            'absolute z-50 min-w-40 overflow-hidden rounded-lg border border-border bg-card p-1 text-fg shadow-lg',
            placement === 'up' ? 'bottom-full mb-2' : 'top-full mt-2',
            align === 'right' ? 'right-0' : 'left-0'
          )}>
          {routing.locales.map((code) => {
            const isActive = code === locale
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSelect(code)}
                  disabled={isPending}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors',
                    isActive
                      ? 'bg-muted font-semibold'
                      : 'hover:bg-muted'
                  )}>
                  <span aria-hidden="true">{flag[code]}</span>
                  <span>{label[code]}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
