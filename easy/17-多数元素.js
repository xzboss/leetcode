/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {}
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
    if (map[nums[i]] > nums.length / 2) {
      return nums[i]
    }
  }
}
console.log(majorityElement([1, 1, 1, 1, 1, 1, 12, 2, 1, 1, 3, 3, 3, 3]))
