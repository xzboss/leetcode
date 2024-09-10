// // 1. 转换成字符串，通过双指针进行判断
// function isPalindrome(x) {
//   const str = String(x);
//   let l = 0;
//   let r = str.length - 1;
//   while (l < r) {
//     if (str[l++] !== str[r--]) return false;
//   }
//   return true;
// }
// // 利用求余，记录每一位，同样是双指针
// function isPalindrome(x) {
//   if (x < 0) return false;
//   const arr = [];
//   while (x >= 1) {
//     arr.push(x % 10);
//     x = (x / 10) >> 0;
//   }
//   let l = 0;
//   let r = arr.length - 1;
//   while (l < r) {
//     if (arr[l++] !== arr[r--]) return false;
//   }
//   return true;
// }
// 利用求余，将这个数翻转，最后比较翻转后的数和原来的数即可
function isPalindrome(x) {
  const origin = x;
  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = (x / 10) >> 0;
  }
  return reverse === origin;
}
console.log(isPalindrome(121));
