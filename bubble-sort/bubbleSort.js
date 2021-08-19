export default function bubbleSort(arr) {
  // bubble bubble
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // do something here with i and j
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        console.log(arr)
      }
    }
  }
  return arr
}
