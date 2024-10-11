/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 层序
var isSymmetric = function (root) {
  const queue = [root];
  while (queue.length) {
    let start = 0;
    let end = queue.length - 1;
    while (start < end) {
      if (queue[start] && queue[end] && queue[start].val !== queue[end].val) return false;
      if ((queue[start] && queue[end] === null) || (queue[end] && queue[start] === null)) return false;
      start++;
      end--;
    }
    end = queue.length;
    while (end > 0) {
      const node = queue.shift();
      if (node) {
        queue.push(node.left);
        queue.push(node.right);
      }
      end--;
    }
  }
  return true;
};
var isSymmetric = function (root) {
  if (!root) return true;
  const queue1 = [root.left];
  const queue2 = [root.right];
  while (queue1.length || queue1.length) {
    const node1 = queue1.shift();
    const node2 = queue2.shift();
    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    queue1.push(node1.left);
    queue1.push(node1.right);
    queue2.push(node2.right);
    queue2.push(node2.left);
  }
  return true;
};

var isSymmetric = function (root) {
  if (root === null) return null;
  function deep(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return deep(left.left, right.right) && deep(left.right, right.left);
  }
  return deep(root.left, root.right);
};
//module.exports =
