/**
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。

 

示例 1：

输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和 + hash表
var subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let preSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    count += map[preSum - k] || 0;
    map[preSum] = map[preSum] ? map[preSum] + 1 : 1;
  }
  return count;
};
console.log(subarraySum([1, 3, 4, 4], 8));
//module.exports =
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 以 i 为结尾的数组，[0,i] 区间如果存在 mid 满足 mid 的前缀和等于 preSum - k
// 那么 (mid, i] 区间的和一定等于 k