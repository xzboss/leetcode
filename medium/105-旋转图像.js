var rotate = function (matrix) {
  // 转置
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 翻转
  for (let i = 0; i < matrix.length; i++) {
    const mid = (matrix[0].length / 2) >> 0;
    for (let j = 0; j < mid; j++) {
      [matrix[i][matrix[0].length - j - 1], matrix[i][j]] = [matrix[i][j], matrix[i][matrix[0].length - j - 1]];
    }
  }
  return matrix;
};

//module.exports =
