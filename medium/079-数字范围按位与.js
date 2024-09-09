/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// 1. 一个一个与
var rangeBitwiseAnd = function (left, right) {
    let ans = 0;
    for (let i = left; i <= right; i++) {
      ans &= i;
    }
    return ans;
  };
  // @lc code=end
  