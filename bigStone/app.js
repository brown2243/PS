// 리코쳇 로봇
function solution(board) {
  let start, end;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        start = [i, j, 0];
      }
      if (board[i][j] === "G") {
        end = [i, j, 0];
      }
    }
  }

  const bfs = (matrix, start, end, block) => {
    const n = matrix.length;
    const m = matrix[0].length;

    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    const q = [start];
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));

    while (q.length) {
      let [y, x, distance] = q.shift();
      if (visited[y][x]) continue;
      visited[y][x] = true;
      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        while (true) {
          if (
            0 <= ny &&
            ny < n &&
            0 <= nx &&
            nx < m &&
            matrix[ny][nx] !== block
          ) {
            ny += dy[i];
            nx += dx[i];
            if (end[0] === y && end[1] === x) {
              return distance;
            }
          } else {
            ny -= dy[i];
            nx -= dx[i];
            break;
          }
        }
        q.push([ny, nx, distance + 1]);
      }
    }
    return -1;
  };
  const ans = bfs(board, start, end, "D");
  return ans ? ans : -1;
}
