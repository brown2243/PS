/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = Number(matrix[i][j]);

      if (!(i === 0 || j === 0) && matrix[i][j] === 1) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
          1;
      }

      if (matrix[i][j] > ans) {
        ans = matrix[i][j];
      }
    }
  }
  return ans ** 2;
};
