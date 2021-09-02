//#region sol
const removeDuplicates = arr => {
  let i = -1

  for (let j = 0; j < arr.length; j++) {
    const element = arr[j]
    if (arr[i] !== element) {
      i++
      arr[i] = element
    }
  }

  return i
}
//#endregion sol

export default removeDuplicates
