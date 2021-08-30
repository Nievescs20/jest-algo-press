import bubbleSort, { bubbleSortMock } from '.'

const myMock = jest.fn()
// const a = new myMock()
// https://jestjs.io/docs/mock-functions

describe('bubble sort', () => {
  let arr = [4, 3, 2, 1, 5]

  afterEach(() => {
    arr = [4, 3, 2, 1, 5]
  })

  test('should sort', () => {
    const sorted = bubbleSort(arr)
    expect(sorted).toEqual([1, 2, 3, 4, 5])
  })

  test('should bail early if already sorted', () => {
    bubbleSortMock([1, 2, 3, 4, 5], myMock)
    
    // cb runs 4 times: one iteration, and then returns
    expect(myMock.mock.calls.length).toBe(4)
  })
})
