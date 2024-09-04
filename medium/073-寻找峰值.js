/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 对于所有有效的 i 都有 nums[i] != nums[i + 1]

// 1. 这道题有个先决条件，就是 -1 和 length 下标为 -∞，那么可以确定的是 -1 到 0 和 length - 1 到 length 一定是上升和下降
// 2. 比较 中点 和 中点+1 下标的大小，如果中点更大，那么说明中点可能处于山峰或者下坡半山腰，反之

// 意思在于，这个题就是不断地找上坡和下坡，如果当前是下坡1，那么接下来又找到一个下坡2，那可以直接丢弃当前下坡1，保留下坡2
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = ((l + r) / 2) >> 0;
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
      continue;
    }
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
      continue;
    }
  }
  return l;
};
console.log(findPeakElement([1, 3, 5, 2, 6, 3, 5, 2, 4]));
// @lc code=end

//module.exports = [-oo,1,3,5,2,6,3,5,2,4,-oo]---
