---
title: Pair with Target Sum
description: Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target. Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
url: https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

Runs in O(n) and const space

If it fails...

<<< @/algos/grokking/two-pointers/pair-with-target-sum.js#sol

- Loop over the array
- Check if complement is in the hash
  - return value of complement and i
  - if it isn't, store value/i

Time Complexity: O(N)

<<< @/algos/grokking/two-pointers/pair-with-target-sum.js#hash
