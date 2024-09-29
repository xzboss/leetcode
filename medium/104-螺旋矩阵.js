var spiralOrder = function (matrix) {
  // 定义墙边
  let T = 0,
    R = matrix[0].length - 1,
    B = matrix.length - 1,
    L = 0;
  const res = [];
  while (T <= B && L <= R) {
    for (let j = L; j <= R; j++) {
      res.push(matrix[T][j]);
    }
    for (let i = T + 1; i <= B; i++) {
      res.push(matrix[i][R]);
    }
    // 只一行不往回走
    if (T >= B) break;
    for (let j = R - 1; j >= L; j--) res.push(matrix[B][j]);

    // 只一列不往回走
    if (L >= R) break;
    for (let i = B - 1; i > T; i--) res.push(matrix[i][L]);

    L++;
    R--;
    T++;
    B--;
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
