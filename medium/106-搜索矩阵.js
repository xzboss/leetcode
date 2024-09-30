/**
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target
该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
 
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > target) return false;
    let l = 0,
      r = matrix[0].length - 1,
      mid;
    while (l <= r) {
      mid = ((l + r) / 2) >> 0;
      if (matrix[i][mid] === target) return true;
      if (matrix[i][mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return false;
};

// 贪心思路，从左下或者右边上开始（因为要保证通过此数能舍弃一行或一列），不管此数大小于target，都可以直接舍弃掉本行或本列
var searchMatrix = function (matrix, target) {
  let i = 0,
    j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);

//module.exports =
