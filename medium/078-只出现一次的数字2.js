/**
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。


示例 1：

输入：nums = [2,2,3,2]
输出：3
示例 2：

输入：nums = [0,1,0,1,0,1,99]
输出：99
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. 用二进制表示3进制
// 2. 首先我们知道，异或的特性是本身进行2次运算之后会被消灭掉，这也类似2进制的特性
// 3. 要表示3进制，我们就得建立一个规则，这个规则在本身进行3次运算之后会被消灭掉
// 我们可以用 两位二进制来表示三进制，比如 00 = 0，01 = 1， 10 = 2， 00 = 3
// 这两位并不是如书写般连在一起，而是垂直的两个数，相互依赖从而改变状态

var singleNumber = function (nums) {
  let x = 0; // 第一位集合
  let y = 0; // 第二位集合
  for (const n of nums) {
    y = ~x & (y ^ n);
    x = ~y & (x ^ n);
  }
  return y;
};
console.log(singleNumber([2, 2, 3, 2]));

// 第二种解法，用一个长度32的数组去记录每一位出现的次数
var singleNumber = function (nums) {
  const times = new Array(32).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < 32; j++) {
      times[j] += nums[i] & 1;
      nums[i] >>>= 1;
    }
  }
  let res = 0;
  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] % 3;
  }
  for (let i = 0; i < times.length; i++) {
    res <<= 1;
    res |= times[times.length - 1 - i];
  }
  return res;
};
console.log(singleNumber([2, 2, 3, 2]));

// 第三种解法，直接记录数字次数
var singleNumber = function (nums) {
  const times = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (times.has(n)) {
      if (times.get(n) === 2) {
        times.delete(n);
        continue;
      }
      times.set(n, times.get(n) + 1);
    } else {
      times.set(n, 1);
    }
  }
  return times.keys().next().value;
};
console.log(singleNumber([2, 2, 3, 2]));
//module.exports =
