/**
 * @param {number[]} height
 * @return {number}
 */
// 这题问题在于问题转换
// 1. 边长最大时，积水量一定是最小的那条边所能承受的最大积水量
// 2. 边从小的那一边往中一次，又可以得到一个边所能承受的最大积水量
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    const distance = r - l;
    max = Math.max(max, distance * Math.min(height[l], height[r]));
    height[l] < height[r] ? l++ : r--;
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//module.exports =
