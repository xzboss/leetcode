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
// 经过当前节点的最大直径等于其左子树的最大深度+其右子树的最大深度
// 深度遍历记录经过每个节点的最大直径，取最大值
var diameterOfBinaryTree = function (root) {
  let max = 0;
  function deep(root) {
    if (!root) return 0;
    const leftDeep = deep(root.left);
    const rightDeep = deep(root.right);
    max = Math.max(max, leftDeep + rightDeep);
    return Math.max(leftDeep, rightDeep) + 1;
  }
  deep(root);
  return max;
};

//module.exports =
