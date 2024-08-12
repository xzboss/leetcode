/**
如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

致谢：

特别感谢 @pbrother 添加此问题并且创建所有测试用例。

示例 1：

输入：s = "abc", t = "ahbgdc"
输出：true
示例 2：

输入：s = "axc", t = "ahbgdc"
输出：false
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pointer1 = 0,
    pointer2 = 0;
  while (pointer1 < s.length && pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }
  return pointer1 === s.length;
};
console.log(isSubsequence('axc', 'ahbgdc'));
