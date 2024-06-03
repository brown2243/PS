/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  if (m + n !== s3.length) {
    return false;
  }

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return dp[m][n];
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 다시 https://leetcode.com/problems/longest-common-subsequence/solutions/348884/c-with-picture-o-nm/?envType=study-plan-v2&envId=leetcode-75
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length + 1;
  const length2 = text2.length + 1;

  const dp = Array.from({ length: length1 }, () => new Array(length2).fill(0));

  for (let i = 1; i < length1; i++) {
    for (let j = 1; j < length2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[length1 - 1][length2 - 1];
};
// 다시
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));

  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;

  const dp = Array.from({ length: n }, () => new Array(n).fill(false));
  dp[0][0] = true;

  let ans = s[0];

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    for (let j = 0; j < i; j++) {
      // 2글자 이하 || 첫끝 글자제외한 나머지 글자가 펠린드롬일때
      if (s[i] === s[j] && (i - j <= 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
        if (i - j + 1 > ans.length) {
          ans = s.substring(j, i + 1);
        }
      }
    }
  }
  return ans;
};
