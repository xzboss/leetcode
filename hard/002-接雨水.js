/**
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 */

/**
 * @param {number[]} height
 * @return {number}
 */
// // 1. 横着一层一层找 （超时）
// var trap = function (height) {
//   const maxFloor = Math.max(...height)
//   let sum = 0
//   for (let i = 1; i <= maxFloor; i++) {
//     let temp_sum = 0
//     let isStart = false
//     for (let j = 0; j < height.length; j++) {
//       if(isStart && height[j] < i){
//         temp_sum++
//       }
//       if(height[j] >= i){
//         sum += temp_sum
//         temp_sum = 0
//         isStart = true
//       }
//     }
//   }
//   return sum
// };
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

// 2. 竖着一列一列找 (超时)
// 遍历每一列找其两边最高墙，取其矮墙就知道本列最多对少单位水
// var trap = function (height) {
//   let sum = 0
//   for (let i = 0; i < height.length; i++) {
//     let right = height[i]
//     for (let j = i; j < height.length; j++) {
//       right = Math.max(height[j], right)
//     }

//     let left = height[i]
//     for (let j = i; j >= 0; j--) {
//       left = Math.max(height[j], left)
//     }
//     sum += Math.min(left,right) - height[i]
//   }
//   return sum
// };
// console.log(trap([4,2,0,3,2,5]))

// 3. O(n)
// 记录每一项的左右最高墙
// var trap = function (height) {
//   let sum = 0;
//   let max_left = [...height];
//   let max_right = [...height];

//   for (let i = 1; i < height.length; i++) {
//     max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
//   }
//   for (let i = height.length - 2; i >= 0; i--) {
//     max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
//   }
//   for (let i = 1; i < height.length - 1; i++) {
//     sum += (Math.max(Math.min(max_left[i], max_right[i]) - height[i], 0)) ;
//   }
//   return sum;
// };

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// // 4. 双指针 ,从两边各自开始,比较两端，因为多少雨水只取决于小值
// var trap = function (height) {
//   let sum = 0;
//   let left_max = 0
//   let right_max = 0
//   let left_pointer = 1
//   let right_pointer = height.length - 2
//   for (let i = 2; i < height.length; i++) {
//     if(height[left_pointer - 1] < height[right_pointer + 1]){
//        left_max = Math.max(height[left_pointer - 1], left_max)
//       if(left_max > height[left_pointer]){
//         sum += (left_max - height[left_pointer])
//       }
//       left_pointer++
//     }else {
//       right_max = Math.max(height[right_pointer + 1], right_max)
//       if(right_max > height[right_pointer]){
//         sum += (right_max - height[right_pointer])
//       }
//       right_pointer--
//     }
    
//   }
//   return sum;
// };

// console.log(trap([4,2,0,3,2,5]));


// 5. 栈，入栈下标
var trap = function (height) {
  let sum = 0;
    const stack =  [];
    let current = 0;
    while (current < height.length) {
        //如果栈不空并且当前指向的高度大于栈顶高度就一直循环
        while (stack.length > 0 && height[current] > height[stack[stack.length - 1]]) {
            let h = height[stack.pop()]; //取出要出栈的元素
            if (stack.length === 0) { // 栈空就出去
                break; 
            }
            let distance = current - stack[stack.length - 1] - 1; //两堵墙之前的距离。
            let min = Math.min(height[stack[stack.length - 1]], height[current]);
            sum = sum + distance * (min - h);
        }
        stack.push(current); //当前指向的墙入栈
        current++; //指针后移
    }
    return sum;
};

console.log(trap([4,2,0,3,2,5]));
