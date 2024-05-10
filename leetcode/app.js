/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let amnt = 1; amnt < dp.length; amnt++) {
    coins.forEach((coin) => {
      if (amnt < coin) {
        return;
      }
      if (dp[amnt - coin] !== Number.MAX_SAFE_INTEGER) {
        dp[amnt] = Math.min(dp[amnt], dp[amnt - coin] + 1);
      }
    });
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
