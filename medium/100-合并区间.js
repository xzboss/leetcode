/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const pre = res.at(-1);
    if (pre[1] >= intervals[i][0]) {
      pre[1] = Math.max(pre[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};
console.log(
  JSON.stringify(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  )
);
//module.exports =
