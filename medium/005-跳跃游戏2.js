/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心 (不建议看)
// 思路：从后遍历，优先找到能到终点的最靠前的数，然后以此为终点继续迭代
// 最坏 O(n**2 / 2)
// var jump = function(nums) {
//     let length = nums.length;
//     let count = 0
//     const findBest = (end) => {
//         if(end === 0){
//             return true
//         }
//         let flag = false
//         let max = end
//         for (let i = end - 1; i >= 0; i--) {
//             // 如果可以到终点
//             if(nums[i] >= max - i ){
//                 end = i
//                 flag = true
//             }
//         }
//         if(flag){
//             count++
//             return findBest(end)
//         }else{
//             return false
//         }
//     }
//     return findBest(length - 1) ? count : 0
// };

// 正向贪心 O(n)
// 本来最开始就想到这个方法了，但是举了个错的反例，就弃了这个方法
// 思路：正向遍历，找到当前和下一个所能达到的最远距离，选取符合最远距离到下一跳

// 这里未来的我可能会有疑问
// 解释：end 是当前起跳能到达的最远位置，比如这里第一项 2，他能跳到最多第3项，第三项的下标就是end
//      max 是当前范围内能跳到的最远位置，比如第一项起跳，跳到第二项之后最大能跳到第5项，也就是 i + nums[i]；跳到第3项后只能跳到第4项，取其最大值；方便赋值给end 定义下一次的起跳，
var jump = function (nums) {
  let count = 0
  let end = 0
  let max = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === end) {
      count++
      end = max
    }
  }
  return count
}
console.log(jump([2, 3, 1, 0, 1, 4]))
