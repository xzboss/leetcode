/**
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [4,5,6,7,2,3], target = 0

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let k = nums.length - 1;
//   // 花费 logn 寻找 k
//   if (nums[0] >= nums[nums.length - 1]) {
//     let l = 0;
//     let r = nums.length - 1;
//     while (l < r) {
//       const mid = ((l + r) / 2) >> 0;
//       if (mid === l) {
//         k = l;
//         break;
//       }
//       if (nums[mid] < nums[l]) {
//         r = mid;
//       }
//       if (nums[mid] > nums[l]) {
//         l = mid;
//       }
//     }
//   }
//   let l = target < nums[0] ? k + 1 : 0;
//   let r = target < nums[0] ? nums.length - 1 : k;
//   while (l <= r) {
//     const mid = ((l + r) / 2) >> 0;
//     if (nums[mid] === target) return mid;
//     if (nums[mid] < target) {
//       l = mid + 1;
//     }
//     if (nums[mid] > target) {
//       r = mid - 1;
//     }
//   }
//   return -1;
// };
// console.log(search([1, 3], 3));
//module.exports = 8 9 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 每次二分都会至少存在一个有序区间，判断target是否在这个有序区间，不在去另一区间继续二分
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = ((l + r) / 2) >> 0;
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      nums[l] <= target && target <= nums[mid] ? (r = mid - 1) : (l = mid + 1);
    } else {
      nums[mid] <= target && target <= nums[r] ? (l = mid + 1) : (r = mid - 1);
    }
  }
  return -1;
};
console.log(search([5, 1, 3], 5));
