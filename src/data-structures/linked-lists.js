import { blue } from 'chalk'

export class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(val) {
    // this works even if head is empty since node's next will point to null
    const node = new Node(val)
    node.next = this.head
    this.head = node
    return this
  }

  insertAtTail(val) {
    // if empty, set head as new tail and return
    if (this.isEmpty()) {
      this.head = new Node(val)
      return this
    }

    // start with head
    let node = this.head
    // loop until node is last of list
    while (node?.next) {
      node = node.next
    }
    // create tail, put current node's next as tail
    const tail = new Node(val)
    node.next = tail
    return this
  }

  deleteTail(val) {
    // if empty return null
    if (this.isEmpty()) return null
    // if list contains only head, return
    if (!this.head.next) {
      const deleted = this.tail
      this.head = null
      return deleted
    }
    // iterate till second last (node.next.next)
    // set that next as null, and make it this.tail
    let curr = this.head
    while (curr.next.next) {
      curr = curr.next
    }
    const deleted = curr.next
    curr.next = null
    this.tail = curr
    return deleted
  }

  isEmpty() {
    return this.head === null
  }

  printList() {
    // print the list
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

  gatherList(node) {
    // if node is empty, use this.head -- useful to check for reversal
    let res = []
    let curr = node ?? this.head
    // iterate until node is valid
    while (curr) {
      res.push(curr.val)
      curr = curr.next
    }
    return res
  }

  getHead() {
    return this.head
  }

  reset() {
    this.head = null
  }

  insertByValues(array) {
    for (const val of array) {
      // insertAtTail takes in value, not Node...
      this.insertAtTail(val)
    }
  }
}

export class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
