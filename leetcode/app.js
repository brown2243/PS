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

// 동적 계획법(Dynamic Programming)을 사용합니다.
// 2차원 DP 배열을 사용하여 s1과 s2의 각 위치까지 사용했을 때, s3의 해당 위치까지 interleaving이 가능한지 여부를 저장합니다.
// DP[i][j]는 s1의 i번째 문자와 s2의 j번째 문자까지 사용했을 때, s3의 i+j번째 문자까지 interleaving이 가능한지를 나타냅니다.
// 초기 조건으로 DP[0][0]는 true로 설정합니다.
// DP 배열을 채워나가면서, 다음 두 가지 경우를 고려합니다:

// s1의 i번째 문자와 s3의 i+j번째 문자가 같고, DP[i-1][j]가 true인 경우
// s2의 j번째 문자와 s3의 i+j번째 문자가 같고, DP[i][j-1]이 true인 경우

// 최종적으로 DP[len(s1)][len(s2)]의 값이 true이면 s3는 s1과 s2의 interleaving으로 형성될 수 있습니다.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

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

isInterleave("aabcc", "dbbca", "aadbbcbcac");
