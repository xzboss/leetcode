/**
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

示例 1：

输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
示例 2：

输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 二话不说，先暴力
// var strStr = function(haystack, needle) {
//   for (let i = 0; i < haystack.length; i++) {
//     let j = 0
//     while(needle[j] === haystack [i + j] && j < needle.length){
//       j++
//     }
//     if(j === needle.length){
//       return i
//     }
//   }
//   return -1
// };

// KMP

var strStr = function (haystack, needle) {
  const nextArr = [0]
  for (let i = 1, j = 0; i < needle.length; i++) {
    while (j > 0 && needle[j] !== needle[i]) {
      j = nextArr[j - 1]
    }
    if (needle[i] === needle[j]) {
      j++
    }
    nextArr[i] = j
  }
  for (let i = 0, j = 0; i < haystack.length; i++) {
    while (haystack[i] !== needle[j] && j) {
      j = nextArr[j - 1] || 0
    }
    if (haystack[i] === needle[j]) {
      j++
    }
    if (j === needle.length) return i - j + 1
  }
  return -1
}
console.log(strStr('mississisppi','issisp'))

//hrllo