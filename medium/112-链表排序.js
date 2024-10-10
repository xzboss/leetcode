var sortList = function (head) {
  function divide(head) {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const temp = slow.next;
    slow.next = null;
    let lHead = divide(head);
    let rHead = divide(temp);
    return merge(lHead, rHead);
  }
  function merge(head1, head2) {
    const dummy = {};
    let p = dummy;
    while (head1 && head2) {
      if (head1.val < head2.val) {
        p.next = head1;
        head1 = head1.next;
      } else {
        p.next = head2;
        head2 = head2.next;
      }
      p = p.next;
    }
    p.next = head1 || head2;
    return dummy.next;
  }
  return divide(head);
};

//module.exports =
