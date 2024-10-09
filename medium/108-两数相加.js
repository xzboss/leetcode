/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
import { Link } from "../utils.mjs";

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const dummy = {};
  let p = dummy;
  while (l1 && l2) {
    const sum = l1.val + l2.val + carry;
    carry = sum >= 10 ? 1 : 0;
    p.next = new ListNode(sum % 10, null);
    p = p.next
    l1 = l1.next;
    l2 = l2.next;
  }
  const node = l1 || l2;
  while (node) {
    const sum = node.val + carry;
    carry = sum >= 10 ? 1 : 0;
    p.next = new ListNode(sum % 10, null);
    node = node.next;
  }
  return dummy.next;
};
const link = new Link([2, 4, 3]);
const link2 = new Link([5, 6, 4]);
console.log(addTwoNumbers(link.head.next, link2.head.next));

//module.exports =
