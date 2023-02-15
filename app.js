/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const map = [];
  roads.forEach((road) => {
    const [x, y] = road;
    if (map[x]) {
      map[x].push(y);
    } else {
      map[x] = [y];
    }
    if (map[y]) {
      map[y].push(x);
    } else {
      map[y] = [x];
    }
  });
  let ans = 0;
  const cntMap = new Array(map.length).fill(Infinity);
  const dfs = (now, depth) => {
    if (depth > cntMap[now]) {
      return;
    }
    cntMap[now] = depth;
    ans += Math.ceil(depth / seats);
    for (let i = 0; i < map[now]?.length; i++) {
      dfs(map[now][i], depth + 1);
    }
  };
  dfs(0, 0);

  return ans;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Check rows
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (row.has(board[i][j])) {
          return false;
        }
        row.add(board[i][j]);
      }
    }
  }

  // Check columns
  for (let j = 0; j < 9; j++) {
    const col = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== ".") {
        if (col.has(board[i][j])) {
          return false;
        }
        col.add(board[i][j]);
      }
    }
  }

  // Check 3x3 sub-boxes
  for (let box = 0; box < 9; box++) {
    const subBox = new Set();
    const rowStart = Math.floor(box / 3) * 3;
    const colStart = (box % 3) * 3;
    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
        if (board[i][j] !== ".") {
          if (subBox.has(board[i][j])) {
            return false;
          }
          subBox.add(board[i][j]);
        }
      }
    }
  }

  return true;
};
