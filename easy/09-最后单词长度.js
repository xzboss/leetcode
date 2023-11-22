/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = 0
  let length = s.length - 1
  while (s[length] === ' ' && length >= 0) length--
  while (s[length] !== ' ' && length >= 0) {
    length--
    result++
  }
  return result
}
console.log(lengthOfLastWord(' '))
