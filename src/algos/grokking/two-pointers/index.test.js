import pairWithTargetSum, { HASH_pairWithTargetSum } from './pair-with-target-sum'
import noRepeatSubstring from './no-repeat-substring'
import removeDuplicates from './remove-duplicates'

describe('pair-with-target-sum', () => {
  let arr = [1, 2, 3, 4, 6]
  test('returns the indices', () => {
    expect(pairWithTargetSum(arr, 6)).toEqual([1, 3])
  })

  test('returns the indices', () => {
    expect(HASH_pairWithTargetSum(arr, 6)).toEqual([1, 3])
  })
})

describe('remove-duplicates', () => {
  let arr = [2, 3, 3, 3, 6, 9, 9]

  test('should remove all duplicates', () => {
    expect(removeDuplicates(arr)).toEqual(3)
  })
})

describe('no repeat substring', () => {
  test('should do something', () => {
    let str = 'aabc'
    let str1 = 'abbbb'

    expect(noRepeatSubstring(str)).toBe(3)
    expect(noRepeatSubstring(str1)).toBe(2)
  })
})
