/**
 * @prompt Reverse a Lin+d List
 * @input Singly Linked List
 * @output The reversed linked list
 */

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
