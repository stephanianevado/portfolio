import { screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const pathnameMock = vi.hoisted(() => vi.fn<() => string>(() => '/'))

vi.mock('i18n/navigation', () => ({
  usePathname: () => pathnameMock(),
}))

import { Items } from 'components/navigation/Items'

import { renderWithProviders } from 'test/helpers'

describe('Items', () => {
  beforeEach(() => {
    pathnameMock.mockReset()
    pathnameMock.mockReturnValue('/')
  })

  it('renders one link per navigation item', () => {
    renderWithProviders(<Items />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('prefixes hrefs with the active locale', () => {
    renderWithProviders(<Items />, { locale: 'es' })
    expect(screen.getByText('Sobre mí').closest('a')).toHaveAttribute(
      'href',
      '/es/about'
    )
    expect(screen.getByText('Habilidades').closest('a')).toHaveAttribute(
      'href',
      '/es/skills'
    )
  })

  it('marks the current route as active (underlined)', () => {
    pathnameMock.mockReturnValue('/skills')
    renderWithProviders(<Items />)
    const active = screen.getByText('Skills')
    expect(active).toHaveStyle({ textDecoration: 'underline' })
  })

  it('does not underline routes that are not the current path', () => {
    pathnameMock.mockReturnValue('/skills')
    renderWithProviders(<Items />)
    const inactive = screen.getByText('About')
    expect(inactive).toHaveStyle({ textDecoration: 'none' })
  })
})
