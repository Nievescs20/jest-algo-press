import { LinkedList, Node } from './linked-lists.js'

describe('linked list...', () => {
  xit('prints the list', async () => {
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

  it('does something else that you should be afraid of!', () => {
    const list = new LinkedList()
    list.insertAtHead(3)
    list.insertAtHead(1)
    list.insertAtHead(2)
    list.insertAtHead(4)
    list.insertAtHead(5)

    list.findByVal(4)
    expect()
  })
})
