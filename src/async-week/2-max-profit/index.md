---
title: Max Profit
description: When is the best time to buy?
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

- **INPUT**: Array of positive integers
- **RETURN VALUE**: Integer | 0

## Brute Force

The brute force method is to use two nested loops: `i` from `0` to `len-1`, `j` from `i+1` to `len`. This looping logic will guarantee that every permutation is tried.

On each iteration, find the `profit` by `arr[j] - arr[i]`. Note that time flows left to right: buy in the past, and sell in the future. Keep track of `profit` by comparing it to the `maxProfit`, which is outside the scope of the loops. Return the `maxProfit` at end.

<!-- <details><summary>Brute Force</summary> -->

<<< @/async-week/2-max-profit/2-max-profit.js#BF

<!-- </details> -->

- Time complexity: `O(N^2)`
- Space complexity: `O(N)`

## Optimized

To iterate only once through the array, we need to keep track of the minimum. Set `min` to `Infinity`. On each iteration, a) check if the element is the new minimum or b) calculate profit and check if it is the maximum profit.

In the case of a), if the element is less than the `min`, no profit can be made. Simply set the current element as the newest `min`.

For b), calculate the profit by taking the difference of the current element and `min`. If a new maximum is found, overwrite `maxProfit` with the difference.

<!-- <details><summary>Optimized</summary> -->

<<< @/async-week/2-max-profit/2-max-profit.js#OP

<!-- </details> -->
