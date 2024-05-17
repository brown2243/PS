/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  if (n <= 1) {
    return 0;
  }

  const sells = new Array(n).fill(0);
  const buys = new Array(n).fill(0);

  sells[0] = 0;
  buys[0] = -prices[0];
  sells[1] = Math.max(sells[0], buys[0] + prices[1] - fee);
  buys[1] = Math.max(buys[0], sells[0] - prices[1]);

  for (let i = 2; i < n; i++) {
    sells[i] = Math.max(sells[i - 1], buys[i - 1] + prices[i] - fee);
    buys[i] = Math.max(buys[i - 1], sells[i - 2] - prices[i]);
  }

  return sells[n - 1];
};
