---
title: Multiplicative Persistence
description: Given a non-negative integer, write a function that returns its multiplicative persistence--the number of times you must multiply the digits in a number together until you reach a single digit product.
gist: https://gist.github.com/iamannamai/901ff22dbd1b03600d8bf4f2837d2f07
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

Without using coercion: modulus we use modulus to extract every digit from a number and find the product. For instance, `237` will follow `7*1, 7*3, 21*2 = 42`

<<< @/async-week/3-multiplicative-persistence/index.js#iterative

**Helper Function**

Merely returns the product of the digit. Extracted 7 lines from the iterative approach.

<<< @/async-week/3-multiplicative-persistence/index.js#helper

A one-liner 🙃 (with a helper function!)

<<< @/async-week/3-multiplicative-persistence/index.js#recursive
