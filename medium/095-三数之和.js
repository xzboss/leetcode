/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
    if (nums[i] + nums.at(-1) + nums.at(-2) < 0) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l++], nums[r--]]);
        while (nums[l] === nums[l - 1] && l < r) l++;
        while (nums[r] === nums[r + 1] && l < r) r--;
      } else if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      }
    }
  }
  return res;
};
console.log(JSON.stringify(threeSum([-100, -99, -1, 101, 198])));

//module.exports =[-100, -99, -1, 101, 198]
