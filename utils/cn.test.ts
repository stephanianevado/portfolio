import { describe, expect, it } from 'vitest'

import { cn } from 'utils/cn'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('resolves conflicting tailwind utilities to the last one', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
  })

  it('preserves non-conflicting utilities alongside a resolved conflict', () => {
    expect(cn('text-sm p-2', 'p-4')).toBe('text-sm p-4')
  })

  it('accepts conditional class objects', () => {
    expect(cn('base', { active: true, hidden: false })).toBe('base active')
  })

  it('flattens nested arrays', () => {
    expect(cn(['a', ['b', 'c']], 'd')).toBe('a b c d')
  })

  it('returns an empty string when no inputs are provided', () => {
    expect(cn()).toBe('')
  })
})
