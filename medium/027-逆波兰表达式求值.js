/**
给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

注意：

有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。

示例 1：

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
示例 2：

输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
示例 3：

输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出：22
解释：该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const map = {
    '+': true,
    '-': true,
    '/': true,
    '*': true
  }
  function operate(a, b, operation) {
    switch (operation) {
      case '+':
        return a + b
      case '-':
        return b - a
      case '/':
        return (b / a) >> 0
      case '*':
        return a * b
    }
  }
  const stack = []
  const length = tokens.length
  for (let i = 0; i < length; i++) {
    if (map[tokens[i]]) {
      const a = stack.pop()
      const b = stack.pop()
      stack.push(operate(a, b, tokens[i]))
    } else {
      stack.push(tokens[i] * 1)
    }
  }
  return stack[0]
}
console.log(evalRPN(['2', '1', '+', '3', '*']))
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))

console.log(evalRPN(['4', '13', '5', '/', '+']))
console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']))

//module.exports =
