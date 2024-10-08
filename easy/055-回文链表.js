/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
import { Link } from "../utils.mjs";
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  const temps = [];
  while (fast !== null && fast.next !== null) {
    temps.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  let i = temps.length - 1;
  if (fast) slow = slow.next;
  while (slow && slow.val === temps[i]) {
    slow = slow.next;
    i--;
  }
  return i === -1;
};

// o(1) 前半部分慢指针进行翻转
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let pre = null;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    // 前半部分翻转
    const temp = slow.next;
    slow.next = pre;
    pre = slow;
    slow = temp;
  }
  if (fast) slow = slow.next;
  while (slow) {
    if (slow.val !== pre.val) return false;
    slow = slow.next;
    pre = pre.next;
  }
  return true;
};
const link = new Link([1, 0, 1]);
console.log(link.head.next);
console.log(isPalindrome(link.head.next));
//module.exports = 1 2 2 1
