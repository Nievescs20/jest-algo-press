export class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(val) {
    const node = new Node(val)
    node.next = this.head
    this.head = node
    return this
  }

  insertAtTail(val) {
    let node = this.head
    while (node?.next) {
      node = node.next
    }
    const tail = new Node(val)
    node.next = tail
    return this
  }

  isEmpty() {
    return this.head == null
  }

  printList() {
    if (this.isEmpty()) {
      console.log('Empty List!')
      return
    }

    let node = this.head
    let str = ''
    while (node) {
      str += `${node.val} => `
      node = node.next
    }
    str += '❌'
    console.log(str)
    return str
  }

  gatherList() {
    let res = []
    if (this.isEmpty()) return res

    let node = this.head
    while (node) {
      res.push(node.val)
      node = node.next
    }
    return res
  }

  getHead() {
    return this.head
  }
}

export class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
