


/**
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
 */







/**
 * @param {character[][]} grid
 * @return {number}
 */
// 对于这种岛屿网格类问题，首先就应该想到DFS
var numIslands = function (grid) {
	let res = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				dfs(grid, i, j)
				res++
			}
		}
	}
	function dfs (grid, row, column) {
		if (inArea(row, column)) return
		if (grid[row][column] !== '1') return
		grid[row][column] = '2'
		dfs(grid, row + 1, column)
		dfs(grid, row - 1, column)
		dfs(grid, row, column + 1)
		dfs(grid, row, column - 1)
	}
	function inArea (row, column) {
		return row >= grid.length || row < 0 || column >= grid[row].length || column < 0
	}
	return res
};
numIslands([
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"]
])
//module.exports = 