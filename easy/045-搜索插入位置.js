/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 循环方式
// var searchInsert = function (nums, target) {
//   let l = 0;
//   let r = nums.length - 1;
//   while (l <= r) {
//     const mid = ((l + r) / 2) >> 0;
//     if (nums[mid] > target) {
//       r = mid - 1;
//       continue;
//     }
//     if (nums[mid] < target) {
//       l = mid + 1;
//       continue;
//     }
//     return mid;
//   }
//   return l;
// };

// 递归形式
var searchInsert = function (nums, target) {
  function dfs(l, r) {
    if (l > r) return l;
    const mid = ((l + r) / 2) >> 0;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      return dfs(l, mid - 1);
    }
    if (nums[mid] < target) {
      return dfs(mid + 1, r);
    }
  }
  return dfs(0, nums.length - 1);
};
console.log(searchInsert([1, 3, 5, 6], 7));
//module.exports =
