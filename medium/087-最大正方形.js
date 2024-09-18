/**
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

 

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
/**
### dp 意义
dp[i][j] 表示以dp[i][j]作为右下角所能组成的最大正方形边长
### dp 关系
1. 当前值matrix[i][j] === 0，那组成不了正方形，直接置为0
2. 当前值matrix[i][j] === 1
     - 如果左边，上边，左上对角这三个点都能组成正方形，那 dp[i][j] 只需要取三者的最小值＋1作为边长即可
     - 如果上述三点任意一个不满足，那变成最大只能为1即本身
 */

var maximalSquare = function (matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i > 0 && j > 0) {
        const edge = Number(matrix[i][j]);
        matrix[i][j] = edge === 0 ? 0 : Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + edge;
      }
      max = Math.max(matrix[i][j], max);
    }
  }
  return max ** 2;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "0", "1", "1"],
    ["1", "1", "1", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "1", "1", "1"],
  ])
);

//module.exports =
