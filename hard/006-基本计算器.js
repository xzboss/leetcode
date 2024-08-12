/**
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

示例 1：

输入：s = "1 + 1"
输出：2
示例 2：

输入：s = " 2-1 + 2 "
输出：3
示例 3：

输入：s = "(1+(4+5/2-1)-3)+(6+8)"
输出：
 */ //1 + 4 5 2 1
/** //( ( + / - )
 * @param {string} s
 * @return {number}
 */
// var calculate = function (s) {
//   const nums = []
//   const ops = []
//   s = s.replace(/ /g, '')
//   function fun(a, b, operate) {
//     switch (operate) {
//       case '+':
//         return a + b
//       case '-':
//         return a - b
//       case '*':
//         return a * b
//       case '/':
//         return a / b
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     // 正括号直接入
//     if (s[i] === '(') {
//       ops.push(s[i])
//       continue
//     }
//     // 反括号处理
//     if (s[i] === ')') {
//       const tempNum = [nums.pop()]
//       const tempOps = []
//       while (ops[ops.length - 1] !== '(') {
//         tempOps.push(ops.pop())
//         tempNum.push(nums.pop())
//       }
//       ops.pop()
//       let result = tempNum.pop()
//       while (tempOps.length > 0) {
//         result = fun(result, tempNum.pop(), tempOps.pop())
//       }
//       nums.push(result)
//       continue
//     }
//     // 符号入栈
//     if (isNaN(s[i])) {
//       ops.push(s[i])
//       //有符号数字
//       if (nums.length === 0 || s[i - 1] === '(') {
//         nums.push(0)
//       }
//     } else {
//       // 多位数处理
//       let num = s[i]
//       while (!isNaN(s[i + 1]) && i < s.length) {
//         num += s[i + 1]
//         i++
//       }
//       nums.push(num * 1)
//       // 如果是 * / 先处理一部分
//       if (ops[ops.length - 1] === '/' || ops[ops.length - 1] === '*') {
//         const b = nums.pop()
//         const a = nums.pop()
//         nums.push(fun(a, b, ops.pop()))
//       }
//     }
//   }
//   // 括号处理完如果还没算完
//   while (ops.length > 0) {
//     nums.unshift(fun(nums.shift(), nums.shift(), ops.shift()))
//   }
//   return nums[0]
// }

// console.log(calculate('(1 + (-1))'))
// console.log(calculate('2-1 + 2 '))
// console.log(calculate('(-1+(4+5/2-1)-3)+(6+(-8))'))
console.log(calculate('1+5-4'))

//module.exports = 1+(-9)+8
