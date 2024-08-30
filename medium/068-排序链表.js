/**
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

 

示例 1：


输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：


输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：

输入：head = []
输出：[]
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1. 冒泡思路 超时
// var sortList = function (head) {
//   const dummy = { next: head };
//   let p = dummy;
//   let len = 0;
//   while (head) {
//     len++;
//     head = head.next;
//   }
//   for (let i = 0; i < len; i++) {
//     while (p.next.next) {
//       if (p.next.val > p.next.next.val) {
//         const temp = p.next.next;
//         p.next.next = temp.next;
//         temp.next = p.next;
//         p.next = temp;
//       }
//       p = p.next;
//     }
//     p = dummy;
//   }
//   return dummy.next;
// };

// 2. 转成数组，然后就全是数组的排序了
// var sortList = function (head) {
//   const arr = [];
//   while (head) {
//     arr.push(head);
//     head = head.next;
//   }
//   arr.sort((a, b) => a.val - b.val);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].next = arr[i + 1] || null;
//   }
//   return arr[0] || null;
// };

// 3. 分治
var sortList = function (head) {
  if (!head || !head.next) return head;
  // 快慢指针分
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let rFirst = slow.next;
  slow.next = null;
  sortList(head);
  sortList(rFirst);
  let dummy = {};
  let p = dummy
  while (head && rFirst) {
    if (head.val < rFirst.val) {
        p.next = head;
      head = head.next;
    } else {
        p.next = rFirst;
      rFirst = rFirst.next;
    }
    p = p.next;
  }
  if (!head) {
    p.next = rFirst;
  } else {
    p.next = head;
  }
  return dummy
};
const o3 = new ListNode(3);
const o1 = new ListNode(1, o3);
const o2 = new ListNode(2, o1);
const o4 = new ListNode(4, o2);
console.log(JSON.stringify(sortList(o4)));
