// 16234
const setting = (N, L, R, graph) => {
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  const dfs = (visited, y, x) => {
    const points = [];
    let total = 0;

    const recur = (y, x) => {
      visited[y][x] = true;
      total += graph[y][x];
      points.push([y, x]);

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[ny][nx]) continue;
        const sub = Math.abs(graph[y][x] - graph[ny][nx]);
        if (L <= sub && sub <= R) {
          recur(ny, nx);
        }
      }
    };
    recur(y, x);
    return { total, points };
  };

  return dfs;
};

{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[N, L, R], ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let cycle = 0;
  const dfs = setting(N, L, R, arr);

  while (true) {
    let flag = false;
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!visited[y][x]) {
          const { total, points } = dfs(visited, y, x);
          if (points.length > 1) {
            flag = true;
            const div = Math.floor(total / points.length);
            points.forEach(([y, x]) => {
              arr[y][x] = div;
            });
          }
        }
      }
    }
    if (!flag) {
      break;
    }
    cycle++;
  }
  console.log(cycle);
}
