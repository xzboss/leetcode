




/**
 * 给定一个二叉树 root ，返回其最大深度。
二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
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
// 深度遍历
var maxDepth = function (root, max = 0) {
	if (!root) {
		return max
	}
	return Math.max(maxDepth(root.left, max + 1), maxDepth(root.right, max + 1))
};

// 层序遍历
var maxDepth = function (root) {
	if (!root) return 0
	const queue = [root]
	let depth = 0
	while (queue.length > 0) {
		let n = queue.length
		for (let i = 0; i < n; i++) {
			const node = queue.shift()
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		}
		depth++
	}
	return depth
};








//module.exports = 