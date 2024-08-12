/**
给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", s = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", s = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", s = "dog cat cat dog"
输出: false
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = Object.create(null),
    map2 = Object.create(null)
  const words = s.split(' ')
  if (words.length !== pattern.length) return false
  for (let i = 0; i < words.length; i++) {
    if (!map[pattern[i]] || !map2[words[i]]) {
      map[pattern[i]] = words[i]
      map2[words[i]] = pattern[i]
    } else if (map[pattern[i]] !== words[i] || map2[words[i]] !== pattern[i]) {
      return false
    }
  }
  return true
}
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog constructor constructor dog'))

console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('jquery', 'jquery'))
