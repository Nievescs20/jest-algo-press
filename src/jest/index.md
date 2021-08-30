# Jest

## Example.js

<!-- <<< @/jest/example.js -->

## Example.test

<!-- <<< @/jest/example.test.js#fs-node -->

## `spyOn`

- [spyon](https://codewithhugo.com/jest-fn-spyon-stub-mock/)

Given this object...

<<< @/jest/spyOn.test.js#const

We are going to test some functionalities.

<<< @/jest/spyOn.test.js#1


### Mocking

We are given a function that takes in an object, and calls an increment function.

<<< @/jest/spyOn.test.js#count{3,8}

Notice that `app` takes in a counter object and just calls the `increment` function. Make sure to mock the object with `increment`; it will be an empty `jest.fn()`.

<<< @/jest/spyOn.test.js#count1{3,10,13}

Mocking an entire object does not mutate anything. With `spyOn`, we **do mutate**, and can check the result as well.

<<< @/jest/spyOn.test.js#count2
