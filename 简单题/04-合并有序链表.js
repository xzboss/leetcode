function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var node1 = new ListNode(17, null)
var node2 = new ListNode(9, node1)
var node3 = new ListNode(6, node2)
var node4 = new ListNode(4, node3)
var node5 = new ListNode(3, node4)
var node6 = new ListNode(1, node5) //list1 头

var node11 = new ListNode(19, null)
var node12 = new ListNode(16, node11)
var node13 = new ListNode(4, node12)
var node14 = new ListNode(3, node13)
var node15 = new ListNode(2, node14)
var node16 = new ListNode(1, node15) //list2头

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const header = (tailPoint = new ListNode(0, null))
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tailPoint.next = list1
      tailPoint = list1
      list1 = list1.next
    } else {
      tailPoint.next = list2
      tailPoint = list2
      list2 = list2.next
    }
  }
  tailPoint.next = list1 || list2
  return header.next
}
const result = mergeTwoLists(node6, node16)
let point = result
while (point) {
  console.log(point)
  point = point.next
}
