/**
输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25    
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 1 , 2147483647 超时
var myPow = function (x, n) {
  if (n == 0) return 1;
  let temp = Math.abs(n);
  let ans = 1;
  while (temp > 0) {
    ans *= x;
    temp--;
  }
  return n > 0 ? ans : 1 / ans;
};

// 快速幂
// 道理: 比如 2 ** 9 = (2 ** (8 * 1)) * (2 ** (4 * 0)) * (2 ** (2 * 0)) * (2 ** (1 * 1))，9 的二进制 1001
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let ans = 1;
  while (n > 0) {
    ans = ans * x ** (n & 1);
    x = x * x;
    n = Math.floor(n / 2);
  }
  return ans;
};
console.log(myPow(2, 5));

//module.exports =
