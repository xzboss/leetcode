
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
import { Link } from "../utils.mjs";

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// normal 
var reverseBetween = function (head, left, right) {
	const dummy = new ListNode(undefined,head)
	let pre = dummy
	for (let i = 1; i < left; i++) {
		pre = pre.next
	}
	head = pre
	let cur = pre.next
	for (let i = 0; i <= right - left; i++) {
		const temp = cur.next
		cur.next = pre
		pre = cur
		cur = temp
	}
	head.next.next = cur
	head.next = pre
	return dummy.next
};


const l = new Link([3,5])
let h = reverseBetween(l.head.next, 1,2)
while(h){
	console.log(h.val)
	h = h.next
}









//module.exports = 