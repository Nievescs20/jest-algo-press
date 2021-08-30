//#region snippet
const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let hasSorted = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        hasSorted = true
      }
    }
    if (!hasSorted) return arr
  }
  return arr
}
//#endregion snippet

export const bubbleSortMock = (arr, cb) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let hasSorted = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      cb() // mocking purpose?
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        hasSorted = true
      }
    }
    if (!hasSorted) return arr
  }
  return arr
}

export default bubbleSort
