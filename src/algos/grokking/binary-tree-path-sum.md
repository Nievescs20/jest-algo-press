---
title: Binary Tree Path Sum
description: Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

| Input        | Output  | Time | Space |
| ------------ | ------- | ---- | ----- |
| Root, Number | Boolean | `On` | `1`   |

The root has `val` and `left, right`.

<<< @/algos/grokking/binary-tree-path-sum.js#diag

- Base case: when `root` is null, return `false`
- If node is a **leaf** and if `root.val` match, then ✅
- Recurse left child first, subtract root.val from sum
- Can return early based on if `root.val` is negative
- The OR operator guarantees `true` will return if it exists in the tree
- **Notes**
  - Base case
  - Leaf? Values match?
  - Recurse left/right with subraction

<<< @/algos/grokking/binary-tree-path-sum.js#path
