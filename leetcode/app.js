/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;

  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(false));
  dp[0][0] = true;

  let last = s[0];

  for (let i = 1; i <= n; i++) {
    dp[i][i] = true;
    for (let j = i + 1; j <= n; j++) {
      if (s[i - 1] === s[j - 1] && (i - j <= 2 || dp[j + 1][i - 1])) {
      }
    }
  }
};
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const a = pattern.split("");
  const b = s.split(" ");
  if (a.length !== b.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < a.length; i++) {
    const p = a[i];
    const str = b[i];
    if (obj1.hasOwnProperty(p) && obj1[p] !== str) {
      return false;
    }
    if (obj2.hasOwnProperty(str) && obj2[str] !== p) {
      return false;
    }
    obj1[p] = str;
    obj2[str] = p;
  }
  return true;
};
