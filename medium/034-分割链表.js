
/**
给你一个链表的头节点 head 和一个特定值 x ，
请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// 维护两个链表，然后拼接就行了
var partition = function (head, x) {
	let large = { next: null }
	let small = { next: null }
	const largeH = large
	const smallH = small
	while (head) {
		if (head.val >= x) {
			large.next = head
			large = large.next
		} else {
			small.next = head
			small = small.next
		}
		head = head.next
	}
	large.next = null
	small.next = largeH.next
	return smallH.next
};
//[undefined,1,4,3,2,5,2]








//module.exports = 