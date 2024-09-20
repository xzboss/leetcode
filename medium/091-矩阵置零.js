/**
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

 

示例 1：


输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
示例 2：


输入：matrix = [[0,1,2,0],
               [3,4,5,2],
               [1,3,1,5]]
输出：[ [0,0,0,0],
       [0,4,5,0],
       [0,3,1,0]]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 空间 m + n
var setZeroes = function (matrix) {
  const row = new Set();
  const col = new Set();
  // 1 先找到有0的行和列
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }
    }
  }
  // 在填充
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (row.has(i) || col.has(j)) matrix[i][j] = 0;
    }
  }
  return matrix;
};

// 空间 1
var setZeroes = function (matrix) {
  // 先把0做标记
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === null) continue;
      if (matrix[i][j] === 0) {
        let row = 0;
        let col = 0;
        matrix[i][j] = null;
        while (row < matrix.length && matrix[row][j] !== 0) {
          matrix[row++][j] = null;
        }
        while (col < matrix[0].length && matrix[i][col] !== 0) {
          matrix[i][col++] = null;
        }
      }
    }
  }
  // 再替换标记
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === null) matrix[i][j] = 0;
    }
  }
  return matrix;
};
setZeroes([
  [0, 1, 0, 1],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]).map((item) => {
  console.log(JSON.stringify(item));
});
//module.exports =
