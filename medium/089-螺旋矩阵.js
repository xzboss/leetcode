/**
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let i = 0;
  let j = -1;
  const res = [];
  while (matrix[i][j + 1] !== undefined) {
    while (j + 1 < matrix[0].length && matrix[i][j + 1] !== undefined) {
      setTag(i, ++j);
    }
    while (i + 1 < matrix.length && matrix[i + 1][j] !== undefined) {
      setTag(++i, j);
    }
    while (j - 1 >= 0 && matrix[i][j - 1] !== undefined) {
      setTag(i, --j);
    }
    while (i - 1 >= 0 && matrix[i - 1][j] !== undefined) {
      setTag(--i, j);
    }
  }
  function setTag(i, j) {
    res.push(matrix[i][j]);
    matrix[i][j] = undefined;
  }
  return res;
};
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
//module.exports =