/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 && n === 0) {
    return 0;
  }
  const map = Array.from({ length: m }, () => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1];
    }
  }
  return map[m - 1][n - 1];
};
