// let arr = [5, 4, 3, 2, 1]
// let arr1 = [1, 2, 3, 5, 4]

//#region snippet
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j < 0 || arr[j] < arr[j - 1]) {
      ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  }
}
//#endregion snippet

// insertionSort(arr)
// insertionSort(arr1)

// console.log(`🟢  arr `, arr)
// console.log(`🟢  arr1 `, arr1)

export default insertionSort
