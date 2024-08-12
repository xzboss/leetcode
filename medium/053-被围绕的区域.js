





/**
 * @param {character[][]} board
 * return {void} Do not return anything, modify board in-place instead.
 */
/**
1. 第一反应就是 岛屿数量问题
2. 不同的是连接到边界的不算岛屿，所以思路也就来了
3. 遇到边界 O，递归将连接边界的岛屿进行标记 #
4. 然后遍历一次，将标记变 # 为 O ,将 O 变为 X
 */
var solve = function (board) {
	const row = board.length - 1
	const col = board[0].length - 1
	function dfs (board, i, j) {
		if (i > row || i < 0 || j > col || j < 0) return
		if (board[i][j] !== 'O') return
		board[i][j] = '#'
		dfs(board, i - 1, j)
		dfs(board, i + 1, j)
		dfs(board, i, j + 1)
		dfs(board, i, j - 1)
	}
	for (let i = 0; i <= row; i++) {
		for (let j = 0; j <= col; j++) {
			if ((i === row || i === 0 || j === col || j === 0) && board[i][j] === 'O') {
				dfs(board, i, j)
			}
		}
	}
	for (let i = 0; i <= row; i++) {
		for (let j = 0; j <= col; j++) {
			if (board[i][j] === '#') {
				board[i][j] = 'O'
			} else {
				board[i][j] = 'X'
			}
		}
	}
	return board
};

solve([
	["O", "X", "X", "O", "X"],
	["X", "O", "O", "X", "O"],
	["X", "O", "X", "O", "X"],
	["O", "X", "O", "O", "O"],
	["X", "X", "O", "X", "O"]])


[
	["O", "X", "X", "O", "X"],
	["X", "X", "X", "X", "O"],
	["X", "X", "X", "X", "X"],
	["O", "X", "O", "O", "O"],
	["X", "X", "O", "X", "O"]]

//module.exports = 