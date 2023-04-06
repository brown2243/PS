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
