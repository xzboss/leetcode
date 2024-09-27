/**
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) return res;
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    sCount[s[i].charCodeAt() - 97]++;
    pCount[p[i].charCodeAt() - 97]++;
  }
  if (sCount.toString() === pCount.toString()) res.push(0);
  for (let i = pLen, j = 0; i < sLen; i++, j++) {
    sCount[s[i].charCodeAt() - 97]++;
    sCount[s[j].charCodeAt() - 97]--;
    if (sCount.toString() === pCount.toString()) res.push(j + 1);
  }
  return res;
};
var findAnagrams = function (s, p) {
  const res = [];
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) return res;
  const counts = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    counts[s[i].charCodeAt() - 97]--;
    counts[p[i].charCodeAt() - 97]++;
  }
  if (counts.every((item) => item === 0)) res.push(0);
  for (let i = pLen, j = 0; i < sLen; i++, j++) {
    counts[s[i].charCodeAt() - 97]--;
    counts[s[j].charCodeAt() - 97]++;
    if (counts.every((item) => item === 0)) res.push(j + 1);
  }
  return res;
};
console.log(findAnagrams("baa", "aa"));
//module.exports =
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */