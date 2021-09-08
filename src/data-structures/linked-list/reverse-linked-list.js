/**
 * @prompt Reverse a Lin+d List
 * @input Singly Linked List
 * @output The reversed linked list
 * @approach iterative
 */
import { blue } from 'chalk'

export function reverseLinkedList(list) {
  // EDGE CASE
  // If head is undefined, list.head will be set to prev which is null
  // If only 1, A => null, this will work too

  // iterative approach
  let prev = null
  let curr = list.head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  // put the prev to the head
  list.head = prev
  return list
  // end of of iteration
}

export function RECURSIVE_reverseLinkedList(node) {
  // BASE CASE -- return last node
  if (!node.next) return node
  // call the function
  // we are grabbing a null value...
  const list = RECURSIVE_reverseLinkedList(node.next)
  const tail = node.next.next
  node.next.next = node // sets the next node to point to the ccurrent node
  node.next = tail // sets it to be null
  return list
}

export function PARTIAL_reverseLinkedList() {
  //
}