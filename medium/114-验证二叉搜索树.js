function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 1. 通过给一颗树范围来判定这颗树是否二叉搜索树
// const isValidBST = (root) => {
// 	const deep = (root, min, max) => {
// 		if (!root) return true;
// 		if (root.val <= min || root.val >= max) {
// 			return false;
// 		}
// 		return deep(root.left, min, root.val) && deep(root.right, root.val, max);
// 	};
// 	return deep(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// };

// 2. 二叉搜索树的中序遍历是有序的，即验证这颗树中序是否有序
const isValidBST = (root) => {
	let pre = Number.MIN_SAFE_INTEGER;
	const deep = (root) => {
		if (!root) return true;
		const l = deep(root.left);
		if (pre < root.val) {
			pre = root.val;
		} else {
			return false;
		}
		const r = deep(root.right);
		return l && r;
	};

	return deep(root);
};
const root = {
	val: 2,
	left: {
		val: 3,
	},
	right: { val: 3 },
};
console.log(isValidBST(root));
//module.exports =
