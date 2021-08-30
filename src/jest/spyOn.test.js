//#region 1
describe('spyOn features', () => {
  //#region const
  const myObj = {
    doSomething() {
      console.log('does something')
    },
  }
  //#endregion conit
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

  //#region spy1
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
  //#endregion spy1
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

describe('je.toHaveBeenCalledWith(): asserting on multiple calls', () => {
  //#region mult1
  let state = 0
  const counter = {
    add(val) {
      state += val
    },
    getCount() {
      return state
    },
  }

  const singleAdd10 = counter => {
    counter.add(10)
  }

  const multipleAdd = counter => {
    counter.add(15)
    counter.add(20)
  }
  //#endregion mult1

  //#region mult2
  test('singleAdd10 > jest single call', () => {
    const mockCounter = {
      add: jest.fn(),
    }
    singleAdd10(mockCounter)
    expect(mockCounter.add).toHaveBeenCalledWith(10)
  })
  //#endregion mult2

  //#region mult3
  test('singleAdd > jest.spyOn() single call', () => {
    const addSpy = jest.spyOn(counter, 'add')
    singleAdd10(counter)
    expect(addSpy).toHaveBeenCalledWith(10)
  })
  //#endregion mult3

  //#region mult4
  test('multipleAdd > mock', () => {
    const mockCounter = {
      add: jest.fn(),
    }
    multipleAdd(mockCounter)
    expect(mockCounter.add).toHaveBeenCalledWith(15)
    expect(mockCounter.add).toHaveBeenCalledWith(20)
  })

  test('multipleAdd > spyOn()', () => {
    const addSpy = jest.spyOn(counter, 'add')
    multipleAdd(counter)
    expect(addSpy).toHaveBeenCalledWith(15)
    expect(addSpy).toHaveBeenCalledWith(20)
  })
  //#endregion mult4
})
