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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	if (!root) return root
	let pre = { right: null }
	function dnf (root) {
		let tempRight = root.right || null
		pre.right = root
		pre = pre.right
		if (root.left) {
			dnf(root.left)
			root.left = null
		}
		tempRight && dnf(tempRight)
	}
	dnf(root)
	return root
};


//遍历的方法：将根节点右子树放到左节点右子树最后一个右节点
var flatten = function (root) {
	while (root) {
		if (root.left) {
			let p = root.left
			while (p.right) {
				p = p.right
			}
			p.right = root.right
			root.right = root.left
			root.left = null
		}
		root = root.right
	}
};