


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
// DFS 
var sumNumbers = function (root) {
	let result = 0
	function dfs (root, sum = 0) {
		if (!root) return
		sum = sum * 10 + root.val
		if (!root.left && !root.right) {
			result += sum
		}
		dfs(root.left, sum)
		dfs(root.right, sum)
	}
	dfs(root)
	return result
};


// BFS 
var sumNumbers = function (root) {
	if (!root) return 0
	const queue = [root]
	const sumStack = [root.val]
	let result = 0
	while (queue.length) {
		const node = queue.shift()
		const sum = sumStack.shift()
		if (!node.left && !node.right) {
			result += sum
		}
		if (node.left) {
			queue.push(node.left)
			sumStack.push(sum * 10 + node.left.val)
		}
		if (node.right) {
			queue.push(node.right)
			sumStack.push(sum * 10 + node.right.val)
		}
	}
	return result
};









//module.exports = 