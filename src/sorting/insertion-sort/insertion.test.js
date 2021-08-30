import insertionSort from '.'

describe('insertion sort', () => {
  let array = [5, 4, 3, 2, 1]
  let sortedArray = [1, 2, 3, 4, 5]
  let nearlySortedArray = [1, 2, 4, 3, 5]

  afterEach(() => {
    // TODO find a better way to reset values of array
    array = [5, 4, 3, 2, 1]
    sortedArray = [1, 2, 3, 4, 5]
    nearlySortedArray = [1, 2, 4, 3, 5]
  })

  test('should sort via insertion', () => {
    insertionSort(array)
    expect(array).toEqual([1, 2, 3, 4, 5])

    insertionSort(sortedArray)
    expect(sortedArray).toEqual([1, 2, 3, 4, 5])
    // .toEqual(array.slice().sort())
    insertionSort(nearlySortedArray)
    expect(nearlySortedArray).toEqual([1, 2, 3, 4, 5])
  })
  

})
