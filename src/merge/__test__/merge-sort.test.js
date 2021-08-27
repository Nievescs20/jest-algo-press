import mergeSort from '../merge-sort.js'
import chalk from 'chalk'

// global variable accessible by describe block
let a = [1, 2, 3]

describe('Merge sort...', () => {
  test('returns something', () => {
    expect(mergeSort(a)).toBeDefined()
  })
})

// -t option searches for describe block AND test blocks
// for instance, -t "xyz" only runs the first test down below
describe('z', () => {
  test('contains xyz', () => {
    expect()
  })

  test('this doesn\'t contain xy', () => {
    expect(mergeSort(a).length).toBeGreaterThan(1)
  })
})
