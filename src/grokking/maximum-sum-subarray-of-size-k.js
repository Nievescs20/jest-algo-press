/**
 *
 * @link https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
 * @course Grokking the Coding Interview
 * @problem Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 *
 * The i loop is the number of
 */

const arr = [2, 1, 5, 1, 3, 2]
const k = 3

/**
 * @time K*N
 * @space
 */

function maxSubArray(k, arr) {
  let maxSum = 0,
    windowSum = 0

  for (let i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0 // reset

    for (let j = i; j < i + k; j++) {
      windowSum += arr[j]
    }
    maxSum = Math.max(windowSum, maxSum)
  }

  return maxSum
}

/**
 *
 * @time N
 * @space 1 ??
 * @walkthrough
 *   - i: left pointer, j: right pointer
 *   - loop through once (N times)
 *   - when j is >= k, subtract the lower number
 *     - this method utilizes the sum through each iteration
 * @pitfalls
 *   - arr.len - k - 1 because it's inclusive
 *   -
 */

function maxSubArrayOptimized(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    i = 0

  for (let j = 0; j < arr.length - k + 1; j++) {
    windowSum += arr[j]
    if (j >= k) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[i]
      i++
    }
  }

  return maxSum
}

const res = maxSubArray(3, arr)
const res1 = maxSubArrayOptimized(3, arr)

// console.log(res)
console.log(res1)
