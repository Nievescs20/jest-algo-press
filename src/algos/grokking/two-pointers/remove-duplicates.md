---
title: Remove Duplicates
description: Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
url: https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

![remove](./remove-duplicates.png)

My solution:

<<< @/algos/grokking/two-pointers/remove-duplicates.js#sol

Theirs:

```js
function removeElements(arr, key) {
  let nextNonDuplicate = 1

  let i = 1
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i]
      nextNonDuplicate += 1
    }
    i += 1
  }

  return nextNonDuplicate
}
```

Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

```js
function removeElement(arr, key) {
  let i = 0
}
```
