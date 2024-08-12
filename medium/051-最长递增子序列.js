





/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i] 为第 0 到第 i项的最长递增子序列
// dp[i] 依赖前面比之小的 nums[j]对应的dp[j] 的最大值 + 1
// 所求：max(dp[i])
var lengthOfLIS = function (nums) {
	const dp = new Array(nums.length).fill(1)
	let max = 0
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		max = Math.max(dp[i], max)
	}
	return max
};


// 这个题有个新鲜的点
// 例子789 3456 12
// 维护一个最长子序列数组，但这个数组可能不存储真正的子序列，因为只需要长度即可
// 遍历 7 8 9 子序列数组变成 [7, 8, 9]，这时就说明 3 的长度子序列是已经存在的了
// 遍历到 3，这时候用二分去查找 3 应该所在的位置，子序列数组变成 [3, 8, 9]（虽然这不是子序列，但是长度是存在过的）
// 继续 二分 直到变成 [3, 4, 5, 6]，（这时说明 4 的长度存在过）
// 最后变成 [1, 2, 5, 6] 任然是 4 的长度
var lengthOfLIS = function (nums) {
	const tail = []
	for (let i = 0; i < nums.length; i++) {
		let L = 0
		let R = tail.length
		while (L < R) {
			const m = (L + R) >> 1
			if (nums[i] > tail[m]) {
				L = m + 1
			} else {
				R = m
			}
		}
		tail[L] = nums[i]
	}
	return tail.length
};





//module.exports = 