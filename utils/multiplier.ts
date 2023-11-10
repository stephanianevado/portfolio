export default function multiplier(value: string | number) {
  if (typeof value === 'number') {
    const multiplier = value * 4
    return `${multiplier}px `
  } else if (typeof value === 'string') {
    return value
  } else {
    return null
  }
}
