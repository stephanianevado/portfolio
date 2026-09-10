import { describe, expect, it } from 'vitest'

import enMessages from 'messages/en.json'
import esMessages from 'messages/es.json'
import svMessages from 'messages/sv.json'

const collectKeys = (value: unknown, prefix = ''): string[] => {
  if (
    value === null ||
    typeof value !== 'object' ||
    Array.isArray(value)
  ) {
    return [prefix]
  }
  return Object.entries(value as Record<string, unknown>).flatMap(([key, v]) =>
    collectKeys(v, prefix ? `${prefix}.${key}` : key)
  )
}

const enKeys = collectKeys(enMessages).sort()

describe('i18n message-key parity', () => {
  it.each([
    ['es', esMessages],
    ['sv', svMessages],
  ] as const)(
    'messages/%s.json has the same keys as messages/en.json',
    (_locale, catalog) => {
      const keys = collectKeys(catalog).sort()
      expect(keys).toEqual(enKeys)
    }
  )
})
