

/**
给你一个链表的头节点 head ，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 */
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

function ListNode (val) {
	this.val = val;
	this.next = null;
}


/**
 * @param {ListNode2} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
// 	const map = new Map()
// 	let pointer = head	
// 	while (pointer) {
// 		if (map.has(pointer)) {
// 			return true
// 		} else {
// 			map.set(pointer, true)
// 		}
// 		pointer = pointer.next
// 	}
// 	return false
// };

//快慢指针,快指针只要和慢指针重合，快的步长定为2，慢定位为1，每次移动他们之间缩小1，所以不可能跳过，
var hasCycle = function (head) {
	if (!head || !head.next) return false
	let slow = head
	let fast = head.next
	while (slow !== fast) {
		if (fast === null || fast.next === null) {
			return false
		}
		slow = slow.next
		fast = fast.next.next
	}
	return true
};
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
// node4.next = node1
console.log(hasCycle(node1))
console.log(hasCycle(null))













//module.exports = 