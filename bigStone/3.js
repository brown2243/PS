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

// 4179
// 시간초과 코드
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [info, ...arr] = input.split("\n");

  const [R, C] = info.split(" ").map(Number);
  const maze = arr.map((v) => v.split(""));

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0],
    q = [],
    firePoints = [];
  let tmp = 0,
    lastFireIdx = 0;
  let cycle = 1;
  for (let y = 0; y < C; y++) {
    for (let x = 0; x < R; x++) {
      const val = maze[y][x];
      if (val === "J") {
        q.push([y, x]);
      }
      if (val === "F") {
        firePoints.push([y, x]);
      }
    }
  }

  while (q.length > 0) {
    const [y, x] = q.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) {
        console.log(cycle);
        return;
      }
      if (maze[ny][nx] !== ".") continue;
      q.push([ny, nx]);
    }

    tmp = firePoints.length;
    for (let i = lastFireIdx; i < firePoints.length; i++) {
      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (nx >= 0 && nx < R && ny >= 0 && ny < C && maze[ny][nx] === ".") {
          maze[ny][nx] = "F";
          firePoints.push([ny, nx]);
        }
      }
    }
    lastFireIdx = tmp;
    cycle += 1;
  }

  console.log("IMPOSSIBLE");
}
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [info, ...arr] = input.split("\n");

  const [R, C] = info.split(" ").map(Number);
  const maze = arr.map((v) => v.split(""));

  const fireCheck = Array.from({ length: R }, () =>
    new Array(C).fill(Number.MAX_SAFE_INTEGER)
  );
  const visited = Array.from({ length: R }, () => new Array(C).fill(0));

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0],
    q = [],
    firePoints = [];

  for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
      const val = maze[y][x];
      if (val === "J") {
        q.push([y, x]);
        visited[y][x] = 1;
      }
      if (val === "F") {
        firePoints.push([y, x]);
        fireCheck[y][x] = 1;
      }
    }
  }

  while (firePoints.length > 0) {
    const [y, x] = firePoints.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (nx < 0 || nx >= C || ny < 0 || ny >= R) continue;
      if (fireCheck[ny][nx] !== Number.MAX_SAFE_INTEGER || maze[ny][nx] === "#")
        continue;
      firePoints.push([ny, nx]);
      fireCheck[ny][nx] = fireCheck[y][x] + 1;
    }
  }

  let ans = 0;
  while (q.length > 0) {
    const [y, x] = q.shift();
    if (x === 0 || x === C - 1 || y === 0 || y === R - 1) {
      ans = visited[y][x];
      break;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (nx < 0 || nx >= C || ny < 0 || ny >= R) continue;
      if (visited[ny][nx] || maze[ny][nx] === "#") continue;
      if (fireCheck[ny][nx] <= visited[y][x] + 1) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push([ny, nx]);
    }
  }
  console.log(ans !== 0 ? ans : "IMPOSSIBLE");
}

// 12869
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [info, arr] = input.split("\n");

  const [N] = info.split(" ").map(Number);
  const scvs = arr.split(" ").map(Number);

  const hp = 61;
  const visited = [...new Array(hp)].map((_) =>
    [...new Array(hp)].map((_) => [...new Array(hp)].fill(0))
  );
  const attacks = [
    [9, 3, 1],
    [9, 1, 3],
    [3, 1, 9],
    [3, 9, 1],
    [1, 3, 9],
    [1, 9, 3],
  ];

  const q = [[scvs[0] || 0, scvs[1] || 0, scvs[2] || 0]];
  while (q.length > 0) {
    const [a, b, c] = q.shift();
    // console.log(a, b, c);

    if (visited[0][0][0]) break;
    for (let i = 0; i < 6; i++) {
      const na = Math.max(0, a - attacks[i][0]);
      const nb = Math.max(0, b - attacks[i][1]);
      const nc = Math.max(0, c - attacks[i][2]);

      if (visited[na][nb][nc]) continue;
      visited[na][nb][nc] = visited[a][b][c] + 1;
      q.push([na, nb, nc]);
    }
  }
  console.log(visited[0][0][0]);
}

