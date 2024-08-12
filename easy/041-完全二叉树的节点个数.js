



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
// BFS
var countNodes = function (root) {
	if (!root) return 0
	const queue = [root]
	let sum = 1
	while (queue.length) {
		const node = queue.shift()
		if (node.right) {
			queue.push(node.left)
			queue.push(node.right)
			sum += 2
		} else {
			return sum + (node.left ? 1 : 0)
		}
	}
};


//DFS
var countNodes = function (root) {
	if (!root) return 0
	return 1 + countNodes(root.left) + countNodes(root.right)
};
// DFS plus：不会









//module.exports = 