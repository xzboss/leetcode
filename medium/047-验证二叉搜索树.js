




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
const isValidBST = (root) => {
	let pre = Number.MIN_SAFE_INTEGER;
	const deep = (root) => {
		if (!root) return true;
		const l = deep(root.left);
		if (pre < root.val) {
			pre = root.val;
		} else {
			return false;
		}
		const r = deep(root.right);
		return l && r;
	};

	return deep(root);
};

// DFS ：給每个节点一个范围，如果不在这个范围就证明不是BST
// var isValidBST = function (root) {
// 	function dfs (root, min, max) {
// 		if (!root) return true
// 		if (min >= root.val || root.val >= max) return false
// 		return (dfs(root.left, min, root.val) && dfs(root.right, root.val, max))
// 	}
// 	return dfs(root, -Infinity, Infinity)
// };






//module.exports = 