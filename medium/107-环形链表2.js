/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import { Link } from "../utils.mjs";
// 第一次相遇后，slow距离终点的距离即起点到环形相交点的距离，此时用一个指针从头开始和slow同时走，再次相遇即环形相交点
var detectCycle = function (head) {
  if (head === null || head.next === null) return null;
  let slow = head.next;
  let fast = head.next.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return null;
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
const link = new Link([3, 2, 0, 4]);
link.head.next.next.next.next.next = link.head.next.next;
detectCycle(link.head.next);

//module.exports =
/**
3   2   0   4
s                            
f
 */
