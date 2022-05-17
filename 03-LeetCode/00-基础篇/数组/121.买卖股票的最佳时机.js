/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {


  let n = prices.length
  let maxProfit = 0 // 前i-1天的最大利润
  let min = prices[0] // 前i-1天的最小价格

  // 动态规划：最大利润为Math.max(maxProfit,prices[i]prices[0])
  for (let i = 1; i < n; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - min)
    min = prices[i] < min ? prices[i] : min
  }
  return maxProfit
};