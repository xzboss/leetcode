





// 1. 中序遍历，然后找到下表k就行，损失空间 O（n）
// 2. 中途解决
var kthSmallest = function (root, k) {
	let res, n = 0
	function dfs (root) {
		if (!root) return 1
		dfs(root.left)
		if (++n === k) {
			res = root.val
			return
		}
		dfs(root.right)
	}
	dfs(root)
	return res
};




//module.exports = 