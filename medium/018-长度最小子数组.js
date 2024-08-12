/**
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和`大于等于` target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//首战滑动窗口，第一次题目看错了，以为是等于，但是大于等于都写出来了
var minSubArrayLen = function (target, nums) {
  let result = nums.length + 1
  let start = 0
  let end = 0
  let sum = 0
  while (start <= end && end < nums.length) {
    sum += nums[end]
    while (sum >= target && start <= end) {
      result = Math.min(end - start + 1, result)
      sum -= nums[start]
      start++
    }
    end++
  }
  return result === nums.length + 1 ? 0 : result
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))
