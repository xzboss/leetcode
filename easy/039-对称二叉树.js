






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
// 层序遍历
var isSymmetric = function (root) {
	if (!root) return true
	const queue1 = [root.left]
	const queue2 = [root.right]
	while (queue1.length || queue2.length) {
		const node1 = queue1.shift()
		const node2 = queue2.shift()
		if (!node1 && !node2) {
			continue
		}
		if (!node1 || !node2) {
			return node1 === node2
		}
		if (node1.val !== node2.val) {
			return false
		}
		queue1.push(node1.left)
		queue1.push(node1.right)
		queue2.push(node2.right)
		queue2.push(node2.left)
	}
	return true
};


// 递归
var isSymmetric = function (root) {
	if (!root) return true
	return dfs(root.left, root.right)
};
function dfs (left, right) {
	if (left === right) {
		return true
	}
	if (!left || !right) {
		return false
	}
	if (left.val !== right.val) {
		return false
	}
	return dfs(left.left, right.right) && dfs(left.right, right.left)
}


//module.exports = 