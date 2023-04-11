// 14502

const doDFS = (N, M, graph) => {
  const dx = [1, 0, -1, 0],
    dy = [0, 1, 0, -1];

  const dfs = (x, y, visited) => {
    visited[x][y] = true;
    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < M &&
        !visited[nx][ny] &&
        graph[nx][ny] === 0
      ) {
        dfs(nx, ny, visited);
      }
    }
  };
  return dfs;
};

const checker = (N, M, virusArr) => (graph) => {
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const dfs = doDFS(N, M, graph);

  virusArr.forEach(([x, y]) => {
    dfs(x, y, visited);
  });

  let cnt = 0;
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (graph[i][j] === 0 && !visited[i][j]) {
        cnt += 1;
      }
    }
  }

  return cnt;
};

{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[N, M], ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const promisingWallArr = [],
    virusArr = [];
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (arr[i][j] === 0) promisingWallArr.push([i, j]);
      if (arr[i][j] === 2) virusArr.push([i, j]);
    }
  }

  let ans = 0;
  const checking = checker(N, M, virusArr);

  for (let i = 0; i < promisingWallArr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      for (let k = 0; k < j; k += 1) {
        arr[promisingWallArr[i][0]][promisingWallArr[i][1]] = 1;
        arr[promisingWallArr[j][0]][promisingWallArr[j][1]] = 1;
        arr[promisingWallArr[k][0]][promisingWallArr[k][1]] = 1;
        ans = Math.max(ans, checking(arr));
        arr[promisingWallArr[k][0]][promisingWallArr[k][1]] = 0;
        arr[promisingWallArr[j][0]][promisingWallArr[j][1]] = 0;
        arr[promisingWallArr[i][0]][promisingWallArr[i][1]] = 0;
      }
    }
  }
  console.log(ans);
}
