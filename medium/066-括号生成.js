/**
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
// 1. 暴力；列举出所有，再进行排除
var generateParenthesis = function (n) {
  const result = [];
  function dfs(root, deep, str, lNum, rNum) {
    if (deep === 2 * n) return result.push(str);
    root.left = { left: "(", right: ")" };
    root.right = { left: "(", right: ")" };
    lNum > 0 && dfs(root.left, deep + 1, str + "(", lNum - 1, rNum);
    rNum > 0 && dfs(root.left, deep + 1, str + ")", lNum, rNum - 1);
  }
  dfs({ left: "(", right: ")" }, 0, "", n, n);
  function verify(str) {
    let lNum = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        lNum++;
      } else if (lNum > 0) {
        lNum--;
      } else {
        return false;
      }
    }
    return true;
  }
  const res = [];
  for (let i = 0; i < result.length; i++) {
    if (verify(result[i])) {
      res.push(result[i]);
    }
  }
  return res;
};
console.log(JSON.stringify(generateParenthesis(3)));
//module.exports =
