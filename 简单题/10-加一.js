/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let length = digits.length - 1
  while (digits[length] === 9) {
    digits[length] = 0
    length--
  }
  if (length !== -1) {
    digits[length]++
  } else {
    digits.unshift(1)
  }
  return digits
}
console.log(plusOne([0, 9, 9]))
