/**
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 我最开始其实也想到了类似used1去记录前面的数字是否已经选择，但是判断还是会一个不少的执行，虽然不执行操作，但是任然空转循环了
var permute = function (nums) {
  const result = [];
  if (nums.length < 1) return result;
  function dfs(ans, used) {
    if (ans.length === nums.length) {
      return result.push([...ans]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        ans.push(nums[i]);
        used[i] = true;
        dfs(ans, used);
        ans.pop();
        used[i] = false;
      }
    }
  }
  dfs([], new Array(nums.length).fill(false));
  return result;
};
console.log(JSON.stringify(permute([1, 2, 3])));

//module.exports =
