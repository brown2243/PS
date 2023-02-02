/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const checkBox = image.map((row) => row.map((_) => true));
  flood(image, checkBox, sr, sc, color, image[sr][sc]);
  return image;
};

var flood = (image, checkBox, x, y, color, init) => {
  const point = image[x]?.[y];

  if (!checkBox[x]?.[y] || point === undefined || point !== init) return;

  checkBox[x][y] = false;
  image[x][y] = color;
  flood(image, checkBox, x - 1, y, color, init);
  flood(image, checkBox, x + 1, y, color, init);
  flood(image, checkBox, x, y - 1, color, init);
  flood(image, checkBox, x, y + 1, color, init);
};

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cnt = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const point = grid[i][j];
      if (point === "1") {
        cnt += 1;
        move(grid, i, j);
      }
    }
  }
  return cnt;
};

var move = (grid, x, y) => {
  const point = grid[x]?.[y];

  if (point === undefined || point === "0") return;
  grid[x][y] = "0";
  move(grid, x - 1, y);
  move(grid, x + 1, y);
  move(grid, x, y - 1);
  move(grid, x, y + 1);
};
