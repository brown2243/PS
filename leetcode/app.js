/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;

  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  const maxLength = Math.max(...wordDict.map((v) => v.length));

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= Math.max(0, i - maxLength); j--) {
      const str = s.substring(j, i);
      console.log(str);
      if (wordDict.includes(str) && dp[j]) {
        dp[i] = true;
        console.log(dp.join(" "));
      }
    }
  }
  return dp[n];
};

wordBreak("leetcode", ["leet", "code"]);
