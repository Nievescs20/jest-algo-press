---
title: Unique Path
description: You are given the dimensions of a grid, m and n. Starting from the top left, or (0,0), you want to end up making your way to the bottom right corner. The only two moves you can make are to go one space directly to your right, or one space directly down. Write a function that can help you determine how many unique paths you can take between these two corners.
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

## Example Output

```js
uniquePaths(3, 2) // 3
uniquePaths(3, 4) // 3
uniquePaths(7, 3) // 3
```

## Approach

### Recursive

- start from 0, 0.
- BASE CASE: when `x > x1` or `y > y1` (step out of bounds) return 0
- SUCCESS CASE is when your `x` and `y` is `x1-1` and `y1-1` respectively: return 1

```js
function recursive(x, y, x1, y2) {
  if (x >= x1 || y >= y1) return 0
  if (x === x1 - 1 && y === y1 - 1) return 1
  return recursive(x + 1, y, x1, y2) + recursive(x, y + 1, x1, y2)
}

// 0, 0, 2, 3
```

DIAGRAM: maybe interactive???

```
| | | |
| | | |
| | | |
```

## Solution
