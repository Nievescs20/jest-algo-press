//#region const
const myObj = {
  doSomething() {
    console.log('does something')
  },
}
//#endregion const

//#region 1
describe('spyOn features', () => {
  test('stub .toBeCalled()', () => {
    const stub = jest.fn()
    stub()
    expect(stub).toBeCalled()
  })
  //#endregion 1

  //#region spy
  test('spyOn .toBeCalled()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething')
    myObj.doSomething()
    expect(somethingSpy).toBeCalled()
    expect(somethingSpy).toHaveBeenCalled()
  })
  //#endregion spy

  test('spyOn().mockImplementation', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething').mockImplementation()
    myObj.doSomething()
    expect(somethingSpy).toHaveBeenCalled()
  })

  test('spyOn().mockReturnValue()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething').mockReturnValue()
    myObj.doSomething()
    expect(somethingSpy).toHaveBeenCalled()
    expect(somethingSpy).toHaveBeenCalledTimes(1)
  })
})

describe('spyOn methods', () => {
  //#region count
  let count = 0
  const counter = {
    increment: () => (count += 1),
    getCount: () => count,
  }

  const app = counter => {
    counter.increment()
  }
  //#endregion count

  //#region count1
  test('app() with mock counter .toHaveBeenCalledTimes(1)', () => {
    const mockCounter = {
      increment: jest.fn(),
    }
    app(mockCounter)
    expect(mockCounter.increment).toHaveBeenCalledTimes(1)
  })
  //#endregion count1

  //#region count2
  test('app() with jest.spyOn(counter) toHaveBeenCalledTimes(1)', () => {
    const incrementSpy = jest.spyOn(counter, 'increment')
    app(counter)
    expect(incrementSpy).toHaveBeenCalledTimes(1)
    expect(counter.getCount()).toEqual(1)
  })
  //#endregion count2
})
