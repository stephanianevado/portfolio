import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Accordion } from 'components/Accordion'

import { renderWithProviders } from 'test/helpers'

describe('Accordion', () => {
  it('shows the description in the closed state and hides the text', () => {
    renderWithProviders(
      <Accordion
        title="Programming languages:"
        description="Short description."
        text="Full expanded text."
      />
    )
    expect(screen.getByText('Programming languages:')).toBeInTheDocument()
    expect(screen.getByText('Short description.')).toBeInTheDocument()
    expect(screen.queryByText('Full expanded text.')).not.toBeInTheDocument()
  })

  it('opens on click, revealing text and hiding the description', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <Accordion
        title="Programming languages:"
        description="Short description."
        text="Full expanded text."
      />
    )
    await user.click(screen.getByText('Programming languages:'))
    expect(screen.getByText('Full expanded text.')).toBeInTheDocument()
    expect(screen.queryByText('Short description.')).not.toBeInTheDocument()
  })

  it('closes on a second click, returning to the closed state', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <Accordion
        title="Databases:"
        description="Description text."
        text="Full text."
      />
    )
    const title = screen.getByText('Databases:')
    await user.click(title)
    expect(screen.getByText('Full text.')).toBeInTheDocument()
    await user.click(title)
    expect(screen.getByText('Description text.')).toBeInTheDocument()
    expect(screen.queryByText('Full text.')).not.toBeInTheDocument()
  })

  it('renders children alongside the expanded text when open', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <Accordion title="Tools:" description="Short." text="Long ">
        <span>Extra content</span>
      </Accordion>
    )
    await user.click(screen.getByText('Tools:'))
    expect(screen.getByText('Extra content')).toBeInTheDocument()
  })
})
