/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) return false
  const stack = []
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  let point = -1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i])
      point++
    } else if (map[s[i]] === stack[point]) {
      stack.pop()
      point--
    } else {
      return false
    }
    if (i === s.length - 1) return point === -1
  }
}
console.log(isValid('()'))

//法二 map
