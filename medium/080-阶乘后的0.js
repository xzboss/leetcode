/**
给定一个整数 n ，返回 n! 结果中尾随零的数量。

提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

 

示例 1：

输入：n = 3
输出：0
解释：3! = 6 ，不含尾随 0
示例 2：

输入：n = 5
输出：1
解释：5! = 120 ，有一个尾随 0
示例 3：

输入：n = 0
输出：0
 */

/**
 * @param {number} n
 * @return {number}
 */
// 1. 直接计算结果，然后再去计算尾随0
// 测试用例有 10000! 超出时间
var trailingZeroes = function (n) {
  let multi = BigInt(1);
  while (n > 0) {
    multi *= BigInt(n);
    n--;
  }
  const str = multi.toString();
  let p = str.length - 1;
  while (str[p] === "0") {
    p--;
  }
  return str.length - 1 - p;
};

// 对每个数进行因式分解，分解为 2 和 5
// 尾0的个数 min(2的个数, 5的个数)
var trailingZeroes = function (n) {
  let fives = 0;
  let twos = 0;
  while (n > 0) {
    let temp = n;
    while (temp % 2 === 0) {
      temp = Math.floor(temp / 2);
      twos++;
    }
    while (temp % 5 === 0) {
      temp = Math.floor(temp / 5);
      fives++;
    }
    n--;
  }
  return Math.min(fives, twos);
};

// 简化一下
// 例如 5!中有一个5，3个2（2，4），10!中有两个5，10个2（2，4，6，8） 所以质子5的个数不可能小于质子2的个数，所以尾数0个数就是5的个数
var trailingZeroes = function (n) {
  let fives = 0;
  while (n > 0) {
    let temp = n;
    while (temp % 5 === 0) {
      temp = Math.floor(temp / 5);
      fives++;
    }
    n--;
  }
  return fives;
};

//再简化
// 例如 n! = 1*2*3*4*(1*5)*6*7*8*9*(2*5)...(3*5)...(4*5)...((n-k)/5 * 5)...
var trailingZeroes = function (n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};
console.log(trailingZeroes(10000));
//module.exports =
