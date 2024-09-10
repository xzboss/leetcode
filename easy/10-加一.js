/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 1. 从后向前，carry 记录是否进位
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + carry) % 10;
    if (digits[i] !== 0) {
      carry = 0;
      break;
    }
  }
  carry === 1 && digits.unshift(carry);
  return digits;
};
// 2. 从后向前直接找连续的第一个9
var plusOne = function (digits) {
  let p = digits.length - 1;
  while (digits[p] === 9) {
    digits[p] = 0;
    p--;
  }
  if (p === -1) {
    digits.unshift(1);
  } else {
    digits[p]++;
  }
  return digits;
};
console.log(plusOne([9]));
