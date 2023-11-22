// var searchInsert = function(nums, target) {
//     let left = 0, right = nums.length - 1
//     let point
//     while(left <= right){
//         point = (left + right) >> 1
//         if(nums[point] < target){
//             left = point + 1
//         }else{
//             right = point - 1
//         }
//     }
//     return left
// }


/**
 * 递归
 */
var searchInsert = function(nums, target) {
    const recursion = ( left, right, ) => {
        if(left > right){
            return left
        }
        const mid = (left + right) >> 1
        if(nums[mid] < target){
            return recursion(mid + 1, right)
        }
        if(nums[mid] > target){
            return recursion(left, mid - 1)
        }
        if(nums[mid] === target) return mid
    }
    return recursion(0, nums.length - 1)
}
console.log(searchInsert([1,3,5,6],2))