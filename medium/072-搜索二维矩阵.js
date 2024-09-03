/**
给你一个满足下述两条属性的 m x n 整数矩阵：

每行中的整数从左到右按非严格递增顺序排列。
每行的第一个整数大于前一行的最后一个整数。
给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

 

示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length - 1;
//   const n = matrix[0].length - 1;
//   let l = 0;
//   let r = m;
//   while (l <= r) {
//     const mid = ((l + r) / 2) >> 0;
//     if (target > matrix[mid][n]) {
//       l = mid + 1;
//       continue;
//     }
//     if (target < matrix[mid][0]) {
//       r = mid - 1;
//       continue;
//     }
//     let _l = 0;
//     let _r = n;
//     while (_l <= _r) {
//       const _mid = ((_l + _r) / 2) >> 0;
//       if (target > matrix[mid][_mid]) {
//         _l = _mid + 1;
//         continue;
//       }
//       if (target < matrix[mid][_mid]) {
//         _r = _mid - 1;
//         continue;
//       }
//       return true;
//     }
//     return false;
//   }
//   return false;
// };
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

//module.exports =
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0,
    j = matrix[0].length - 1;
  while (i < matrix.length && j > -1) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
