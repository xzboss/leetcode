



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
 * @param {number} targetSum
 * @return {boolean}
 */
// DFS
var hasPathSum = function (root, targetSum, curN = 0) {
	if (!root) return false
	curN += root.val
	if (!root.left && !root.right && curN === targetSum) return true
	return (hasPathSum(root.left, targetSum, curN) || hasPathSum(root.right, targetSum, curN))
};

// BFS
var hasPathSum = function (root, targetSum, curN = 0) {
	if (!root) return false
	const sumStack = [root.val]
	const queue = [root]
	while (queue.length) {
		const sum = sumStack.shift()
		const node = queue.shift()
		if (!node.left && !node.right && sum === targetSum) {
			return true
		}
		if (node.left) {
			queue.push(node.left)
			sumStack.push(sum + node.left.val)
		}
		if (node.right) {
			queue.push(node.right)
			sumStack.push(sum + node.right.val)
		}
	}
	return false
};








//module.exports = 