/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;
  if (k > nums.length / 2) {
    k = nums.length - k;
    while (k-- > 0) nums.push(nums.shift());
  } else {
    while (k-- > 0) nums.unshift(nums.pop());
  }
  return nums;
};

// 当数组过于大时，push等操作会极其耗时
// 可以通过多次翻转来轮转
// 比如
/**
1, 2, 3, 4, 5
5, 4, 3, 2, 1
以 3 为中点两边再次翻转
4, 5, 3, 1, 2
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  function rotate(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  rotate(0, nums.length - 1);
  rotate(0, k - 1);
  rotate(k, nums.length - 1);
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 5));
//module.exports =
