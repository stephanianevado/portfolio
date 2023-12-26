export default function multiplier(value: string | number | undefined) {
  if (typeof value === 'number') {
    const multiplier = value * 4
    return `${multiplier}px `
  } else if (typeof value === 'string') {
    return value
  } else {
    return null
  }
}
