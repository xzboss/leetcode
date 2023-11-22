function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// const h6 = new ListNode(6)
const h5 = new ListNode(3, null)
const h4 = new ListNode(3, h5)
const h3 = new ListNode(2, h4)
const h2 = new ListNode(1, h3)
const h1 = new ListNode(1, h2)

var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }
  let currNode = head
  while (currNode.next) {
    if (currNode.val === currNode.next.val) {
      currNode.next = currNode.next.next
    } else {
      currNode = currNode.next
    }
  }
}
deleteDuplicates()
let point = new ListNode(0, h1)
while (point) {
  console.log(point)
  point = point.next
}
