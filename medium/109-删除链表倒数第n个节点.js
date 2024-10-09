/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0;
  let p = head;
  while (p) {
    len++;
    p = p.next;
  }
  let count = len - n + 1;
  const dummy = { next: p };
  let pre = dummy;
  p = dummy.next;
  while (count > 1) {
    count--;
    p = p.next;
    pre = pre.next;
  }
  pre.next = p.next;
  return dummy.next;
};

// 快慢指针，先求差值再走
var removeNthFromEnd = function (head, n) {
  const dummy = { next: head };
  let slow = dummy;
  let fast = dummy;
  while (n-- > 0) fast = fast.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
//module.exports =
