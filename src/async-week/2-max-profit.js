/**
 * @title Max Profit
 * @prompt Find Max profit
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

export const BF_maxProfit = arr => {
  let maxprofit = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      const profit = arr[j] - arr[i]
      if (profit > maxprofit) {
        maxprofit = profit
      }
    }
  }
  return maxprofit
}

// []

export const OP_maxProfit = arr => {
  let min = Infinity
  let maxProfit = 0
  for (let i = 0; i < arr.length; i++) {
    // loop through the array and check if min is min
    if (arr[i] < min) {
      min = arr[i]
    } else {
      maxProfit = Math.max(arr[i] - min, maxProfit)
    }
  }
  return maxProfit
}
// console.log(BF_maxProfit(arr))
