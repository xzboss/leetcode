


// BFS
var averageOfLevels = function (root) {
	if (!root) return []
	const result = []
	const queue = [root]
	while (queue.length) {
		const len = queue.length
		let sum = 0
		for (let i = 0; i < len; i++) {
			const node = queue.shift()
			sum += node.val
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}
		result.push(sum / len)
	}
	return result
};

// DFS 维护一个 总值数组 和 深度个数数组 ，再去遍历这两个数组求结果数组
var averageOfLevels = function (root) {
	const sums = []
	const counts = []
	function dfs (root, depth = 0) {
		if (!root) return
		sums[depth] = sums[depth] === undefined ? root.val : sums[depth] + root.val
		counts[depth] = counts[depth] === undefined ? 1 : counts[depth] + 1
		dfs(root.left, depth + 1)
		dfs(root.right, depth + 1)
	}
	dfs(root)
	for (let i = 0; i < counts.length; i++) {
		sums[i] = sums[i] / counts[i]
	}
	return sums
};







//module.exports = 