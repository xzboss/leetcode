/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0
  let r = x
  while (l <= r) {
    mid = (l + r) >> 1
    if (mid * mid > x) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return l - 1
}
console.log(mySqrt(0), 101 ** 2)
