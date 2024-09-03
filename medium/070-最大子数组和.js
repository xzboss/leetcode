/**
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组
是数组中的一个连续部分。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力枚举法，超时
// var maxSubArray = function (nums) {
//   let start = 0;
//   let end = 0;
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum > max) {
//         start = i;
//         end = j;
//         max = sum;
//       }
//     }
//   }
//   return max;
// };
// console.log(maxSubArray([-2,1]));

// 动态规划
var maxSubArray = function (nums) {
  const dp = new Array(nums.length).fill(nums[0]);
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
    max = Math.max(dp[i], max);
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane :对dp数组的优化，空间复杂度为1
// 其实这里有用的只是前面一个为终点的最大值
var maxSubArray = function (nums) {
  let max = nums[0];
  let dp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    max = Math.max(dp, max);
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
