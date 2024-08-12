/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n
  let j = 2
  for (let i = 1, temp = 0; n > 2; n--) {
    temp = i + j
    i = j
    j = temp
  }
  return j
}
console.log(climbStairs(4))
