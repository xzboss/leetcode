







/**
 * @param {number[]} nums
 * @return {number}
 */
// 这样好理解些：目前有3家，那么对于3家中的偷法只有，
// 1. 第三家不偷，取前两家里面偷到的最大值
// 2. 偷第三家，前一家不偷，取前前家能偷的最大值加上第三家
var rob = function (nums) {
	if (nums.length === 1) {
		return nums[0]
	}
	if (nums.length === 2) {
		return Math.max(nums[0], nums[1])
	}
	let prepre = nums[0]
	let pre = Math.max(nums[0], nums[1])
	let cur
	for (let i = 2; i < nums.length; i++) {
		cur = Math.max(nums[i] + prepre, pre);
		prepre = pre
		pre = cur
	}
	return cur
};
const arr = [2, 1, 1, 2]
console.log(rob(arr))




//module.exports = 