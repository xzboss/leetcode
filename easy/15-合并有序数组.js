// /**
//  * 本来只需要返回结果，题目要求存在nums1里
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   const result = []
//   let idx1 = 0,
//     idx2 = 0
//   while (idx2 < n) {
//     if (nums1[idx1] < nums2[idx2] && idx1 < m) {
//       result.push(nums1[idx1++])
//     } else {
//       result.push(nums2[idx2++])
//     }
//   }
//   return result
// }
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
/**
 * 本来只需要返回结果，题目要求存在nums1里
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const nums1 = [0]

var merge = function (nums1, m, nums2, n) {
  let point = m + n - 1
  m--
  n--
  while (n >= 0) {
    while (m >= 0 && nums1[m] > nums2[n]) {
      nums1[point--] = nums1[m--]
    }
    nums1[point--] = nums2[n--]
  }
}
merge(nums1, 0, [1], 1)
console.log(nums1)
