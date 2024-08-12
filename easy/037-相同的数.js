




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	if (p === q) return true
	const queue1 = [p]
	const queue2 = [q]
	while (queue1.length || queue2.length) {
		const p = queue1.shift()
		const q = queue2.shift()
		if (!p || !q || p.val !== q.val) return false
		if (p.left || q.left) {
			queue1.push(p.left)
			queue2.push(q.left)
		}
		if (p.right || q.right) {
			queue1.push(p.right)
			queue2.push(q.right)
		}
	}
	return true
};


// 递归
var isSameTree = function (p, q) {
	if (!p || !q) return q === p
	if (p.val !== q.val) return false
	return isSameTree(p.left, q.left) && isSameTree(q.right, p.right)
};






//module.exports = 