import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button, Mode } from 'components/common/button/Button'

import { renderWithProviders } from 'test/helpers'

const StubIcon = () => <svg data-testid="stub-icon" />

const positionOf = (parent: Element, child: Element): number => {
  const nodes = Array.from(parent.children)
  const index = nodes.indexOf(child)
  if (index !== -1) return index
  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].contains(child)) return i
  }
  return -1
}

describe('Button', () => {
  it('renders its children in a native <button> by default', () => {
    renderWithProviders(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('renders as an anchor when as="a" is provided', () => {
    renderWithProviders(
      <Button as="a" href="/documents/cv.pdf" target="_blank">
        Resume
      </Button>
    )
    const link = screen.getByRole('link', { name: 'Resume' })
    expect(link).toHaveAttribute('href', '/documents/cv.pdf')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the icon before the label when iconPosition="left"', () => {
    renderWithProviders(
      <Button icon={StubIcon} iconPosition="left">
        <span data-testid="label">Label</span>
      </Button>
    )
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('stub-icon')
    const label = screen.getByTestId('label')
    expect(positionOf(button, icon)).toBeLessThan(positionOf(button, label))
  })

  it('renders the icon after the label when iconPosition="right"', () => {
    renderWithProviders(
      <Button icon={StubIcon} iconPosition="right">
        <span data-testid="label">Label</span>
      </Button>
    )
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('stub-icon')
    const label = screen.getByTestId('label')
    expect(positionOf(button, label)).toBeLessThan(positionOf(button, icon))
  })

  it('applies the alternative mode styling (fixed width)', () => {
    renderWithProviders(
      <Button
        mode={Mode.ALTERNATIVE}
        icon={StubIcon}
        iconPosition="left"
        color="#fff">
        Alt
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({ width: '160px' })
  })

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn()
    renderWithProviders(
      <Button onClick={onClick} disabled>
        Off
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Off' })
    expect(button).toBeDisabled()
    const user = userEvent.setup()
    await user.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('fires onClick when enabled', async () => {
    const onClick = vi.fn()
    renderWithProviders(<Button onClick={onClick}>Go</Button>)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Go' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
