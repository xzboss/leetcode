function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums, start = 0, end = nums.length - 1) => {
	if (start > end) {
		return null;
	}
	const mid = (start + end) >> 1;
	const root = new TreeNode(nums[mid]);
	root.left = sortedArrayToBST(nums, start, mid - 1);
	root.right = sortedArrayToBST(nums, mid + 1, end);
	return root;
};
console.log(JSON.stringify(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7])));

//module.exports =

//module.exports =