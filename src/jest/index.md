# Jest

- Reference: [spyOn, stub](https://codewithhugo.com/jest-fn-spyon-stub-mock/)

## Stub

Create a stub. Call the stub

<<< @/jest/spyOn.test.js#1{3}

## Mocking

Given this object, which has one function `doSomething`:

<<< @/jest/spyOn.test.js#const

`spyOn` takes the object, and key (string. When the function that is spied on is called, the `spyOn` object keeps track.

<<< @/jest/spyOn.test.js#spy{3}

### `spyOn` Examples

<<< @/jest/spyOn.test.js#spy1{3,9}

We are given a function that takes in an object, and calls an increment function.

<<< @/jest/spyOn.test.js#count{3,8}

Notice that `app` takes in a counter object and just calls the `increment` function. Make sure to mock the object with `increment`; it will be an empty `jest.fn()`.

<<< @/jest/spyOn.test.js#count1{3,10,13}

Mocking an entire object does not mutate anything. With `spyOn`, we **do mutate**, and can check the result as well.

<<< @/jest/spyOn.test.js#count2{2,5}

### Multiple `jest.toHaveBeenCalledWith`

<<< @/jest/spyOn.test.js#mult1

<<< @/jest/spyOn.test.js#mult2

<<< @/jest/spyOn.test.js#mult3

Multiple calls:

<<< @/jest/spyOn.test.js#mult4
