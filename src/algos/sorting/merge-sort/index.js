import { blue } from 'chalk'

/**
 * given an array, merge it
 *
 * 1. Recursion
 *
 * 2. merge helper array
 *
 */

//#region snippet
const mergeArr = (arr1, arr2) => {
  let i = 0,
    j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j])
      j++
    } else {
      arr.push(arr1[i])
      i++
    }
  }

  if (i === arr1.length) {
    return [...arr, ...arr2.slice(j)]
  } else {
    return [...arr, ...arr1.slice(i)]
  }
}
//#endregion snippet

export const half = arr => {
  const half = arr.length / 2
  return half
}

export const sliceHalf = (arr, half) => {
  const A = arr.slice(0, half)
  const B = arr.slice(half)
  return [A.length, B.length]
}

const myMock = jest.fn()
// https://jestjs.io/docs/mock-functions

export const recursiveSplit = (arr, cb = () => {}) => {
  // given an array, recursively
  cb()

  if (arr.length <= 1) return arr

  const half = Math.floor(arr.length / 2)

  const left = recursiveSplit(arr.slice(0, half), cb)
  const right = recursiveSplit(arr.slice(half), cb)
  return []
}

export const mergeArray = (arr1, arr2) => {
  const arr = []
  let i = 0,
    j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j])
      j++
    } else {
      arr.push(arr1[i])
      i++
    }
  }

  if (i === arr1.length) {
    return [...arr, ...arr2.slice(j)]
  } else {
    return [...arr, ...arr1.slice(i)]
  }

  // if (i === arr1.length) {
  //   for (; j < arr2.length; j++) {
  //     arr.push(arr2[j])
  //   }
  // } else {
  //   for (; i < arr1.length; i++) {
  //     arr.push(arr1[i])
  //   }
  // }
  // return arr
}

//#region merge
export const JEST_mergeSort = arr => {
  if (arr.length <= 1) return arr

  const half = Math.floor(arr.length / 2)
  const left = arr.slice(0, half)
  const right = arr.slice(half, arr.length)

  return mergeArray(left, right)
}
//#endregion merge

export default mergeArr
