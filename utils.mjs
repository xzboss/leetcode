export class Link {
	head = {}
	tail = this.head
	constructor(arr) {
		arr.forEach(element => {
			this.tail.next = {}
			this.tail = this.tail.next
			this.tail.val = element
			this.tail.next = null
		});
	}

	add = function () {
		this.tail.next = {}
		this.tail = this.tail.next
		this.tail.val = element
		this.tail.next = null
	}

	show = function () {
		let pointer = this.head.next
		let str = ''
		while (pointer.next) {
			str = str + pointer.val + ' --> '
			pointer = pointer.next
		}
		str += pointer.val
		console.log(str)
	}
}