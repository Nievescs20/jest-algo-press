---
title: Mocking
description: learning to mock
---

# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

- Reference: [spyOn, stub](https://codewithhugo.com/jest-fn-spyon-stub-mock/)

## Stub

Create a stub. Call the stub

<<< @/topics/jest/spyOn.test.js#1{3}

## Mocking

Given this object, which has one function `doSomething`:

<<< @/topics/jest/spyOn.test.js#const

`spyOn` takes the object, and key (string. When the function that is spied on is called, the `spyOn` object keeps track.

<<< @/topics/jest/spyOn.test.js#spy{3}

### `spyOn` Examples

<<< @/topics/jest/spyOn.test.js#spy1{3,9}

We are given a function that takes in an object, and calls an increment function.

<<< @/topics/jest/spyOn.test.js#count{3,8}

Notice that `app` takes in a counter object and just calls the `increment` function. Make sure to mock the object with `increment`; it will be an empty `jest.fn()`.

<<< @/topics/jest/spyOn.test.js#count1{3,10,13}

Mocking an entire object does not mutate anything. With `spyOn`, we **do mutate**, and can check the result as well.

<<< @/topics/jest/spyOn.test.js#count2{2,5}

### Multiple `jest.toHaveBeenCalledWith`

<<< @/topics/jest/spyOn.test.js#mult1

<<< @/topics/jest/spyOn.test.js#mult2

<<< @/topics/jest/spyOn.test.js#mult3

Multiple calls:

<<< @/topics/jest/spyOn.test.js#mult4
