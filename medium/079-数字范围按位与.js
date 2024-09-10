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
// 1. 一个一个与 : 超时
var rangeBitwiseAnd = function (left, right) {
  let ans = left;
  for (let i = left; i <= right; i++) {
    ans &= i;
  }
  return ans;
};

// 2.由于数是连续的，所以他们的位与结果是他们的公共前缀
// 采用右移方式去做
var rangeBitwiseAnd = function (left, right) {
  let shift = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};

// 3. 任然是公共前缀，但是是倒序与,BrianKernighan算法
var rangeBitwiseAnd = function (left, right) {
  while (left < right) {
    right = right & (right - 1);
  }
  return right;
};
console.log(rangeBitwiseAnd(1, 2));
// @lc code=end 11110011 11110010
