/**
 * @prompt Find the length of a linked list
 * @input Linked List
 * @output Number of nodes in the list
 */

export function findLengthOfLinkedList(list) {
  // take the list, get the head
  // iterate through using while(node)
  // return the counter
  // EDGE case: head is empty. will return 0
  // Head has only 1: will return 1
  let node = list.head
  let i = 0
  while (node) {
    node = node.next
    i++
  }
  return i
}
