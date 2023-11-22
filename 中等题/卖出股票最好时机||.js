/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let profit = 0
//     let min = prices[0]
//     let max = prices[0]
//     for (let i = 0; i < prices.length; i++) {
//         if(prices[i] < prices[i - 1]){
//             profit += max - min
//             max = min = prices[i]
//         }else{
//             max = prices[i]
//             if(i===prices.length - 1){
//                 profit += max - min
//             }
//         }
//     }
//     return profit
// };
// console.log(maxProfit([7,1,5,3,6,4]))
var maxProfit = function(prices) {
    if(prices.length <= 1) {
        return 0
    }
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]){
            profit += (prices[i] - prices[i - 1])
        }
    }
    return profit
};
console.log(maxProfit([7,1,5,3,6,4]))
