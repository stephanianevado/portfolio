import { describe, expect, it } from 'vitest'

import { buildStyle, px } from 'utils/buildStyle'

describe('px', () => {
  it('multiplies numbers by the 4px base unit', () => {
    expect(px(0)).toBe('0px')
    expect(px(1)).toBe('4px')
    expect(px(4)).toBe('16px')
    expect(px(10)).toBe('40px')
  })

  it('passes through raw strings unchanged', () => {
    expect(px('50%')).toBe('50%')
    expect(px('100vh')).toBe('100vh')
    expect(px('auto')).toBe('auto')
  })

  it('returns undefined when given undefined', () => {
    expect(px(undefined)).toBeUndefined()
  })
})

describe('buildStyle', () => {
  it('returns an empty style object when no props are set', () => {
    expect(buildStyle({})).toEqual({})
  })

  it('maps direction to flexDirection', () => {
    expect(buildStyle({ direction: 'row' })).toEqual({ flexDirection: 'row' })
  })

  it('maps variant to fontSize and subStyle to fontWeight', () => {
    expect(buildStyle({ variant: '20px', subStyle: 600 })).toEqual({
      fontSize: '20px',
      fontWeight: 600,
    })
  })

  it('maps bg to backgroundColor and align to textAlign', () => {
    expect(buildStyle({ bg: '#f00', align: 'center' })).toEqual({
      backgroundColor: '#f00',
      textAlign: 'center',
    })
  })

  it('applies the 4px multiplier to size props', () => {
    expect(buildStyle({ padding: 2, marginTop: 4, gap: 1 })).toEqual({
      padding: '8px',
      marginTop: '16px',
      gap: '4px',
    })
  })

  it('expands paddingVertical / paddingHorizontal into per-side values', () => {
    expect(buildStyle({ paddingVertical: 2, paddingHorizontal: 4 })).toEqual({
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '16px',
      paddingRight: '16px',
    })
  })

  it('expands marginVertical / marginHorizontal into per-side values', () => {
    expect(buildStyle({ marginVertical: 3, marginHorizontal: 5 })).toEqual({
      marginTop: '12px',
      marginBottom: '12px',
      marginLeft: '20px',
      marginRight: '20px',
    })
  })

  it('maps animation names to keyframe shorthands', () => {
    expect(buildStyle({ animation: 'fadeInRight' })).toEqual({
      animation: 'fade-in-right 200ms ease-out',
    })
    expect(buildStyle({ animation: 'fadeInUp' })).toEqual({
      animation: 'fade-in-up 200ms ease-out',
    })
  })

  it('passes unknown animation strings through unchanged', () => {
    expect(buildStyle({ animation: 'wiggle 1s' })).toEqual({
      animation: 'wiggle 1s',
    })
  })

  it('omits undefined values from the style object', () => {
    const result = buildStyle({ bg: undefined, color: '#000' })
    expect(result).toEqual({ color: '#000' })
    expect(Object.prototype.hasOwnProperty.call(result, 'backgroundColor')).toBe(
      false
    )
  })

  it('maps grid columns and rows to gridTemplate*', () => {
    expect(
      buildStyle({ columns: 'repeat(3, 1fr)', rows: '1fr 2fr' })
    ).toEqual({
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '1fr 2fr',
    })
  })
})
