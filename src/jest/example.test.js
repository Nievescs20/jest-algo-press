import { example, sayHi, matchHey, fsFn } from './example'

describe('example 1', () => {
  test('runs', () => {
    const r = example()
    expect(r).toBe(1)
  })
})

describe('another test block', () => {
  test('sayHi correct type', () => {
    expect(typeof sayHi()).toBe('string')
  })

  test('should greet with name', () => {
    const r = sayHi('Sey')
    expect(r).toBe('Hello Sey')
  })

  test('should match hey', () => {
    expect(matchHey()).toBeNull()
    expect(matchHey('sup')).toBeNull()
    expect(matchHey('hey').length).toBe(1)
    expect(matchHey('hey hey').length).toBe(2)
  })
})

//#region fs-node
describe('fs node module', () => {
  const { dirPath, joined, dirs } = fsFn()
  test('should contain...', () => {
    expect(dirPath).toContain('sey')
    expect(joined.endsWith('yolo')).toBeTruthy()
    expect(Array.isArray(dirs)).toBe(true)

    // partial matching FAILIN
    // expect(dirs[0]).toEqual(expect.objectContaining({ name: '.babelrc' }))
  })

  test('objectContaining multiple', () => {
    const obj = {
      name: 'Sey Kim',
      tasks: 10,
      powerLevel: 9001,
    }

    expect(obj).toEqual(
      expect.objectContaining({
        name: 'Sey Kim',
        tasks: 10,
      }),
    )
  })
})
//#endregion fs-node
