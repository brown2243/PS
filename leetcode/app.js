/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= m; i++) {
    if (s1[i - 1] !== s3[i - 1]) break;
    dp[i][0] = true;
  }

  for (let j = 1; j <= n; j++) {
    if (s2[j - 1] !== s3[j - 1]) break;
    dp[0][j] = true;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) {
        dp[i][j] = true;
      }
      if (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]) {
        dp[i][j] = true;
      }
    }
  }
  return dp[m][n];
};
