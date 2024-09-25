/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i] - 1]) continue;
    let len = 0;
    let n = nums[i];
    while (map[n]) {
      len++;
      n++;
    }
    max = Math.max(max, len);
  }
  return max;
};
console.log(longestConsecutive([0, -1]));
//module.exports =
