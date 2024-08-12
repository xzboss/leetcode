/**
如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
字母和数字都属于字母数字字符。
给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

示例 1：

输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。
示例 2：

输入：s = "race a car"
输出：false
解释："raceacar" 不是回文串。
示例 3：

输入：s = " "
输出：true
解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。

*/

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   let reg = /^[a-zA-Z0-9]$/;
//   let str = '';
//   for (let i = 0; i < s.length; i++) {
//     if (reg.test(s[i])) {
//       str += s[i];
//     }
//   }
//   let pointerL = 0;
//   let pointerR = str.length - 1;
//   while (pointerL <= pointerR) {
//     if (str[pointerL].toLowerCase() === str[pointerR].toLowerCase()) {
//       pointerL++;
//       pointerR--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));

// console.log('a'.toLowerCase());

// O(1) 空间
var isPalindrome = function (s) {
  let reg = /^[a-zA-Z0-9]$/;
  let pointerL = 0;
  let pointerR = s.length - 1;
  while (pointerL < pointerR) {
    while (!reg.test(s[pointerL]) && pointerL < pointerR) {
      pointerL++;
    }
    while (!reg.test(s[pointerR]) && pointerL < pointerR) {
      pointerR--;
    }
    if (s[pointerL].toLowerCase() === s[pointerR].toLowerCase()) {
      pointerL++;
      pointerR--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
