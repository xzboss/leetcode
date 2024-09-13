/**
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

 

示例 1：


输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 1. 暴力穷举 超时
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rLen = obstacleGrid.length - 1;
  const cLen = obstacleGrid[0].length - 1;
  let res = 0;
  function dfs(i, j) {
    if (i < 0 || i > rLen || j < 0 || j > cLen) return;
    if (obstacleGrid[i][j] === 1) return;
    if (i === rLen && j === cLen) return res++;
    obstacleGrid[i][j] = 1;
    dfs(i + 1, j);
    dfs(i, j + 1);
    obstacleGrid[i][j] = 0;
  }
  dfs(0, 0);
  return res;
};

// 1. 动态规划
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rLen = obstacleGrid.length;
  const cLen = obstacleGrid[0].length;
  obstacleGrid[0][0] = obstacleGrid[0][0] ^ 1;
  for (let i = 0; i < rLen; i++) {
    for (let j = 0; j < cLen; j++) {
      if (i === 0 && j === 0) continue;
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
        continue;
      }
      if (i === 0) {
        obstacleGrid[0][j] = obstacleGrid[0][j - 1];
      } else if (j === 0) {
        obstacleGrid[i][0] = obstacleGrid[i - 1][0];
      } else {
        obstacleGrid[i][j] = obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j];
      }
    }
  }
  return obstacleGrid[rLen - 1][cLen - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
//module.exports =
