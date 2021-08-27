import bubbleSort from './bubbleSort'

describe('bubble sort', () => {
  let arr = [4, 3, 2, 1]
  test('should sort', () => {
    const sorted = bubbleSort(arr)
    console.log(sorted)
    expect(sorted).toEqual([1, 2, 3, 4])
  })
})
