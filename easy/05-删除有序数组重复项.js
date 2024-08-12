/**原地删除
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1,1,2,3,3,4,5,5]
var removeDuplicates = function(nums) {
    if(nums.length === 0) return
    let idx1 = 0
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[idx1]){
            nums[++idx1] = nums[i];
        }
    }
    return idx1 + 1
};
removeDuplicates(nums)
console.log(nums)
