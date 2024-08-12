/**
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length
  }
  let start = 0
  let end = 0
  let result = 0
  let map = new Map()
  while (end < s.length) {
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end]) + 1)
    }
    map.set(s[end], end)
    result = Math.max(result, end - start + 1)
    end++
  }
  return result
}
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))

console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcdeapoi'))
