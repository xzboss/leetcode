/**
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 VI 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
示例 3：

输入：s = "A", numRows = 1
输出："A"
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 自己想的，主要就是巧用层数，得到一层后再得到下一层
var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let result = "";
  for (let i = 0; i < numRows; i++) {
    let pointer = i;
    while (pointer < s.length) {
      result += s[pointer];
      if (i > 0 && i < numRows - 1) {
        result += s[pointer + (numRows - i) * 2 - 2] || "";
      }
      pointer += numRows * 2 - 2;
    }
  }
  return result;
};

// 解析，我觉得这个好理解些：一个一个遍历，通过floor来指定将每项加到对应层上，最后再把每层都加起来
var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let floor = 0;
  let direction = -1;
  let arr = new Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    arr[floor] += s[i];
    if (floor === 0 || floor === numRows - 1) {
      direction = -direction;
    }
    floor += direction;
  }
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
};
console.log(convert("PAYPALISHIRING", 4));
