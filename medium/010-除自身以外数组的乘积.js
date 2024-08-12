/**
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路(看)：先遍历两次，得到两个数组，两个数组与原数组下标相同的分别为原数组的前缀积和后缀积，最后遍历一次相乘两个积，也可以在得到第二个缀积时计算答案
var productExceptSelf = function(nums) {
  const prefix = [1]
  let temp = 1
  for (let i = 0; i < nums.length - 1; i++) {
    prefix.push(prefix[i] * nums[i])
  }
  
  for (let i = nums.length - 1; i > 0; i--) {
    temp *= nums[i]
    prefix[i - 1] *= temp
  }
  return prefix
};
const arr = [1,2,3,4]

console.log(productExceptSelf(arr))
