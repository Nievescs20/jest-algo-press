import { BF_twoNumSum, POINTERS_twoNumSum, HASH_twoNumSum } from './1-two-num-sum'
import { BF_maxProfit } from './2-max-profit'

xdescribe('two-num-sum', () => {
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
})

describe('max-profit', () => {
  let prices = [7, 1, 5, 3, 6, 4]

  test('should find max profit by brute force', () => {
    expect(BF_maxProfit(prices)).toBe(5)
  })
})
