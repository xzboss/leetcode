



/**
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 
 */

/**322
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 与差拆分单词类似
// 1能不能被组成，2能不能被组成，3能不能被组成
// 以3为例，3能被2和1组成，那就需要知道2能不能被组成
// dp[]则为最小个数
// 超时！！！！
var coinChange = function (coins, amount) {
	if (amount === 0) return 0
	const dp = new Array(amount + 1).fill(-1)
	const set = new Set(coins)
	for (let i = 1; i <= amount; i++) {
		if (set.has(i)) {
			dp[i] = 1
		} else {
			for (let j = 0; j < i; j++) {
				if (j + j > i) break
				if (dp[j] === -1 || dp[i - j] === -1) continue
				dp[i] = Math.min(dp[i] === -1 ? Infinity : dp[i], dp[j] + dp[i - j])
			}
		}
	}
	return dp[amount]
};



// 换一种角度看问题 他其实就是爬楼梯问题,
// 对于青蛙跳台阶，每次能跳 1阶 或 2阶，n阶数量就取决于跳到 n-1阶 和 n-2阶 的数量总和
// 对于这个题而言（以[1, 2, 5], 11为例），问题就转换成：青蛙每次能跳 1 或 2 或 5 阶，跳到11阶有多少种跳法
// 相应的 11 阶的数量也就取决于跳到（ 第6阶、第9阶、第10阶 数量 ）中的最小值 + 1
var coinChange = function (coins, amount) {
	const dp = new Array(amount + 1).fill(amount + 1)
	dp[0] = 0
	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			// 如果以 coins[j]为步长，前面不存在台阶，继续下一次（如果步长有序，则可 break）
			if (i < coins[j]) continue
			dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
		}
	}
	return dp[amount] > amount ? -1 : dp[amount]
};
console.log(coinChange([186, 419, 83, 408], 6249))






//module.exports = 