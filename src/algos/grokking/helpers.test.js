import {
  buildCharCounter,
  buildCharCounterForOfLoop,
  decrementOrDeleteKey,
} from './helpers.js'

describe('buildCharCounter', () => {
  it('counts character in hash', async () => {
    expect(buildCharCounter('hi')).toEqual({ h: 1, i: 1 })
  })
})

describe('updateCharCounter', () => {
  it('for of loop in hash char counter', async () => {
    expect(buildCharCounterForOfLoop('ssey')).toEqual({ s: 2, e: 1, y: 1 })
  })
})

describe('deleteKey', () => {
  /* control for single key */
  let key = 'sey'

  it('decrements the key', async () => {
    const num = 1
    let obj = { [key]: num }
    let obj2 = { [key]: num - 1 }
    expect(decrementOrDeleteKey(obj, key)).toEqual(obj2)
  })
})
