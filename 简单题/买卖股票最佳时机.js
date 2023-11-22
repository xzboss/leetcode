/**
 * @param {number[]} prices
 * @return {number}
 * [7,1,5,3,6,4]
 */
var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for (let i = 0; i <prices.length;i++ ) {
        if(prices[i] < min){
            min = prices[i]
        }else if(profit < prices[i] - min){
            profit = prices[i] - min
        }
    }
    return profit
};
console.log(maxProfit([7,4,10,3,12,4]))

