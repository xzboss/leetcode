function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  let temp = 0
  while (temp / 10 < x) {
    temp = temp * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return temp === x || Math.floor(temp / 10) === x
}
