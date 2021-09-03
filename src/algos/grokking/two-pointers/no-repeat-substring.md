---
title: No Repeat Substring
description: no repeat..
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

Given a string.. like `"aabc"`, the substring should be length 3.

## The Approach

<<<@/algos/grokking/two-pointers/no-repeat-substring.js#main

## Edge Cases

Given `aabccbb`, there is case in the algorithm where `i` will be greater than the `index` in the hash. When `i` is 4 (`c`), and when `j` is 5 (`b`), the string `b` will still be in the `charHash`, and will prompt the reassignment of `i`. However, if we were **not** to have the `left = Math.max(left, charHash[str[right]] + 1)`, `i` will be reassigned to `3`!

- Check if in the range between `i` and `j` contains the number in the hash.

- Time complexity: `O(N)`, where `N` is # of chars.
- Space complexity: `O(K)`, since the whole string may be added to the HashMap.
