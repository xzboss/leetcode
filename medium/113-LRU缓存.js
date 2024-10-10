/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.map = new Map();
  this.dummyHead = {};
  this.tail = { pre: this.dummyHead };
  this.dummyHead.next = this.tail;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key);
  if (node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    node.pre = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.pre = node;
    this.dummyHead.next = node;
  }
  return node ? node.value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.map.has(key)) {
    const node = { pre: this.dummyHead, next: this.dummyHead.next, value, key };
    this.map.set(key, node);
    this.dummyHead.next.pre = node;
    this.dummyHead.next = node;
    this.count++;
    if (this.count > this.capacity) {
      this.count--;
      this.map.delete(this.tail.pre.key);
      this.tail.pre = this.tail.pre.pre;
      this.tail.pre.next = this.tail;
    }
  } else {
    this.map.get(key).value = value;
    this.get(key);
  }
};