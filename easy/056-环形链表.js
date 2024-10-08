/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 1 哈希表
var hasCycle = function (head) {
  const map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
};
// 快慢指针
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return fast === slow;
};

//module.exports =
