/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  while (headA) {
    map.set(headA, true);
    headA = headA.next;
  }
  while (headB) {
    if (map.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};

// 空间 O(1) 思路：如果从短链表的头节点和长链表头节点减去链表差值处开始移动；我们就可以一一进行比较
// 所以要先找到差值
// 将长短链表按右对齐排列来理解
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
    if (!pA && !pB) return null;
    if (!pA) {
      pA = headB;
    }
    if (!pB) {
      pB = headA;
    }
  }
  return pA;
};

// 跳到 null 不用直接跳到另一链表头，可以保留在null位置，把null作为一个节点
// 那前提条件就变成了这两个链表一定相交，只是可能在null相交。这样就不需要再判断!pA && !pB 了
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};

//module.exports =
/**
 * Definition for singly-linked list.

 function ListNode(val) {
      this.val = val;
      this.next = null;
  }
  */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let tmpA = headA,
    tmpB = headB;
  while (tmpA != tmpB) {
    tmpA = tmpA === null ? headB : tmpA.next;
    tmpB = tmpB === null ? headA : tmpB.next;
  }

  return tmpA;
};
