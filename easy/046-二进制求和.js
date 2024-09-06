/**
给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。


示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//   let carry = 0;
//   let str = "";
//   for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
//     const sum = Number(i >= 0 ? a[i] : 0) + Number(j >= 0 ? b[j] : 0) + carry;
//     str = (sum % 2) + str;
//     carry = sum >= 2 ? 1 : 0;
//   }
//   return (carry === 1 ? "1" : "") + str;
// };

// 业务写法
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary("11", "1011"));

//module.exports =
