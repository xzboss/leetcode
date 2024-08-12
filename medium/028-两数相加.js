
/**
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */



/**
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 */

function ListNode (val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let head = {}
	let pointer = head
	let isCarry = 0
	while (l1 || l2 || isCarry) {
		const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + isCarry
		isCarry = (sum / 10) >> 0
		pointer.next = new ListNode(isCarry ? sum % 10 : sum)
		if (!head.next) {
			head.next = pointer
		}
		pointer = pointer.next
		l1 = l1 && l1.next
		l2 = l2 && l2.next
	}
	return head.next
};


const node1 = new ListNode(2)
const node2 = new ListNode(4)
const node3 = new ListNode(3)

const node11 = new ListNode(5)
const node22 = new ListNode(6)
// const node33 = new ListNode(4)

node1.next = node2
node2.next = node3
node11.next = node22
// node22.next = node33/·
let head = addTwoNumbers(node1, node11)
while (head) {
	console.log(head)
	head = head.next
}

//module.exports = 