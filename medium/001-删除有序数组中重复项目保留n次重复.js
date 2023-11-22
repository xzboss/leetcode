/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums, n) {
  if (nums.length < n + 1) {
    return
  }
  let point = n
  for (let i = n; i < nums.length; i++) {
    if (nums[i] != nums[point - n]) {
      nums[point++] = nums[i]
    }
  }
  nums.length = point
}
const nu = [1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4]
removeDuplicates(nu, 3)
console.log(nu)
