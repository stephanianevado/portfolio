import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

const pathnameMock = vi.hoisted(() => vi.fn<() => string>(() => '/'))

vi.mock('i18n/navigation', () => ({
  usePathname: () => pathnameMock(),
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
}))

import { Menu } from 'components/navigation/Menu'

import { renderWithProviders } from 'test/helpers'

describe('Menu', () => {
  it('renders nothing when closed', () => {
    const { container } = renderWithProviders(
      <Menu open={false} onClose={() => {}} />
    )
    expect(container.textContent).toBe('')
  })

  it('renders navigation items, LocaleSwitcher, and Resume when open', () => {
    renderWithProviders(<Menu open onClose={() => {}} />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /switch language/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument()
  })

  it('invokes onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    renderWithProviders(<Menu open onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close navigation/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('links the Resume button to the CV pdf', () => {
    renderWithProviders(<Menu open onClose={() => {}} />)
    const resume = screen.getByRole('link', { name: /resume/i })
    expect(resume).toHaveAttribute('href', '/documents/cv.pdf')
    expect(resume).toHaveAttribute('target', '_blank')
  })
})
