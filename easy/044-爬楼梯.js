






/**
 * @param {number} n
 * @return {number}
 */
const map = {}
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (map[n]) {
        return map[n]
    } else {
        const sum = climbStairs(n - 1) + climbStairs(n - 2)
        map[n] = sum
        return sum

    }
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n === 1) {
			return 1
	}
	if (n === 2) {
			return 2
	}
	let pre = 1
	let cur = 2
	for (let i = 3; i <= n; i++) {
			const temp = cur
			cur += pre
			pre = temp
	}
	return cur
};



//module.exports = 