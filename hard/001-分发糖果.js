/**
n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

 

示例 1：

输入：ratings = [1,0,2]
输出：5
解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
示例 2：

输入：ratings = [1,2,2]
输出：4
解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 */ [2, 1, 0, 4, 2, 1, 0];

/**
 * @param {number[]} ratings
 * @return {number}
 */
// 玄：记录递增第一个为1，递增无脑加1就行了，递减后，如果递减序列数量小于之前的递增序列数量
// 比如：1,2,3,4,2,1 获得糖果是这样 1,2,3,4,2,1
// 而超过前面递增序列数量后，就得给前面递增序列最后项加一个，保证递减到递减序列最后那个项是1
var candy = function (ratings) {
  let sum = 1
  let score = 1
  let inc = 1
  let dec = 0
  for (let i = 1; i < ratings.length; i++) {
    if(ratings[i] >= ratings[i- 1]){
      dec = 0
      if(ratings[i] === ratings[i- 1]){
        score = 1
      }else {
        score++
      }
      sum += score
      inc = score
    }else {
      dec++
      if(dec === inc){
        dec++
      }
      sum += dec
      score = 1
    }
  }
  return sum
};
console.log(candy([1,2,3,4,3,2,1,0]),'@@@@@')
// 1,2,3,4,3,2,1,2


