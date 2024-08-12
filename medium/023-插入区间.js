
/**
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
示例 4：

输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
示例 5：

输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]

 */


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  if (newInterval.length === 0) return intervals
  const [L, R] = newInterval
  if (R < intervals[0][0]) {
    intervals.unshift(newInterval)
    return intervals
  }
  if (intervals[intervals.length - 1][1] < L) {
    intervals.push(newInterval)
    return intervals
  }
  for (let i = 0; i < intervals.length; i++) {
    //无交集
    if (intervals[i][1] < L && R < intervals[i + 1][0]) {
      intervals.splice(i + 1, 0, newInterval)
      return intervals
    }
    //起点
    if (intervals[i][1] >= L) {
      let j = i + 1
      //终点 + 1
      while (j < intervals.length && intervals[j][0] <= R) {
        j++
      }
      intervals.splice(i, j - i, [Math.min(intervals[i][0], L), Math.max(intervals[j - 1][1], R)])
      return intervals
    }
  }
};
console.log(insert([[1, 3], [6, 9]], [2, 5]))
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
console.log(insert([], [5, 7]))

console.log(insert([[1, 5]], [2, 7]))
console.log(insert([[1, 5], [6, 8]], [5, 6]))
console.log(insert([[1, 5]], [0, 3]))
console.log(insert([[3, 5], [12, 15]], [6, 6]))
console.log(insert([[3, 5], [12, 15]], [1000, 9999]))
console.log(insert([[3, 5], [12, 15]], [1, 2]))
console.log(insert([[3, 5], [12, 15]], [7, 8]))



// 最快做法
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const res = [];
  let i = 0;
  const len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) { // 当前遍历的是蓝左边的，不重叠的区间
      res.push(intervals[i]);
      i++;
  }

  while (i < len && intervals[i][0] <= newInterval[1]) { // 当前遍历是有重叠的区间
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
      i++;
  }
  res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res

  while (i < len) {                 // 在蓝右边，没重叠的区间
      res.push(intervals[i]);
      i++;
  }

  return res;
}




//module.exports = 