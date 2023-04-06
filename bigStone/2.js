// 2178
{
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();

  const [info, ...arr] = input.split("\n");
  const [N, M] = info.split(" ").map(Number);
  const data = arr.map((v) => v.split("").map(Number));

  const isVisited = Array.from({ length: N }, () => new Array(M).fill(0));

  const moveSet = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const x = 0,
    y = 0;
  isVisited[x][y] = 1;

  const queue = [[x, y]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const next of moveSet) {
      const dx = x + next[0];
      const dy = y + next[1];

      if (dx < 0 || dy < 0 || dx >= N || dy >= M || data[dx][dy] === 0) {
        continue;
      }

      if (isVisited[dx][dy]) {
        continue;
      }

      isVisited[dx][dy] = isVisited[x][y] + 1;
      queue.push([dx, dy]);
    }
  }
  console.log(isVisited[N - 1][M - 1]);
}

// 1012
{
  const os = process.platform;
  const fs = require("fs");
  const input =
    os === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [info, ...arr] = input.split("\n");
  const numArr = arr.map((s) => s.split(" ").map(Number));

  const moveSet = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ],
    q = [];

  for (let i = 0; i < Number(info); i += 1) {
    const [M, N, K] = numArr[0];
    const graph = Array.from({ length: M }, () => new Array(N).fill(0));

    for (let j = 1; j <= K; j += 1) {
      const [m, n] = numArr[j];
      graph[m][n] = 1;
    }

    let cnt = 0;
    for (let x = 0; x < M; x += 1) {
      for (let y = 0; y < N; y += 1) {
        if (graph[x][y] === 1) {
          cnt += 1;
          q.push([x, y]);
          while (q.length > 0) {
            const [x, y] = q.shift();

            for (const next of moveSet) {
              const dx = x + next[0];
              const dy = y + next[1];
              if (
                dx < 0 ||
                dy < 0 ||
                dx >= M ||
                dy >= N ||
                graph[dx][dy] === 0
              ) {
                continue;
              }
              graph[dx][dy] = 0;
              q.push([dx, dy]);
            }
          }
        }
      }
    }
    console.log(cnt);
    numArr.splice(0, K + 1);
  }
}

// 2468
{
  const os = process.platform;
  const fs = require("fs");
  const input =
    os === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[N], ...graph] = input
    .split("\n")
    .map((s) => s.split(" ").map(Number));

  const moveSet = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ],
    q = [];

  const dfs = (x, y, visited) => {
    moveSet.forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        visited[nx][ny] = true;
        dfs(nx, ny, visited);
      }
    });
  };

  let ans = 0;
  for (let height = 1; height < 101; height += 1) {
    const visited = [...Array(N)].map((_, x) =>
      [...Array(N)].map((_, y) => graph[x][y] < height)
    );
    // const visited = Array.from({ length: N }, (idx) => new Array(N).fill(false));
    let cnt = 0;

    for (let x = 0; x < N; x += 1) {
      for (let y = 0; y < N; y += 1) {
        if (!visited[x][y]) {
          cnt += 1;
          dfs(x, y, visited);
        }
      }
    }
    ans = Math.max(ans, cnt);
  }
  console.log(ans);
}
