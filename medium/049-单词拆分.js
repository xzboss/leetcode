



/**139
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// dp[i]代表前i个单词是否可以有字典组成
// 而dp[i]，是否被组成，取决于两部分，以j为分界：j前面是否被组成 和 j到i是否被组成
// l  		e  		e  		t  		c  		o  		d  		e
// 0  		1  		j  		3  		i  		5  		6  		7
// F      F     F     T     F     F     F     T
var wordBreak = function (s, wordDict) {
	const set = new Set(wordDict)
	const dp = new Array(s.length + 1).fill(false)
	dp[0] = true
	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && set.has(s.slice(j, i))) {
				dp[i] = true
				break
			}
		}
	}
	return dp[s.length]
};

// 不用slice
// 经实验，数组的slice是on，字符串的slice是o1，所以这里不用slice反而更慢
var wordBreak = function (s, wordDict) {
	const set = new Set(wordDict)
	const dp = new Array(s.length + 1).fill(false)
	dp[0] = true
	for (let i = 1; i <= s.length; i++) {
		let str = ''
		for (let j = i - 1; j >= 0; j--) {
			str = s[j] + str
			if (dp[j] && set.has(str)) {
				dp[i] = true
				break
			}
		}
	}
	return dp[s.length]
};







//module.exports = 