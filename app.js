/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = new Array(cols).fill(-1); // Initialize result array with -1s

  for (let col = 0; col < cols; col++) {
    let row = 0;
    let currCol = col;
    while (row < rows) {
      if (grid[row][currCol] === 1) {
        // Board redirects ball to the right
        if (currCol === cols - 1) {
          // Ball hits right wall
          break;
        }
        currCol++;
        if (grid[row][currCol] !== 1) {
          // Ball gets stuck between two boards
          break;
        }
      } else if (grid[row][currCol] === -1) {
        // Board redirects ball to the left
        if (currCol === 0) {
          // Ball hits left wall
          break;
        }
        currCol--;
        if (grid[row][currCol] !== -1) {
          // Ball gets stuck between two boards
          break;
        }
      }
      row++;
      if (row === rows) {
        // Ball falls out of the bottom
        result[col] = currCol;
      }
    }
  }

  return result;
};
