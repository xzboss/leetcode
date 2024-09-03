/**
给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。

环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。

子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。

 

示例 1：

输入：nums = [1,-2,3,-2]
输出：3
解释：从子数组 [3] 得到最大和 3
示例 2：

输入：nums = [5,-3,5]
输出：10
解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
示例 3：

输入：nums = [3,-2,2,-3]
输出：3
解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路，他有两种情况
// 1. 不跨界最大子数组和，这个很好理解
// 2. 跨界的最大子数组和 = 整个数组和 - 最小子数组和 （最小子数组和不为整个数组和的情况）
// 3. 最小子数组和为整个数组的时候，最大子数组和就是 1 不跨界最大子数组和

var maxSubarraySumCircular = function (nums) {
  let max = -Infinity;
  let min = Infinity;
  let dpMax = 0;
  let dpMin = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    dpMax = Math.max(nums[i], dpMax + nums[i]);
    max = Math.max(dpMax, max);
    dpMin = Math.min(nums[i], dpMin + nums[i]);
    min = Math.min(min, dpMin);
    sum += nums[i];
  }
  return min === sum ? max : Math.max(max, sum - min);
};
console.log(maxSubarraySumCircular([-3,-2,-3]));
