import type { Size } from 'types/index'

export default function multiplier(value: Size) {
  if (typeof value === 'number') {
    const multiplier = value * 4
    return multiplier
  } else {
    return value
  }
}
