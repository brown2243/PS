/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const s = new Array(10).fill(0);
  const g = new Array(10).fill(0);
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls += 1;
    } else {
      s[secret[i]] += 1;
      g[guess[i]] += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    cows += Math.min(s[i], g[i]);
  }

  return `${bulls}A${cows}B`;
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const ans = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    ans.push(Math.min(ans[i - 1], ans[i - 2]) + cost[i]);
  }
  console.log(ans);

  return Math.min(ans.pop(), ans.pop());
};
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
