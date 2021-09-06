import { LinkedList, Node } from './linked-lists.js'
import { findLengthOfLinkedList } from './linked-list/find-length-of-linked-list'
import { reverseLinkedList } from './linked-list/reverse-linked-list'

const outerList = new LinkedList()
outerList.insertByValues([1, 2, 3, 4, 5])

describe('linked list...', () => {
  it('prints the list', async () => {
    // const node = Node(5)

    const list = new LinkedList()
    list.insertAtHead(5)
    list.insertAtHead(6)
    list.insertAtHead(1)
    list.printList()

    expect(console.log(list))
  })

  it('adds to tail', async () => {
    const list = new LinkedList()
    list.insertAtHead(2)
    list.insertAtTail(3)
    list.insertAtTail(4)
    list.insertAtTail(5)

    list.printList()
    expect(list.gatherList()).toEqual([2, 3, 4, 5])
  })

  test('should print out empty ', () => {
    const list = new LinkedList()
    list.printList()
    expect(list)
  })

  test('should return empty array if head is empty', () => {
    const list = new LinkedList()
    expect(list.gatherList()).toEqual([])
  })

  test('Insertion and deletion at tail works', () => {
    const list = new LinkedList()
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    list.insertAtTail(4)
    list.insertAtTail(5)
    expect(list.gatherList()).toEqual([1, 2, 3, 4, 5])

    list.deleteTail()
    expect(list.gatherList()).toEqual([1, 2, 3, 4])
    list.deleteTail()
    expect(list.gatherList()).toEqual([1, 2, 3])
    list.deleteTail()
    list.deleteTail()
    expect(list.gatherList()).toEqual([1])
    list.deleteTail()
    expect(list.gatherList()).toEqual([])
  })

  test('reset() and insertByValues()', () => {
    const list = new LinkedList()
    list.insertAtHead(1)
    list.insertAtHead(2)
    list.insertAtHead(3)
    list.insertAtHead(4)
    list.reset()
    expect(list.getHead()).toBe(null)
    list.insertByValues([1, 2, 3, 4, 5])
    expect(list.gatherList()).toEqual([1, 2, 3, 4, 5])
  })
})

describe('Find Length', () => {
  const list = new LinkedList()
  list.insertAtTail(1)
  list.insertAtTail(2)
  list.insertAtTail(3)
  list.insertAtTail(4)
  afterEach(() => {
    list.insertAtTail()
  })
  test('should find length', () => {
    expect(findLengthOfLinkedList(list)).toBe(4)
    list.deleteTail()
    expect(findLengthOfLinkedList(list)).toBe(3)
  })
})

describe('Reverse List', () => {
  const list = new LinkedList()
  list.insertAtTail(1)
  list.insertAtTail(2)
  list.insertAtTail(3)
  list.insertAtTail(4)
  test('should reverse linked list', () => {
    reverseLinkedList()
  })
})
