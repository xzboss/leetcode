




// 遍历出总数，再遍历一次 O(2n)
var removeNthFromEnd = function (head, n) {
	let count = 0
	let cur = head
	while (cur) {
		cur = cur.next
		count++
	}
	const dummy = { next: head }
	let pre = dummy
	count = count - n
	while (count > 0) {
		pre = pre.next
		count--
	}
	pre.next = pre.next.next
	return dummy.next
};

//time O(n) space O(n)
var removeNthFromEnd = function (head, n) {
	const map = new Map()
	let i = 0
	const dummy = { next: head }
	let cur = dummy
	while (cur) {
		map.set(i, cur)
		cur = cur.next
		i++
	}
	const pre = map.get(i - n - 1)
	pre.next = pre.next.next
	return dummy.next
};

// 快慢指针 O（n + 倒数m个）

var removeNthFromEnd = function (head, n) {
	const dummy = { next: head }
	let slow = dummy
	let fast = dummy
	while(n > 0){
		fast = fast.next
		n--
	}
	while(fast.next){
		fast = fast.next
		slow = slow.next
	}
	slow.next = slow.next.next
	return dummy.next
};


//module.exports = 