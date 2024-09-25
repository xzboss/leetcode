/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const n = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  const map = {};
  for (let i = 97, j = 0; i <= 123; i++, j++) {
    map[String.fromCharCode(i)] = n[j];
  }
  function hash(word) {
    let res = 1;
    for (let i = 0; i < word.length; i++) {
      res *= map[word[i]];
    }
    return res;
  }
  const cache = {};
  const res = [];
  for (let i = 0; i < strs.length; i++) {
    const hashCode = hash(strs[i]);
    if (cache[hashCode]) {
      cache[hashCode].push(strs[i]);
    } else {
      cache[hashCode] = [strs[i]];
      res.push(cache[hashCode]);
    }
  }
  return res;
};
groupAnagrams()
//module.exports =
