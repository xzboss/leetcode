/**
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 自己想出
// var minWindow = function (s, t) {
//   if (s.length < t.length) return "";
//   const map = {};
//   for (let i = 0; i < t.length; i++) {
//     map[t[i]] ? map[t[i]]++ : (map[t[i]] = 1);
//   }
//   let L = 0;
//   let count = 0;
//   let minLength = Number.MAX_SAFE_INTEGER;
//   let resultL = 0;
//   let resultR = Number.MAX_SAFE_INTEGER;
//   let tempMap = {};
//   for (let R = 0; R < s.length; R++) {
//     if (!map[s[R]]) continue;
//     tempMap[s[R]] ? tempMap[s[R]]++ : (tempMap[s[R]] = 1);
//     tempMap[s[R]] <= map[s[R]] && count++;
//     while ((!map[s[L]] || tempMap[s[L]] > map[s[L]]) && L <= R) {
//       tempMap[s[L]]--;
//       L++;
//     }
//     if (count === t.length && R - L + 1 < minLength) {
//       minLength = R - L + 1;
//       resultL = L;
//       resultR = R;
//     }
//   }
//   return resultR === Number.MAX_SAFE_INTEGER
//     ? ""
//     : s.slice(resultL, resultR + 1);
// };



// 最优解 看不懂!
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0,r = 0, match = 0, start = 0, minLen = s.length + 1;
    const map = {}
    for (let c of t) {
        map[c] ? map[c]++ : map[c] = 1
    }
    const count = Object.keys(map).length
    while (r < s.length) {
        const c = s[r]
        if (map[c] !== undefined) {
            map[c]--
        }
        if (map[c] === 0) {
            match++
        }
        r++
        while (count === match) {
            if (r - l < minLen) {
                minLen = r - l
                start = l
            }
            const c2 = s[l]
            if (map[c2] != undefined) {
                map[c2]++
            }
            if (map[c2] > 0) {
                match--
            }
            l++
        }
    }
    return minLen === s.length + 1 ? "" : s.substr(start, minLen)
};