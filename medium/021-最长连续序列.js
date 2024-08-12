/**
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 先排序，再次复习快排 超时
// function sort(nums, left, right){
//   if(left >= right)return
//   let L = left
//   let R = right
//   let pit = nums[left]
//   while(L < R){
//     while(L < R && nums[R] >= pit){
//       R--
//     }
//     nums[L] = nums[R]
//     while(L < R && nums[L] <= pit){
//       L++
//     }
//     nums[R] = nums[L]
//   }
//   nums[L] = pit
//   sort(nums, L + 1, right)
//   sort(nums, left, R - 1)
// }
// var longestConsecutive = function(nums) {
//   sort(nums, 0, nums.length - 1)
//   //
//   let length = 1
//   let j = 0
//   let max = 0
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] + 1 === nums[i + 1]){
//       length++
//     }else if(nums[i] !== nums[i + 1]){
//       max = Math.max(length,max)
//       length = 1
//     }
//   }
//   return max
// };


// 哈希
//其实我也想过这种思路，但是我不知道怎么跳过不是起点的数
var longestConsecutive = function(nums) {
  const set = new Set(nums)
  let max = 0
  for(let num of set){
    // 如果是起点
    if(!set.has(num - 1)){
      let length = 1
      while(set.has(num + 1)){
        num++
        length++
      }
      max = Math.max(max, length)
    }
  }
  return max
};

// 换一种写法，没set好
var longestConsecutive = function(nums) {
  const map = {}
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 1
  }
  for (let i = 0; i < nums.length; i++) {
    if(!map[nums[i] - 1]){
      let currentNum = nums[i]
      let length = 0
      while(map[currentNum]){
        currentNum++
        length++
      }
      max = Math.max(max, length)
    }
  }
  return max
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 2, 0, 1]));
console.log(longestConsecutive([0, 0]));
