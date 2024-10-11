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
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  let cur = 0;
  function deep(root) {
    if (!root) {
      max = Math.max(max, cur);
      return;
    }
    cur++;
    deep(root.left);
    deep(root.right);
    cur--;
  }
  deep(root);
  return max;
};

var maxDepth = function (root, max = 0) {
  if (!root) return max;
  return Math.max(maxDepth(root.left, max + 1), maxDepth(root.right, max + 1));
};

//module.exports =
