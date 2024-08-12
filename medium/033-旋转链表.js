

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 先连起来，再找头
var rotateRight = function (head, k) {
	if (!head) return null
	let cur = head
	let count = 1
	while (cur.next) {
		cur = cur.next
		count++
	}
	cur.next = head
	k = count - k % count
	while (k > 0) {
		cur = cur.next
		k--
	}
	const temp = cur.next
	cur.next = null
	return temp
};

// 时间换空间，队列形式
var rotateRight = function (head, k) {
	if (!head || !head.next) return head
	const queue = []
	while (head) {
		queue.push(head)
		head = head.next
	}
	const len = queue.length
	queue[len - 1].next = queue[0]
	k = len - k % len
	queue[k - 1].next = null
	return queue[k % len]
};




//module.exports = 