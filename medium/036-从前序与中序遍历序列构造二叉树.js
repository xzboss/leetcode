








/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 其实关键点就在于确定前序遍历中的子树区间
var buildTree = function (preorder, inorder) {
	const map = new Map()
	for (let i = 0; i < inorder.length; i++) {
		map.set(inorder[i], i)
	}
	return getNode(preorder, map, 0, preorder.length - 1, 0, inorder.length - 1)
};
function getNode (preorder, map, l, r, L, R) {
	if (L > R || l > r) return null
	const val = preorder[l]
	const root = { val, left: null, right: null }
	const i = map.get(val)
	root.left = getNode(preorder, map, l + 1, i - L + l, L, i - 1)
	root.right = getNode(preorder, map, i - L + l + 1, r, i + 1, R)
	return root
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

//module.exports = 