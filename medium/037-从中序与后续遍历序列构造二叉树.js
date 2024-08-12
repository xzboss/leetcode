





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	const map = new Map()
	for (let i = 0; i < inorder.length; i++) {
		map.set(inorder[i], i)
	}
	function dnf (l, r, L, R) {
		if (L > R || l > r) return null
		const val = postorder[r]
		const root = { val, left: null, right: null }
		const i = map.get(val)
		root.right = dnf(i - R + r, r - 1, i + 1, R)
		root.left = dnf(l, i - R + r - 1, L, i - 1)
		return root
	}
	return dnf(0, postorder.length - 1, 0, inorder.length - 1)
};
buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])






//module.exports = 