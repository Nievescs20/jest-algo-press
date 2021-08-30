---
title: Sorting
description: All sorting!
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

- **INPUT**: Array of positive integers
- **RETURN VALUE**: Boolean

| Time  | Space |
| ----- | ----- |
| `N^2` | `C`   |

For all matters sorting!

## Bubble Sort

Use 2 nested loops: `i` 0 to `len-1` since you do not need to sort the last number. `j` 0 to `len-1-i` since for each loop, `j` elements from the right is guaranteed to be sorted. The whole point of bubble sort is that it takes the element and put its to its correct position.

Note: use `j` and `j+1` in the comparison. `hasSorted` flag is for further optimization: on each iteration.

### Pitfalls

- `i`: number of elements needed to be swapped, hence `len-1`
- `j`: the index of elements to be compared
  - `len-1-i`: each iteration, `i` elements guaranteed to be sorted
  - dont confuse `-j` with `-i` since `j` is dynamic in the loop
- if `hasSorted` is not run in the if block for the `j` loop, return since it means it is sorted

<<< @/sorting/bubble-sort/index.js#snippet{4}

## Merge Sort

Merge sort recursively splits the array, and merges back using a helper function.

### `mergeArray`

<<< @/sorting/merge-sort/index.js#snippet

### `merge`

<<< @/sorting/merge-sort/index.js#merge

<details><summary>Alternate merge</summary>

```js
if (i === arr1.length) {
  for (; j < arr2.length; j++) {
    arr.push(arr2[j])
  }
} else {
  for (; i < arr1.length; i++) {
    arr.push(arr1[i])
  }
}
```

</details>

## Quick Sort

## Insertion Sort

`N^2` in worst case, works best in small arrays.

- `i`

<<< @/sorting/insertion-sort/index.js#snippet
