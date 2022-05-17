/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  let stack = []
  let current = head
  while (current.next) {
    stack.push(current)
    current = current.next
  }
  head = stack.pop()
  let crt = head
  while (stack.length) {
    crt.next = stack.pop()
    crt = crt.next
  }
  return head
};

console.log(reverseList());