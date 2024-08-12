

/**
 将两个升序链表合并为一个新的 升序 链表并返回
 。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */



function ListNode (val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 普通方法思路：遍历第一个最小的链表，第二个链表进行插入
// var mergeTwoLists = function (list1, list2) {
// 	if (!list1 || !list2) {
// 		return list1 || list2
// 	}
// 	if (list1.val > list2.val) {
// 		[list1, list2] = [list2, list1]
// 	}
// 	//list1 为min
// 	const head = list1
// 	while (list1 && list2) {
// 		if (list1.next === null) {
// 			list1.next = list2
// 			break
// 		}
// 		if (list1.val <= list2.val && list1.next.val >= list2.val) {
// 			const temp = list2
// 			list2 = list2.next
// 			temp.next = list1.next
// 			list1.next = temp
// 		}
// 		list1 = list1.next
// 	}
// 	return head
// };

// // 别人的普通
// var mergeTwoLists = function (list1, list2) {
// 	const head = {}
// 	let pre = head
// 	while(list1 && list2){
// 		if(list1.val <= list2.val){
// 			pre.next = list1
// 			list1 = list1.next
// 		}else {
// 			pre.next = list2
// 			list2 = list2.next
// 		}
// 		pre = pre.next
// 	}
// 	pre.next = list1 || list2
// 	return head.next
// };


// 递归
var mergeTwoLists = function (list1, list2) {
	if(list1 === null || list2 === null){
		return list1 || list2
	}
	if(list1.val <= list2.val){
		list1.next = mergeTwoLists(list1.next, list2)
		return list1
	}else {
		list2.next = mergeTwoLists(list1, list2.next)
		return list2
	}
};

const node1 = new ListNode(2)
const node2 = new ListNode(2)
const node3 = new ListNode(4)

const node11 = new ListNode(1)
const node22 = new ListNode(2)
const node33 = new ListNode(4)

node1.next = node2
node2.next = node3
node11.next = node22
node22.next = node33
let head = mergeTwoLists(node1, node11)
while (head) {
	console.log(head)
	head = head.next
}







//module.exports = 