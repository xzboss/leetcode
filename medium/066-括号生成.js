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
// 初步思路，先正后反依次放置，以反括号放置位置为回溯点
var generateParenthesis = function (n) {
  const result = [];
  const used = new Array(2 * n).fill(false);
  function dfs(start, path, used, depth) {
    if (depth === 2 * n) {
      return result.push(path.join(""));
    }
    for (let i = start; i < 2 * n; i++) {
      if (!used[i]) {
        path.push(start % 2 === 0 ? "(" : ")");
        used[i] = true;
        dfs(i + 1, path, used, depth + 1);
        path.pop();
        used[i] = false;
      }
    }
  }
  dfs(0, [], used, 0);
  return result;
};
console.log(JSON.stringify(generateParenthesis(3)));
//module.exports =
