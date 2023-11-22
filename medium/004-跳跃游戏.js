/**
 * @param {number[]} nums
 * @return {boolean}
 */
// first
// 辣鸡暴力 写完我自己都看不懂
// var canJump = function(nums) {
//     let length = nums.length;
//     const canArrive = (num,idx)=>{
//         if(num >= length - idx - 1){
//             return true
//         }else{
//             if(num === 0){
//                 return false
//             }
//             for (let i = 1; i <= num; i++) { 
//                 if(!canArrive(nums[idx + i],idx + i)){
//                     continue
//                 }else{
//                     return true
//                 }
//             }
//             return false
//         }
//     }
//     return canArrive(nums[0],0)
// };

// 独立想出 用时:20min
// 思路：从后遍历，找到一个可以到达终点的数就改变终点成这个数，
// 因为此终点数前面如果有能到最终终点的数，那么一定也可以到这个终点
var canJump = function(nums) {
    let length = nums.length;
    let tempEndIdx = length - 1
    for (var i = length - 2; i >= 0; i--) {
        //如果能到达
        if(nums[i] >= tempEndIdx - i){
            tempEndIdx = i;
        }
    }
    return tempEndIdx === 0
};
console.log(canJump([4,3,2,1,0,4]))
