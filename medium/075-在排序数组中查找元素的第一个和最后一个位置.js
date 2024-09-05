/**
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 
1. 首先二分找到第一个等于target的数的下标，作为初始区间，记为[start, end]
    - 这个[start, end]一定是被包含在答案区间内或等于答案区间的
3. 然后摘掉这个下标将区间分为两段，分别对这两段进行查找
    - 只要查找到等于target的数的下标，就更新区间[start, end]，直到 l > r
其中，在进行区间查找前，可以先判断下当前区间对[start, end]的更新有没有意义，没有意义就不用找了
    - （比如最大都比end还小，最小都比start还大，这种区间就没必要再找了）
最后，处理一下没有找到的情况就可以返回了
 */

var searchRange = function (nums, target) {
  let start = nums.length - 1;
  let end = 0;
  function dfs(l, r) {
    if (l > r) return;
    const mid = ((l + r) / 2) >> 0;
    if (nums[mid] < target) {
      dfs(mid + 1, r);
    }
    if (nums[mid] > target) {
      dfs(l, mid - 1);
    }
    if (nums[mid] === target) {
      if (mid <= start) {
        start = mid;
        dfs(l, mid - 1);
      }
      if (mid >= end) {
        end = mid
        dfs(mid + 1, r);
      }
    }
  }
  dfs(0, nums.length - 1);
  return nums[start] === target ? [start, end] : [-1, -1];
};
console.log(searchRange([2,2], 2));

//module.exports =
// 官方思路：先找到第一个等于target的
// 再找到第一个大于target的数
// l 既是边界也是指针，所以可以公用遍历
// 进行两次二分