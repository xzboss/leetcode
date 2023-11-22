// // const str = 'qwertyuer'
// // const need = 'er'
// // const indexOf = (str, need)=>{
// //     return /er/.exec(str).index
// // }
// // console.log(indexOf(str, need))

/**
 * n**2
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++ ) {
      let a = i, b = 0
      while(haystack[a] === needle[b] && b < needle.length){
        a++;b++;
      }
      if(b === needle.length){
        return i
      }
    }
    return -1
};
console.log(strStr('abcdefghijklm','bcdefghijklm'))

//kmp
// /**
//  * n**2
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   const nextArr = [0]
//   for (let i = 1, j = 0; i < needle.length; i++) {
//     while (j > 0 && needle[j] !== needle[i]) {
//       j = nextArr[j - 1]
//     }
//     if (needle[i] === needle[j]) {
//       j++
//     }
//     nextArr[i] = j
//   }
//   for (let i = 0, j = 0; i < haystack.length - needle.length + 1; i++) {
//     while (haystack[i] !== needle[j] && j) {
//       j = nextArr[j - 1] || 0
//     }
//     if (haystack[i] === needle[j]) {
//       j++
//     }
//     if (j === needle.length) return i - j + 1
//   }
//   return -1
// }
console.log(strStr('hello', 'll'))
