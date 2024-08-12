/**
给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，
相同字符只能映射到同一个字符上，字符可以映射到自己本身。

示例 1:

输入：s = "egg", t = "add"
输出：true
示例 2：

输入：s = "foo", t = "bar"
输出：false
示例 3：

输入：s = "paper", t = "title"
输出：true
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function (s, t) {
//   const map = {}
//   const map2 = {}
//   for (let i = 0; i < t.length; i++) {
//     if (!map[s[i]] && !map2[t[i]]) {
//       map[s[i]] = t[i]
//       map2[t[i]] = s[i]
//     } else if (map[s[i]] !== t[i] || map2[t[i]] !== s[i]) {
//       return false
//     }
//   }
//   return true
// }
// console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('paper', 'title'))
// console.log(isIsomorphic('badc', 'baba'))

//逆天 但是查找复杂度是n2
var isIsomorphic = function (s, t) {
  ////取当前位置字符第一次出现的索引对比
  //情况1(一个字符映射多个): foo 与 bar, 处理第二个o时发现索引不同
  //情况2(多个字符映射同个): abc 与 ggl, 处理第二个g时发现索引不同
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }
  return true
}
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))
