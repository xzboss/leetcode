/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

//module.exports =
var copyRandomList = function (head) {
  const map = new Map();
  let p = head;
  while (p) {
    map.set(p, new _Node(p.val));
    p = p.next;
  }
  p = map.get(head);
  const dummy = { next: p };
  while (p) {
    p.next = map.get(p.next) || null;
    p.random = map.get(p.random) || null;
    p = p.next;
  }
  return dummy.next;
};
