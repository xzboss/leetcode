




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
 * @return {number[][]}
 */

// BFS
var levelOrder = function (root) {
	if (!root) return []
	const res = []
	const queue = [root]
	while (queue.length) {
		const len = queue.length
		const temp = []
		for (let i = 0; i < len; i++) {
			const node = queue.shift()
			temp.push(node.val)
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}
		res.push(temp)
	}
	return res
};

//DFS
var levelOrder = function (root) {
	const res = []
	function dfs (root, depth = 0) {
		if (!root) return
		if (res[depth]) {
			res[depth].push(root.val)
		} else {
			res[depth] = [root.val]
		}
		dfs(root.left,depth + 1)
		dfs(root.right,depth + 1)
	}
	dfs(root)
	return res
};





//module.exports = 