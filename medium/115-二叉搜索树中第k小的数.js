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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
	let number;
	const deep = (root) => {
		if (!root || number !== undefined) {
			return;
		}
		deep(root.left);
		if (--k === 0) {
			number = root.val;
		}
		deep(root.right);
	};
	deep(root);
	return number;
};
const root = { val: 3, left: { val: 1 }, right: { val: 4, right: { val: 2 } } };
console.log(kthSmallest(root, 1));

//module.exports =

/**
 *         3
 *      1     4
 *               2
 */
