/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let multi = 1;
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else {
      multi *= nums[i];
    }
  }
  if (zeros >= 2) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
  if (zeros === 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) nums[i] = multi;
      else nums[i] = 0;
    }
  }
  if (zeros === 0) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = multi / nums[i];
    }
  }
  return nums;
};

// 前缀积 题目说明输出的额外数组不算空间复杂度，所以可以有一个 n 的长度的辅助数组
var productExceptSelf = function (nums) {
  const suffix = [1];
  for (let i = nums.length - 1; i > 0; i--) {
    suffix.unshift(suffix[0] * nums[i]);
  }
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    suffix[i] *= prefix;
    prefix *= nums[i];
  }
  return suffix;
};
console.log(productExceptSelf([1, 2, 3, 4]));

//module.exports =
