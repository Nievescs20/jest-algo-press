/**
 * @title Two Num Sum
 * @prompt Given an array of integers and a target number, return true if any 2 elements add up to the target. Return false otherwise.
 * @gist
 * @tags array
 */

/**
 *
 * @time O(N^2)
 * @space O(1) #TODO check
 * @approach
 * - set up 2 nested loops
 * - if a[i] + a[j] == target, return true
 * - return false at end
 */

export const BF_twoNumSum = (arr, tar) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar) return true
    }
  }
  return false
}

/**
 * @time O(log N)
 * @space O(1) #TODO check
 * @approach
 * - Sort array - O(log N) time
 * - Loop through array O(N) time
 * - set pointers: left (i) and right (j)
 *  - if >, increase left, if <, increase right, if = return true
 * - return false at end of loop
 */

export const POINTERS_twoNumSum = (arr, tar) => {
  arr.sort()
  let i = 0,
    j = arr.length - 1
  while (i < j) {
    const sum = arr[i] + arr[j]
    if (sum === tar) return true
    if (sum > tar) j--
    if (sum < tar) i++
  }
  return false
}

/**
 * @time O(N)
 * @space O(N)
 * @approach
 * - create a hash to store complements
 * - loop through array and
 *  - if ele in hash, return true
 *  - otherwise set complement as key
 * - return false
 * @note
 * - Key in Obj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
 */

export const HASH_twoNumSum = (arr, tar) => {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hash) return true
    hash[tar - arr[i]] = true
  }
  return false
}
