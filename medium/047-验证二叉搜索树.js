




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

const { node } = require("webpack");

// DFS 递归函数功能：中序遍历找
var isValidBST = function (root) {
	let pre = Number.MIN_SAFE_INTEGER
	function dfs (root) {
		if (!root) return
		const l = dfs(root.left)
		if (l) return true
		if (pre < root.val) {
			pre = root.val
		} else {
			return true
		}
		const r = dfs(root.right)
		return l && r
	}
	return !dfs(root)
};

// DFS ：給每个节点一个范围，如果不在这个范围就证明不是BST
var isValidBST = function (root) {
	function dfs (root, min, max) {
		if (!root) return true
		if (min >= root.val || root.val >= max) return false
		return (dfs(root.left, min, root.val) && dfs(root.right, root.val, max))
	}
	return dfs(root, -Infinity, Infinity)
};






//module.exports = 