---
title: Two Num Sum
description: Do any two numbers add up to the sum?
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

- **INPUT**: Array of positive integers
- **RETURN VALUE**: Boolean

Interviewers: The array is not sorted.

## Brute Force

| Time  | Space |
| ----- | ----- |
| `N^2` | `C`   |

The brute force case requires 2 loops for a `O(N^2)` in time complexity. Loop over the array once, which will represent the first number. The inner loop's index `j` will start to the immediate right of `i`.

The comparison is done in the body of the inner loop. If the sum of the two numbers equal the target, return true; return false when the loop finishes.

<details><summary>Brute Force</summary>

<<< @/async-week/1-two-num-sum/1-two-num-sum.js#BF

</details>

## Pointers

| Time       | Space |
| ---------- | ----- |
| `N log(N)` | `C`   |

Sort the array `(n log n)`, and set 2 pointers: the first and last element of the array. Because it is sorted, we can iterate once through the array. On each iteration, we check the sum of the elements and proceed with three forks: a) if sum is equal to target, return `true`, b) if sum is less, increment the left pointer, c) increment the right if greater. The key point is to realize that moving left increases the sum, and moving right decreases the sum.

```
- sort by built-in (n log n)
- set left and right pointers
- loop until the pointers cross or meet
  - if sum is target, return true
  - if sum is greater, move left
  - if sum is less, move right
- return false
```

<details><summary>Two Pointers</summary>

<<< @/async-week/1-two-num-sum/1-two-num-sum.js#POINTERS

</details>

## Hash

| Time       | Space |
| ---------- | ----- |
| `N log(N)` | `N`   |

Iterate once through the array by using a hash to keep track of visited elements. On each iteration, save the complement (target - element) as the key in the hash. As look up is `O(1)`, the time complexity will be `O(N)`. Space complexity is `O(N)`, as the number of elements in the array translates to the key/value pair of the hash.

```
- set a hash as an empty object, or set
- loop over the array once
  - if element is a key in hash, return true
  - store complement in hash as key (value does not matter)
- return false
```

<details><summary>Two Pointers</summary>

<<< @/async-week/1-two-num-sum/1-two-num-sum.js#HASH

</details>
