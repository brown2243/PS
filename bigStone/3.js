// 15686
{
  const combinate = (N, cnt) => {
    const box = [];
    const recur = (tmp = [], start = 0) => {
      if (tmp.length === cnt) {
        box.push([...tmp]);
      } else {
        for (let i = start; i < N; i++) {
          if (!tmp.includes(i)) {
            tmp.push(i);
            recur(tmp, i);
            tmp.pop();
          }
        }
      }
    };
    recur();
    return box;
  };
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[N, M], ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const houses = [];
  const chickens = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 2) {
        chickens.push([i, j]);
      }
      if (arr[i][j] === 1) {
        houses.push([i, j]);
      }
    }
  }

  const combination = combinate(chickens.length, M);
  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < combination.length; i += 1) {
    const now = combination[i];
    let cityDistance = 0;
    houses.forEach(([x, y]) => {
      let houseDistance = Number.MAX_SAFE_INTEGER;
      // now.forEach(([dx, dy]) => {
      now.forEach((idx) => {
        const [dx, dy] = chickens[idx];
        const tmp = Math.abs(dx - x) + Math.abs(dy - y);
        houseDistance = Math.min(houseDistance, tmp);
      });
      cityDistance += houseDistance;
    });
    ans = Math.min(cityDistance, ans);
  }
  console.log(ans);
}

// 2589
{
  const setting = (N, M, graph) => {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    const solve = (y, x) => {
      const visited = Array.from({ length: N }, () => new Array(M).fill(0));
      visited[y][x] = 1;
      const q = [[y, x, 0]];
      let max = 0;

      while (q.length > 0) {
        const [y, x] = q.shift();
        max = Math.max(max, visited[y][x]);

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
          if (visited[ny][nx]) continue;
          if (graph[ny][nx] == "W") continue;
          visited[ny][nx] = visited[y][x] + 1;
          q.push([ny, nx]);
        }
      }
      return max;
    };
    return solve;
  };
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const arr = input.split("\n");
  const [N, M] = arr[0].split(" ").map(Number);
  const graph = arr.slice(1).map((v) => v.split(""));

  let ans = 0;
  const solve = setting(N, M, graph);

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[y][x] == "L") {
        ans = Math.max(ans, solve(y, x));
      }
    }
  }
  console.log(ans - 1);
}

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
