//#region sol
const pairWithTargetSum = (arr, tar) => {
  let i = 0,
    j = arr.length - 1
  while (i < j) {
    const sum = arr[i] + arr[j]
    if (sum === tar) return [i, j]
    if (sum > tar) j--
    else i++
  }
  return [-1, -1]
}
//#endregion sol

//#region hash
export const HASH_pairWithTargetSum = (arr, tar) => {
  const nums = {}
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (tar - n in nums) return [nums[tar - n], i]
    nums[arr[i]] = i
  }
  return [-1, -1]
}
//#endregion hash

export default pairWithTargetSum
