var maxSubArray = function (nums) {
  let max = nums[0];
  let dp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    max = Math.max(max, dp);
  }
  return max;
};

//module.exports =
