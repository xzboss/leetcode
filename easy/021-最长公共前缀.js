/**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let max_prefix = ''
  let length = 0
  while(strs[0][length]){
    let current = strs[0][length]
    for (let i = 0; i < strs.length; i++) {
      if(current !== strs[i][length]){
        return max_prefix
      }
    }
    max_prefix += current
    length++
  }
  return max_prefix
};
console.log(longestCommonPrefix(["flower","flow","flight"]))

