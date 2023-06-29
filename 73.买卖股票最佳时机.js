/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0
    let min = prices[0], max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) min = prices[i]
        else max = Math.max(max, prices[i] - min)
    }
    return max
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));