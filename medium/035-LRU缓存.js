

/**
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，
则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，
则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */



/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.map = new Map()
	this.head = { value: 'head', next: null }
	this.tail = { value: 'tail', pre: this.head }
	this.head.next = this.tail
	this.capacity = capacity
	this.nowC = 0
};


LRUCache.prototype.get = function (key) {
	if (this.map.has(key)) {
		const node = this.map.get(key)
		node.pre.next = node.next
		node.next.pre = node.pre
		this.tail.pre.next = node
		node.next = this.tail
		node.pre = this.tail.pre
		this.tail.pre = node
		return node.value
	}
	return -1
};


LRUCache.prototype.put = function (key, value) {
	if (this.map.has(key)) {
		this.map.get(key).value = value
		this.get(key)
	} else {
		if (this.nowC >= this.capacity) {
			this.map.delete(this.head.next.key)
			this.head = this.head.next
			this.head.pre = null
			this.head.value = 'head'
		} else {
			this.nowC++
		}
		const node = { key, value, next: this.tail, pre: this.tail.pre }
		this.tail.pre.next = node
		this.tail.pre = node
		this.map.set(key, node)
	}


};

const l = new LRUCache(2)
l.put(1, 1)
l.put(2, 2)
l.get(1)
l.put(3, 3)
l.get(2)

let cur = l.head
let str = ''
while (cur) {
	str += cur.value + ' --> '
	cur = cur.next
}
console.log(l.map, str.slice(0, -5))






//module.exports = 