/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 1 所有情况全部走一遍，找到最小值
// 时间复杂度O(2**(n - 1))
// var minimumTotal = function(triangle) {
//     let lastLayer =  triangle.length - 1
//     let min = Number.MAX_SAFE_INTEGER
//     const findMin = (sum,idx, layer)=>{
//         sum += triangle[layer][idx]
//         if(layer === lastLayer){
//             if(min > sum){
//                 min = sum
//             }
//             return
//         }
//         findMin(sum,idx,layer + 1)
//         findMin(sum, idx + 1,layer + 1)
//     }
//     findMin(0,0,0)
//     return min
// };

// 2 动态规划
// 把他看成直角三角形好理解些:
// 1. 从倒数第二层开始，比如：倒数第二层第一个一定是取下一层同列和下一层下一列中最小的值，而取得最优结果后，直接与本身加起来赋值给自己，无需额外空间
// 2. 再继续倒数第二层第二列...本列完成之后退回上一层继续此操作，最后取[0][0]即可
// 时间：O(n**2);空间：O(1)
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
