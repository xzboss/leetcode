



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
// 二叉搜索树：左节点 < 根节点 < 右节点
// 以前序遍历的形式将节点存储起来，在遍历计算最小差值
var getMinimumDifference = function (root) {
	let min = Number.MAX_SAFE_INTEGER
	const arr = []
	function dfs (root) {
		if (!root) return
		dfs(root.left)
		arr.push(root.val)
		dfs(root.right)
	}
	dfs(root)
	for (let i = 1; i < arr.length; i++) {
		min = Math.min(min, arr[i] - arr[i - 1])
	}
	return min
};

// 直接比较左节点的右子树最右节点 和右节点的左子树最左节点
var getMinimumDifference = function (root) {
	let min = Number.MAX_SAFE_INTEGER
	function dfs (root) {
		if (!root) return
		let left = root.left
		let right = root.right
		while (left && left.right) {
			left = left.right
		}
		while (right && right.left) {
			right = right.left
		}
		min = Math.min(min, left ? root.val - left.val : min, right ? right.val - root.val : min)
		dfs(root.left)
		dfs(root.right)
	}
	dfs(root)
	return min
};

// DFS 中序遍历中途计算最小值
var getMinimumDifference = function (root) {
	let min = Number.MAX_SAFE_INTEGER
	let pre = Number.MIN_SAFE_INTEGER
	function dfs (root) {
		if (!root) return
		dfs(root.left)
		min = Math.min(min, root.val - pre)
		pre = root.val
		dfs(root.right)
	}
	dfs(root)
	return min
};








//module.exports = 