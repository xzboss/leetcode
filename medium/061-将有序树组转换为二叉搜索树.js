function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 思路：找到根节点，设置其左子树，设置其右子树，而子树可以递归求得
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
  if (start > end) {
    return null;
  }
  const mid = ((end + start) / 2) >> 0;
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, start, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, end);
  return root;
};
console.log(sortedArrayToBST([1, 2, 3, 4, 5]));
//module.exports =