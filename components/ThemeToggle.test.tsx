import { act, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { ThemeToggle } from 'components/ThemeToggle'

import { renderWithProviders } from 'test/helpers'

const getToggle = () =>
  screen.getByRole('button', { name: /switch theme/i })

describe('ThemeToggle', () => {
  it('renders with the default system state', async () => {
    renderWithProviders(<ThemeToggle />)
    const toggle = getToggle()
    await waitFor(() =>
      expect(toggle).toHaveAccessibleName(/currently system/i)
    )
    expect(toggle.textContent).toContain('🖥️')
  })

  it('cycles system → light → dark → system on repeated clicks', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />)
    const toggle = getToggle()
    await waitFor(() => expect(toggle).toHaveAccessibleName(/currently system/i))

    await user.click(toggle)
    await waitFor(() => expect(toggle).toHaveAccessibleName(/currently light/i))
    expect(toggle.textContent).toContain('☀️')

    await user.click(toggle)
    await waitFor(() => expect(toggle).toHaveAccessibleName(/currently dark/i))
    expect(toggle.textContent).toContain('🌙')

    await user.click(toggle)
    await waitFor(() =>
      expect(toggle).toHaveAccessibleName(/currently system/i)
    )
    expect(toggle.textContent).toContain('🖥️')
  })

  it('persists the selected theme to localStorage', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />)
    const toggle = getToggle()
    await waitFor(() => expect(toggle).toHaveAccessibleName(/currently system/i))
    await user.click(toggle)
    expect(window.localStorage.getItem('theme')).toBe('light')
    await user.click(toggle)
    expect(window.localStorage.getItem('theme')).toBe('dark')
  })

  it('adds .dark to <html> when the theme resolves to dark', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />)
    const toggle = getToggle()
    await waitFor(() => expect(toggle).toHaveAccessibleName(/currently system/i))
    await user.click(toggle) // -> light
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle) // -> dark
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle) // -> system (matchMedia stub says light)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('starts in dark mode when localStorage.theme is preset to dark', async () => {
    window.localStorage.setItem('theme', 'dark')
    await act(async () => {
      renderWithProviders(<ThemeToggle />)
    })
    const toggle = getToggle()
    await waitFor(() => expect(toggle).toHaveAccessibleName(/currently dark/i))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
