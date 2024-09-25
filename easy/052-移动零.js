/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0,
    fast;
  while (nums[slow] !== 0 && slow < nums.length) slow++;
  fast = slow;
  while (fast < nums.length) {
    while (nums[fast] === 0) fast++;
    if (fast === nums.length) return nums;
    [nums[slow], nums[fast]] = [nums[fast], 0];
    slow++;
    fast++;
  }
  return nums;
};
var moveZeroes = function (nums) {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
//module.exports =
