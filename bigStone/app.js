// 1189
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [info, ...arr] = input.split("\n");

  const [N, M, K] = info.split(" ").map(Number);
  const matrix = arr.map((str) => str.split(""));

  const visited = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === "T") visited[i][j] = 1;
    }
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const start = [N - 1, 0];
  const end = [0, M - 1];

  let cnt = 0;
  const dfs = (depth, point) => {
    const [y, x] = point;
    if (end[0] === y && end[1] === x) {
      if (depth === K) {
        cnt++;
      } else {
        return;
      }
    } else if (depth >= K) {
      return;
    }
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) continue;
      visited[ny][nx] = 1;
      dfs(depth + 1, [ny, nx]);
      visited[ny][nx] = 0;
    }
  };

  visited[start[0]][start[1]] = 1;
  dfs(1, start);
  console.log(cnt);
}
