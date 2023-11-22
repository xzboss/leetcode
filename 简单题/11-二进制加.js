/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = ''
  let carry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const sum = (i < 0 ? 0 : +a[i]) + (j < 0 ? 0 : +b[j]) + carry // 同位加，若有字符串超出记为0
    result = (sum % 2) + result // 拼接
    carry = sum <= 1 ? 0 : 1 // 得到下一次是否进位
  }
  return (carry ? 1 : '') + result // 始终有一次是否进位得不到拼接
}
console.log(addBinary('11', '1'))
