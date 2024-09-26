/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let max = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      l = Math.max(l, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(i - l + 1, max);
  }
  return max;
};
console.log(lengthOfLongestSubstring("abba"));

//module.exports =abc abcbb
