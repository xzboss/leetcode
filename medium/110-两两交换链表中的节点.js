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
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  const temp = head.next;
  head.next = swapPairs(temp.next);
  temp.next = head;
  return temp;
};

//
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  const dummy = { next: head };
  let pre = dummy;
  while (head && head.next) {
    pre.next = head.next;
    const temp = head.next.next;
    head.next.next = head;
    head.next = temp;
    pre = head;
    head = head.next;
  }
  return dummy.next;
};
//module.exports =
