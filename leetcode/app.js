/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const y = grid.length;
  const x = grid[0].length;
  for (let i = 1; i < x; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < y; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      grid[i][j] = Math.min(
        grid[i - 1][j] + grid[i][j],
        grid[i][j - 1] + grid[i][j]
      );
    }
  }
  return grid[y - 1][x - 1];
};