// 12851
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [N, K] = input.split(" ").map(Number);
  if (N === K) {
    console.log(`${0}\n${1}`);
    return;
  }

  const max = 100001;

  const visited = new Array(max).fill(0);
  const cnt = new Array(max).fill(0);
  const q = [N];

  visited[N] = 1;
  cnt[N] = 1;
  while (q.length > 0) {
    const now = q.shift();
    for (let i = 1; i < 4; i++) {
      let next = now;
      if (i === 1) next += 1;
      if (i === 2) next -= 1;
      if (i === 3) next *= 2;

      if (0 <= next && next < max) {
        if (!visited[next]) {
          q.push(next);
          visited[next] = visited[now] + 1;
          cnt[next] += cnt[now];
        } else if (visited[next] === visited[now] + 1) {
          cnt[next] += cnt[now];
        }
      }
    }
  }
  console.log(`${visited[K] - 1}\n${cnt[K]}`);
}
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [N, K] = input.split(" ").map(Number);
  if (N === K) {
    console.log(`0\n${K}`);
    return;
  }

  const max = 100001;

  const prev = new Array(max).fill(0);
  const visited = new Array(max).fill(0);
  const q = [N];

  visited[N] = 1;

  while (q.length > 0) {
    const now = q.shift();
    for (let i = 1; i < 4; i++) {
      let next = now;
      if (i === 1) next += 1;
      if (i === 2) next -= 1;
      if (i === 3) next *= 2;

      if (0 <= next && next < max && !visited[next]) {
        visited[next] = visited[now] + 1;
        prev[next] = now;
        if (next === K) {
          const path = [];
          for (let i = K; i !== N; i = prev[i]) {
            path.push(i);
          }
          path.push(N);
          console.log(`${visited[now]}\n${path.reverse().join(" ")}`);
          return;
        }
        q.push(next);
      }
    }
  }
}
// 17071 플 5 skip

// 14497
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [info, points, ...arr] = input.split("\n");
  const [N, M] = info.split(" ").map(Number);
  const [y1, x1] = points.split(" ").map((v) => Number(v) - 1);
  const matrix = arr.map((v) => v.split(""));

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let cnt = 0;
  let flag = true;

  while (flag) {
    const q = [[y1, x1]];
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));
    visited[y1][x1] = true;

    while (q.length > 0) {
      const [y, x] = q.shift();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx]) {
          visited[ny][nx] = true;
          if (matrix[ny][nx] === "#") {
            flag = false;
            break;
          } else if (matrix[ny][nx] === "1") {
            matrix[ny][nx] = "0";
          } else {
            q.push([ny, nx]);
          }
        }
      }
    }
    cnt++;
  }
  console.log(cnt);
}
// 3197
// 시간초과
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [info, ...matrix] = input.split("\n");

  const [N, M] = info.split(" ").map(Number);
  matrix = matrix.map((v) => v.split(""));

  let airs = [];
  let bird = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] !== "X") airs.push([i, j]);
      if (matrix[i][j] === "L") bird.push([i, j]);
    }
  }

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let flag = true;
  let days = 0;

  while (flag) {
    const nextAirs = [];
    for (let i = 0; i < airs.length; i++) {
      const [y, x] = airs[i];
      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
        if (matrix[ny][nx] === "X") {
          nextAirs.push([ny, nx]);
          matrix[ny][nx] = ".";
        }
      }
    }

    airs = nextAirs;
    const q = [bird[0]];
    const visited = Array.from({ length: N }, () => new Array(M).fill(0));

    while (q.length > 0) {
      const [y, x] = q.shift();
      visited[y][x] = 1;

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (
          nx < 0 ||
          nx >= M ||
          ny < 0 ||
          ny >= N ||
          visited[ny][nx] ||
          matrix[ny][nx] === "X"
        )
          continue;
        if (ny === bird[1][0] && nx === bird[1][1]) {
          flag = false;
          break;
        } else {
          q.push([ny, nx]);
        }
      }
    }
    days++;
  }
  console.log(days);
}
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [info, ...matrix] = input.split("\n");

  const [N, M] = info.split(" ").map(Number);
  matrix = matrix.map((v) => v.split(""));

  let waterQ = [];
  let swanQ = [];

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const visitedSwan = Array.from({ length: N }, () => new Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] !== "X") {
        visited[i][j] = 1;
        waterQ.push([i, j]);
      }
      if (matrix[i][j] === "L") swanQ.push([i, j]);
    }
  }

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let days = 1;

  swanQ.pop();
  visitedSwan[swanQ[0][0]][swanQ[0][1]] = true;

  while (true) {
    let flag = false;
    const swanTmp = [];
    const waterTmp = [];

    while (waterQ.length > 0) {
      // shift -> pop으로 바꾸니 시간초과 나던게 통과 ㄷㄷ
      const [y, x] = waterQ.pop();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= M || ny < 0 || ny >= N || visited[ny][nx]) continue;
        if (matrix[ny][nx] === "X") {
          visited[ny][nx] = 1;
          waterTmp.push([ny, nx]);
          matrix[ny][nx] = ".";
        }
      }
    }

    while (swanQ.length > 0) {
      // shift -> pop으로 바꾸니 시간초과 나던게 통과 ㄷㄷ
      const [y, x] = swanQ.pop();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= M || ny < 0 || ny >= N || visitedSwan[ny][nx])
          continue;
        visitedSwan[ny][nx] = true;
        if (matrix[ny][nx] == ".") swanQ.push([ny, nx]);
        else if (matrix[ny][nx] == "X") swanTmp.push([ny, nx]);
        else if (matrix[ny][nx] == "L") {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      break;
    }

    swanQ = swanTmp;
    waterQ = waterTmp;
    days++;
  }
  console.log(days);
}

