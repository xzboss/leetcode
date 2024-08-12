
/**
 * 
 * 给定一个已排序的链表的头 head ，
 *  删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。 
 */



var deleteDuplicates = function (head) {
	const dummy = { next: head }
	let cur = dummy
	while (cur.next && cur.next.next) {
		const val = cur.next.val
		if (cur.next.next.val === val) {
			while (cur.next && cur.next.val === val) {
				cur.next = cur.next.next
			}
		} else {
			cur = cur.next
		}
	}
	return dummy.next
};






//module.exports = 