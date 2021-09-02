import multiplicativePersistence, { product, recursive } from '.'

describe('multiplicative persistence', () => {
  test('product gives product of digits', () => {
    expect(product(10)).toEqual(0)
    expect(product(237)).toEqual(42)
    expect(product(57)).toEqual(35)
  })

  test('multiplicative persistence gives correct output', () => {
    expect(multiplicativePersistence(39)).toBe(3)
    expect(multiplicativePersistence(111)).toBe(1)
    expect(multiplicativePersistence(1)).toBe(0)
  })

  test('multiplicative persistence recurisve works', () => {
    expect(recursive(39)).toBe(3)
    expect(recursive(111)).toBe(1)
    expect(recursive(1)).toBe(0)
  })
})
