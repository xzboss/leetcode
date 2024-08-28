/**
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  if (k < 1 || n < k) return result;
  function dfs(start, ans) {
    if (ans.length === k) {
      result.push([...ans]);
    }
    for (let i = start; i <= n; i++) {
      if (n - i + 1 + ans.length < k) return; // 节点数不够，直接放弃回溯
      ans.push(i);
      dfs(i + 1, ans);
      ans.pop();
    }
  }
  dfs(1, []);
  return result;
};
console.log(JSON.stringify(combine(4, 2)));
//module.exports =
