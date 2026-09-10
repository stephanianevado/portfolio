import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const replaceMock = vi.hoisted(() => vi.fn())
const pushMock = vi.hoisted(() => vi.fn())
const pathnameMock = vi.hoisted(() => vi.fn<() => string>(() => '/'))

vi.mock('i18n/navigation', () => ({
  usePathname: () => pathnameMock(),
  useRouter: () => ({
    replace: replaceMock,
    push: pushMock,
  }),
}))

import { LocaleSwitcher } from 'components/LocaleSwitcher'

import { renderWithProviders } from 'test/helpers'

describe('LocaleSwitcher', () => {
  beforeEach(() => {
    replaceMock.mockReset()
    pushMock.mockReset()
    pathnameMock.mockReset()
    pathnameMock.mockReturnValue('/skills')
  })

  it('renders the current locale flag on the trigger button', async () => {
    renderWithProviders(<LocaleSwitcher />, { locale: 'es' })
    const trigger = screen.getByRole('button', { name: /cambiar idioma/i })
    expect(trigger.textContent).toContain('🇪🇸')
  })

  it('opens a listbox on click revealing all locales', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LocaleSwitcher />)
    const trigger = screen.getByRole('button', { name: /switch language/i })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /english/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /español/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /svenska/i })).toBeInTheDocument()
  })

  it('marks the active locale with aria-selected', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LocaleSwitcher />, { locale: 'sv' })
    await user.click(screen.getByRole('button', { name: /byt språk/i }))
    const active = screen.getByRole('option', { name: /svenska/i })
    expect(active).toHaveAttribute('aria-selected', 'true')
    const inactive = screen.getByRole('option', { name: /english/i })
    expect(inactive).toHaveAttribute('aria-selected', 'false')
  })

  it('calls router.replace with the new locale when a different option is chosen', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LocaleSwitcher />, { locale: 'en' })
    await user.click(screen.getByRole('button', { name: /switch language/i }))
    await user.click(screen.getByRole('option', { name: /español/i }))
    expect(replaceMock).toHaveBeenCalledWith('/skills', { locale: 'es' })
  })

  it('does not call router.replace when the active locale is re-selected', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LocaleSwitcher />, { locale: 'en' })
    await user.click(screen.getByRole('button', { name: /switch language/i }))
    await user.click(screen.getByRole('option', { name: /english/i }))
    expect(replaceMock).not.toHaveBeenCalled()
  })

  it('closes the listbox when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LocaleSwitcher />)
    await user.click(screen.getByRole('button', { name: /switch language/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
