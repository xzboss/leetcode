





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
 * @return {TreeNode}
 */
// 层序遍历
var invertTree = function (root) {
	if (!root) return null
	const queue = [root]
	while (queue.length) {
		const node = queue.shift()
		if (node.left) {
			queue.push(node.left)
		}
		if (node.right) {
			queue.push(node.right)
		}
		if (node.left || node.right) {
			const temp = node.left
			node.left = node.right
			node.right = temp
		}
	}
	return root
};

// 递归

var invertTree = function (root) {
	if (!root) { return null }
	[root.left, root.right] = [root.right, root.left]
	invertTree(root.left)
	invertTree(root.right)
	return root
};





//module.exports = 