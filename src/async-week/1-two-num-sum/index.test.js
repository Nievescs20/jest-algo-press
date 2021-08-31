import { BF_twoNumSum, POINTERS_twoNumSum, HASH_twoNumSum, sorting } from '.'

describe('1 two-num-sum', () => {
  let array = [2, 4, 1, 3, 5]
  let target = 7

  afterEach(() => {
    array = [2, 4, 1, 3, 5]
  })

  test('should find sum by brute force', () => {
    expect(BF_twoNumSum(array, target)).toBe(true)
  })

  test('should find sum by pointers', () => {
    expect(POINTERS_twoNumSum(array, target)).toBe(true)
  })

  test('should find sum by hash method', () => {
    expect(HASH_twoNumSum(array, target)).toBe(true)
  })

  test('should sort by built in', () => {
    expect(sorting(array)).toEqual([1, 2, 3, 4, 5])
    expect(sorting([1, 100, 2])).toEqual([1, 2, 100])
  })
})
