/**
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

示例 1：

输入：n = 19
输出：true
解释：
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
示例 2：

输入：n = 2
输出：false
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// 思路一样为什么我的就这么久
function getSum(num) {
  let sum = 0
  while (num > 0) {
    sum += (num % 10) ** 2
    num = Math.floor(num / 10)
  }
  return sum
}
var isHappy = function (n) {
  const map = {}
  while (n !== 1) {
    n = getSum(n)
    if (map[n] !== undefined) return false
    map[n] = n
  }
  return true
}
console.log(isHappy(19))
console.log(isHappy(2))
