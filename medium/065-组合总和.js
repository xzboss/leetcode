/**
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

 

示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
示例 3：

输入: candidates = [2], target = 1
输出: []
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 第一次运行 100% 第二次 50%....
// 题解大部分都是减法形式，我写的加法形式
var combinationSum = function (candidates, target) {
  const result = [];
  if (candidates.length < 1) return result;

  candidates.sort((a, b) => a - b);
  function dfs(start = 0, sum = 0, path = []) {
    if (sum === target) {
      result.push([...path]);
      return true;
    }
    for (let i = start; i < candidates.length; i++) {
      let finished;
      sum += candidates[i];
      path.push(candidates[i]);
      if (sum <= target) {
        finished = dfs(i, sum, path);
      }
      sum -= candidates[i];
      path.pop();
      // 由于已经排序，本层超过target,或者下层已完成，都可以剪掉本层
      if (sum > target || finished) break;
    }
  }
  dfs();
  return result;
};
console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7)));
//module.exports =

// // 官网，我是没看懂他怎么剪枝了，他说剪了，运行时间比我的还久；
// var combinationSum = function(candidates, target) {
//     const ans = [];
//     const dfs = (target, combine, idx) => {
//         if (idx === candidates.length) {
//             return;
//         }
//         if (target === 0) {
//             ans.push(combine);
//             return;
//         }
//         // 直接跳过
//         dfs(target, combine, idx + 1);
//         // 选择当前数
//         if (target - candidates[idx] >= 0) {
//             dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
//         }
//     }

//     dfs(target, [], 0);
//     return ans;
// };