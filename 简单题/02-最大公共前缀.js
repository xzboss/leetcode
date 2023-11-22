/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   let prefix = ''
//   for (var i = 0; i < strs[0].length; i++) {
//     for (var j = 1; j < strs.length; j++) {
//       if(strs[0][i] !== strs[j][i]) { 
//         return prefix
//       }
//     }
//     prefix += strs[0][i]
//   }
//   return prefix
// }
var longestCommonPrefix = function (strs) {
  if (!strs.length) return
  let max = strs[0]
  let min = strs[0]
  for (let i = 0; i < strs.length; i++) { 
    if (strs[i] < min) {
      min = strs[i]
      break
    }
    if (strs[i] > max) {
      max = strs[i]
      break
    }
  }
  console.log(max, min)
  
  let preFix = ''
  for (let i = 0; i < max.length; i++) {
    if (max[i] === min[i]){
      preFix += max[i]
    }else{
      return preFix
    }
  }
}
console.log(longestCommonPrefix(["flower","flow","flight"]))