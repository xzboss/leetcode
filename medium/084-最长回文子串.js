/**
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb
 */
/**
 * @param {string} s
 * @return {string}
 */
// 1. 暴力 枚举所有字符依次判断是否回文
var longestPalindrome = function (s) {
  let start = 0;
  let len = 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (valid(i, j)) {
        if (j - i + 1 > len) {
          len = j - i + 1;
          start = i;
        }
      }
    }
  }
  function valid(i, j) {
    while (s[i] === s[j] && i < j) {
      i++;
      j--;
    }
    return i >= j;
  }
  return s.substring(start, start + len);
};

// 2. 中心扩散 ，以中间一个或n个相同字符为中心，向两边扩散 打败99%⭐
var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;
    while (i + 1 < s.length && s[i] === s[i + 1]) r = ++i;
    while (l >= 0 && r < s.length) {
      if (s[l] !== s[r]) break;
      l--;
      r++;
    }
    if (r - l - 2 > end - start) {
      start = l + 1;
      end = r - 1;
    }
  }
  return s.substring(start, end + 1);
};

// 3. 动态规划 ，同样 n方，比中心扩展慢得多
// 我们可以规定状态 dp[i][j] 为 s[i~j]是否为回文，那么他可以取决于 s[i] === s[j] && dp[i++][j--]
// 且当区间长只有 1或2或3 的时候，他们只取决于 s[i] === s[j]
// 然后我们要注意一下填的顺序，dp标大概长这样
/** 依赖左下 - 1
10010
 1000
  100
   10
    1
 */
//我们不能按行填，我们应该按列填，从上往下

var longestPalindrome = function (s) {
  let len = 0;
  let start = 0;
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length));
  for (let j = 0; j < s.length; j++) {
    dp[j][j] = true;
    for (let i = 0; i < s.length; i++) {
      if (i > j) continue; //右下角不做操作
      if (j - i < 3) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      }
      // 记录最大
      if (dp[i][j] && j - i > len) {
        start = i;
        len = j - i;
      }
    }
  }
  return s.substring(start, start + len + 1);
};
console.log(longestPalindrome("aacabdkacaa"));
