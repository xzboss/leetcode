/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const nums = [1,1,2,1,1,3,4,1,4]
var removeElement = function(nums, val) {
    if(nums.length === 0) return
    let point = 0
    for (let i = 0; i < nums.length; i++) {
      if(val !== nums[i]){
        nums[point++] = nums[i]
      }
    }
    return point
};

console.log(removeElement(nums,1),nums)
