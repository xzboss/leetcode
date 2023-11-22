/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    for (var i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};
let arr = [1,2,3,4,5,6]
rotate(arr,3)
console.log(arr)
