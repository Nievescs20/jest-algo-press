import mergeArr, { half, sliceHalf, recursiveSplit, JEST_mergeSort } from '.'
import chalk from 'chalk'

// global variable accessible by describe block

describe('Merge sort...', () => {
  let arr = [1, 2, 3]

  test('returns something', () => {
    expect(half(arr)).toBe(1.5)
  })

  test('should floor non-integer for slice methods', () => {
    // arr.slice(0, 1.5) is the same as arr.slice(0, 1)
    const res = sliceHalf(arr, 1.5)
    expect(res[0]).toBe(1)
    expect(res[1]).toBe(2)
  })

  test('should recursively split arrays', () => {
    // expect(recursiveSplit([]).length).toBe(0)
    expect(recursiveSplit(arr).length).toBe(0)
  })

  test('should recurse down correct number of times', () => {
    const mB = jest.fn()
    recursiveSplit([], mB)
    expect(mB.mock.calls.length).toBe(1)

    const mA = jest.fn()
    recursiveSplit([1, 2], mA)
    expect(mA.mock.calls.length).toBe(3)
  })

  test('should mergeArray', () => {
    const a = mergeArray([0, 1, 2], [-1, 1, 2])
    expect(a).toEqual([-1, 0, 1, 1, 2, 2])

    const b = mergeArray([], [1])
    expect(b).toEqual([1])

    const c = mergeArray([1, 1, 1], [1])
    expect(c).toEqual([1, 1, 1, 1])

    const d = mergeArray([-2, -1, 2, 3], [-2, 0, 1])
    expect(d).toEqual([-2, -2, -1, 0, 1, 2, 3])
  })

  test('should merge array (final)', () => {
    const mergeSorted = JEST_mergeSort([-1, 2, -2, 0, 1])
    expect(mergeSorted).toEqual([-2, -1, 0, 1, 2])
  })
})

// test('should bail early if already sorted', () => {
//   bubbleSortMock([1, 2, 3, 4, 5], myMock)

//   // cb runs 4 times: one iteration, and then returns
//   expect(myMock.mock.calls.length).toBe(4)
// })
