/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序后判断
// var singleNumber = function(nums) {
//     nums.sort((a,b)=> a-b)
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] !== nums[i+1]){
//             return nums[i]
//         }
//         i++
//     }
// };

// 异或

var singleNumber = function(nums) {
    let answer = 0
    for (let i = 0; i < nums.length; i++) {
        answer ^= nums[i]
    }
    return answer
};
console.log(singleNumber([2,2,1,4,4,1,6]))