// 1987

const solve = (N, M, matrix) => {
  const codeA = "A".charCodeAt();
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let ans = 1;
  const alpabet = new Array(26).fill(false);
  const code = matrix[0][0].charCodeAt() - codeA;
  alpabet[code] = true;

  const dfs = (y, x, depth) => {
    ans = Math.max(ans, depth);
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

      const code = matrix[ny][nx].charCodeAt() - codeA;
      if (!alpabet[code]) {
        alpabet[code] = true;
        dfs(ny, nx, depth + 1);
        alpabet[code] = false;
      }
    }
  };
  dfs(0, 0, 1);
  return ans;
};

{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [info, ...matrix] = input.split("\n");

  const [N, M] = info.split(" ").map(Number);
  matrix = matrix.map((v) => v.split(""));

  const ans = solve(N, M, matrix);
  console.log(ans);
}

// 2529
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [N, operators] = input.split("\n");
  N = Number(N);
  operators = operators.split(" ");

  const checked = new Array(10).fill(false);
  const box = [];

  const isValid = (x, y, oper) =>
    (x < y && oper === "<") || (x > y && oper === ">");

  const dfs = (str, idx) => {
    if (idx === N + 1) {
      box.push(str);
      return;
    }
    for (let i = 0; i < 10; i++) {
      if (checked[i]) continue;
      if (idx === 0 || isValid(Number(str[idx - 1]), i, operators[idx - 1])) {
        checked[i] = true;
        dfs(str + i, idx + 1);
        checked[i] = false;
      }
    }
  };
  dfs("", 0);
  box.sort();
  console.log(box[box.length - 1]);
  console.log(box[0]);
}

// 9934
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [N, arr] = input.split("\n");
  N = Number(N);
  if (N === 1) {
    console.log(1);
  }
  arr = arr.split(" ");
  const ans = Array.from({ length: N }, () => []);

  const recur = (start, end, depth) => {
    if (depth === N) {
      return;
    }
    const mid = Math.floor((start + end) / 2);
    ans[depth].push(arr[mid]);
    recur(start, mid - 1, depth + 1);
    recur(mid + 1, end, depth + 1);
  };

  recur(0, arr.length - 1, 0);
  console.log(ans.map((v) => v.join(" ")).join("\n"));
}
