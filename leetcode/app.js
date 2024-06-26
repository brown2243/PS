/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  dp[0][0] = true;

  let str = s[0];
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    for (let j = 0; j < i; j++) {
      if (s[j] === s[i] && (i - j <= 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
        if (i - j + 1 > str.length) {
          str = s.substring(j, i + 1);
        }
      }
    }
  }
  return str;
};
