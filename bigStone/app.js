// 2234
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N, M], ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const visited = Array.from({ length: M }, () => new Array(N).fill(false));

  const dy = [0, -1, 0, 1];
  const dx = [-1, 0, 1, 0];

  const dp = [];

  let cnt = 0,
    max = 0,
    largest = 0;

  const dfs = (y, x, cnt) => {
    if (visited[y][x]) {
      return 0;
    }
    visited[y][x] = cnt;
    let result = 1;
    for (let i = 0; i < 4; i++) {
      if (!(arr[y][x] & (1 << i))) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        result += dfs(ny, nx, cnt);
      }
    }
    return result;
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        cnt++;
        dp[cnt] = dfs(i, j, cnt);
        max = Math.max(max, dp[cnt]);
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (i + 1 < M) {
        const a = visited[i + 1][j];
        const b = visited[i][j];
        if (a !== b) {
          largest = Math.max(largest, dp[a] + dp[b]);
        }
      }
      if (j + 1 < N) {
        const a = visited[i][j + 1];
        const b = visited[i][j];
        if (a !== b) {
          largest = Math.max(largest, dp[a] + dp[b]);
        }
      }
    }
  }
  console.log(`${cnt}\n${max}\n${largest}`);
}
