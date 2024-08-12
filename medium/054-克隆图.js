




/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
	怎么感觉图和树一样，熟练掌握它的深度和广度遍历就可以解决大部分问题
 */
// DFS
var cloneGraph = function (node) {
	const map = new Map()
	function dfs (node) {
		if (!node) return node
		if (map.has(node)) return map.get(node)
		const cloneNode = new Node(node.val, [])
		map.set(node, cloneNode)
		for (let i = 0; i < node.neighbors.length; i++) {
			cloneNode.neighbors.push(dfs(node.neighbors[i]))
		}
		return cloneNode
	}
	return dfs(node)
};

// BFS
// 明明很简单的逻辑，但是为撒我看起来有点奇怪，🤭
var cloneGraph = function (node) {
	if (!node) return null
	const map = new Map()
	const queue = [node]
	map.set(node, new Node(node.val, []))
	while (queue.length) {
		const node = queue.shift()
		for (const neighbor of node.neighbors) {
			if (!map.has(neighbor)) {
				map.set(neighbor, new Node(neighbor.val, []))
				queue.push(neighbor)
			}
			map.get(node).neighbors.push(map.get(neighbor))
		}
	}
	return map.get(node)
};







//module.exports = 