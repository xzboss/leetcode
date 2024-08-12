/**
给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。
如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。

示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
示例 2：

输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 双指针+二分查找o(nlog2n)
// var twoSum = function (numbers, target) {
//   let R = numbers.length - 1,
//     L = 0
//   while (R > 0) {
//     let pointer_right = R
//     let pointer_left = L
//     let temp = (pointer_left + pointer_right) >> 1
//     let aim = target - numbers[R]
//     while (pointer_left <= pointer_right) {
//       if (numbers[temp] === aim) {
//         return [temp + 1, R + 1]
//       }
//       if (numbers[temp] > aim) {
//         pointer_right = temp - 1
//       }
//       if (numbers[temp] < aim) {
//         pointer_left = temp + 1
//       }
//       temp = (pointer_right + pointer_left) >> 1
//     }
//     R--
//   }
// }

// 首尾指针即可O(n)
var twoSum = function (numbers, target) {
  let R = numbers.length - 1,
    L = 0
  while (L < R) {
    const sum = numbers[L] + numbers[R]
    if (sum < target) {
      L++
    } else if (sum > target) {
      R--
    } else {
      return [L + 1, R + 1]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
