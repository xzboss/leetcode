/**
示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]
 */

//module.exports =

// 回溯写法-多叉树的深度遍历
var letterCombinations = function (digits) {
  if (digits.length < 1) return [];
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  const result = [];
  backTrack(0, digits[0], "");

  function backTrack(index, digit, str) {
    if (index === digits.length) {
      return result.push(str);
    }
    for (let i = 0; i < map.get(digit).length; i++) {
      backTrack(index + 1, digits[index + 1], str + map.get(digit)[i]);
    }
  }
  return result;
};

console.log(3 ** 3, letterCombinations("23"));

/**
 * @description 其他写法
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//     if (digits.length < 1) return [];
//     const map = new Map([
//       ["2", "abc"],
//       ["3", "def"],
//       ["4", "ghi"],
//       ["5", "jkl"],
//       ["6", "mno"],
//       ["7", "pqrs"],
//       ["8", "tuv"],
//       ["9", "wxyz"],
//     ]);
//     // 提前计算有多少种结果
//     let len = 1;
//     for (const digit of digits) {
//       len *= map.get(digit).length;
//     }
//     const result = new Array(len).fill("");

//     //
//     let interval = result.length / map.get(digits[0]).length; // 定义分片间距
//     for (let i = 0; i < digits.length; i++) {
//       const digit = digits[i];
//       const len = map.get(digit).length;
//       i !== 0 && (interval = interval / len);
//       for (let j = 0, count = 1, charIndex = 0; j < result.length; j++, count++) {
//         if (count > interval) {
//           count = 1;
//           charIndex = (charIndex + 1) % len;
//         }
//         result[j] += map.get(digit)[charIndex];
//       }
//     }
//     return result;
//   };
