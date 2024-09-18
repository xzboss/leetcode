/**
请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。
 

示例 1：


输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：true
示例 2：

输入：board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：false
解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 这题与我最初想的思路一致：分别记录每行每列每方格已经用过的数
// 1. 哈希
var isValidSudoku = function (board) {
  const row = new Map();
  const col = new Map();
  const area = new Map();
  for (let i = 0; i < 10; i++) {
    row.set(i, new Set());
    col.set(i, new Set());
    area.set(i, new Set());
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === "-" || board[i][j] === ".") continue;
      const n = board[i][j];
      const areaIdx = ((i / 3) >> 0) * 3 + ((j / 3) >> 0);
      if (row.get(i).has(n) || col.get(j).has(n) || area.get(areaIdx).has(n)) {
        return false;
      }
      row.get(i).add(n);
      col.get(j).add(n);
      area.get(areaIdx).add(n);
    }
  }
  return true;
};
//2. 数组
var isValidSudoku = function (board) {
  const row = new Array(9).fill(0).map(() => new Array(9).fill(false));
  const col = structuredClone(row);
  const area = structuredClone(row);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === "-" || board[i][j] === ".") continue;
      const n = board[i][j];
      const areaIdx = ((i / 3) >> 0) * 3 + ((j / 3) >> 0);
      if (row[i][n] || col[j][n] || area[areaIdx][n]) {
        return false;
      }
      row[i][n] = true;
      col[j][n] = true;
      area[areaIdx][n] = true;
    }
  }
  return true;
};
// 3. 采用位运算进行压缩
var isValidSudoku = function (board) {
  const row = new Array(9).fill(0);
  const col = new Array(9).fill(0);
  const area = new Array(9).fill(0);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === "-" || board[i][j] === ".") continue;
      const n = Number(board[i][j]);
      const areaIdx = ((i / 3) >> 0) * 3 + ((j / 3) >> 0);
      if (((row[i] | col[j] | area[areaIdx]) >>> n) & 1) {
        return false;
      }
      row[i] |= 1 << n;
      col[j] |= 1 << n;
      area[areaIdx] |= 1 << n;
    }
  }
  return true;
};
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
//module.exports =
