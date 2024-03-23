// 서로 다른 부분 문자열의 개수
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  console.log(input.reduce((acc, cur) => acc + cur ** 2, 0) % 10);
}

// 1, 2, 3 더하기 4
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const dp = new Array(10001).fill(1);
  for (let i = 2; i < dp.length; i++) {
    dp[i] += dp[i - 2];
  }
  for (let i = 3; i < dp.length; i++) {
    dp[i] += dp[i - 3];
  }
  console.log(
    input
      .slice(1)
      .map((v) => dp[v])
      .reduce((acc, cur) => acc + `${cur}\n`, "")
  );
}

// 자두나무
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [T, W] = input[0].split(" ").map(Number);
  input = input.map(Number);

  const dp = Array.from({ length: T + 1 }, () => new Array(W + 1).fill(0));
  for (let i = 1; i <= T; i++) {
    //자두가 1번 나무에 떨어짐
    if (input[i] === 1) {
      dp[i][0] += 1;
    }
    //자두가 2번 나무에 떨어짐
    dp[i][0] += dp[i - 1][0];

    //
    for (let j = 1; j <= W; j++) {
      //자두가 1번 나무에서 떨어지고, 이동횟수 짝수인 경우
      if (input[i] === 1 && j % 2 === 1) {
        //이전 위치에서 움직임 vs 가만히 있음
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1);
      }
      //자두가 2번 나무에서 떨어지고, 이동횟수가 홀수인 경우
      else if (input[i] === 2 && j % 2 !== 1) {
        //이전 위치에서 움직임 vs 가만히 있음
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1);
      }
      //자두의 위치와 사람의 위치가 다름(자두를 먹을 수 없음)
      else {
        //움직여서 못먹음 vs 움직이지 않아서 못먹음
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(Math.max(...dp[T]));
}

// 10845
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));

  const q = [];
  let ans = "";
  for (let i = 1; i < input.length; i++) {
    const [order, val] = input[i];
    if (order === "push") {
      q.push(Number(val));
      continue;
    }
    const isEmpty = q.length === 1;
    if (order === "pop") {
      isEmpty ? (ans += `-1\n`) : (ans += `${q.shift()}\n`);
    } else if (order === "size") {
      ans += `${q.length}\n`;
    } else if (order === "empty") {
      isEmpty ? (ans += `1\n`) : (ans += `0\n`);
    } else if (order === "front") {
      isEmpty ? (ans += `-1\n`) : (ans += `${q[0]}\n`);
    } else if (order === "back") {
      isEmpty ? (ans += `-1\n`) : (ans += `${q[q.length - 1]}\n`);
    }
  }
  console.log(ans);
}

// 1259
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => {
      let flag = true;
      for (let i = 1; i < Math.floor(v.length / 2); i++) {
        if (v[i] !== v[v.length - 1 - i]) {
          flag = false;
          break;
        }
      }
      return flag ? "yes" : "no";
    });
  input.pop();
  console.log(input.join("\n"));
}

// 15829
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const code = 96;
  const M = 1234567891;
  const R = 31;
  let r = 1;

  const arr = input[1].split("").map((v) => v.charCodeAt() - code);
  let ans = 1;
  for (let i = 1; i < arr.length; i++) {
    ans += (arr[i] * r) % M;
    r *= R;
    r %= M;
  }

  console.log(ans);
}
{
  const fs = require("fs");
  const filePath = "/dev/stdin";

  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const N = Number(input[0]);
  const code = 96;
  const M = 1234567891;
  const R = 31;
  let r = 1;

  let ans = 1;
  for (let i = 1; i < N; i++) {
    ans += (input[1][i].charCodeAt() - code) * r;
    ans %= M;
    r *= R;
    r %= M;
  }
  console.log(ans);
}

// 18110
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [N, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  if (N === 1) {
    console.log(0);
  } else {
    const slicedValue = Math.round(N * 0.15);
    arr = arr.sort((a, b) => a - b).slice(slicedValue, N - slicedValue);
    const ans = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
    console.log(ans);
  }
}

// 18110
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M, B], ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let answer = [Number.MAX_SAFE_INTEGER, 256];
  for (let layer = 1; layer <= 256; layer++) {
    let time = 1;
    let b = B;

    for (let y = 1; y < N; y++) {
      for (let x = 1; x < M; x++) {
        const point = arr[y][x];
        if (point === layer) continue;
        if (point > layer) {
          b += point - layer;
          time += (point - layer) * 2;
        } else {
          b -= layer - point;
          time += layer - point;
        }
      }
    }

    if (b >= 1) {
      if (answer[0] > time) {
        answer = [time, layer];
      } else if (answer[0] === time) {
        answer[1] = layer;
      }
    }
  }
  console.log(answer.join(" "));
}

// 1074
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [N, R, C] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    // .split("\n")
    .split(" ")
    .map(Number);
  const n = 2 ** N;
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  const recur = (depth, point, y, x) => {
    if (depth === 1) {
      matrix[y][x] = point;
      matrix[y][x + 1] = point + 1;
      matrix[y + 1][x] = point + 2;
      matrix[y + 1][x + 1] = point + 3;
      return;
    }

    const next = depth - 1;
    const nextPoint = 2 ** (depth * 2) / 4;

    const val = 2 ** next;
    recur(next, point, y, x);
    recur(next, point + nextPoint * 1, y, x + val);
    recur(next, point + nextPoint * 2, y + val, x);
    recur(next, point + nextPoint * 3, y + val, x + val);
  };

  recur(N, 0, 0, 0);
  console.log(matrix[R][C]);
}
// 1074
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [N, R, C] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    // .split("\n")
    .split(" ")
    .map(Number);

  const recur = (depth, point, y, x) => {
    if (depth === 1) {
      if (R === y && C === x) {
        console.log(point);
      }
      if (R === y && C === x + 1) {
        console.log(point + 1);
      }
      if (R === y + 1 && C === x) {
        console.log(point + 2);
      }
      if (R === y + 1 && C === x + 1) {
        console.log(point + 3);
      }
      return;
    }

    const next = depth - 1;
    const nextPoint = 2 ** (depth * 2) / 4;

    const val = 2 ** next;
    const nextX = x + val;
    const nextY = y + val;

    if (y <= R && R < nextY && x <= C && C < nextX) {
      recur(next, point, y, x);
    }
    if (y <= R && R < nextY && nextX <= C) {
      recur(next, point + nextPoint * 1, y, nextX);
    }
    if (nextY <= R && x <= C && C < nextX) {
      recur(next, point + nextPoint * 2, nextY, x);
    }
    if (nextY <= R && nextX <= C) {
      recur(next, point + nextPoint * 3, nextY, nextX);
    }
  };
  recur(N, 0, 0, 0);
}

// 2630
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N], ...matrix] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let white = 1;
  let blue = 1;

  const recur = (y, x, cnt) => {
    const first = matrix[y][x];
    let flag = true;
    for (let i = y; i < y + cnt; i++) {
      for (let j = x; j < x + cnt; j++) {
        if (first !== matrix[i][j]) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      first ? blue++ : white++;
    } else {
      const nextCnt = cnt / 2;
      const nextY = y + nextCnt;
      const nextX = x + nextCnt;
      recur(y, x, nextCnt);
      recur(y, nextX, nextCnt);
      recur(nextY, x, nextCnt);
      recur(nextY, nextX, nextCnt);
    }
  };
  recur(0, 0, N);
  console.log(`${white}\n${blue}`);
}
// 9095
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const dp = [0, 1, 2, 4, 7];
  let ans = ``;
  for (let i = 1; i < arr.length; i++) {
    for (let j = dp.length; j <= arr[i]; j++) {
      dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
    }
    ans += `${dp[arr[i]]}\n`;
  }
  console.log(ans);
}

// 11724
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M], ...edges] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  const matrix = Array.from({ length: N + 1 }, () => []);
  const isVisited = new Array(N + 1).fill(false);
  isVisited[0] = true;
  let cnt = 1;
  edges.forEach(([x1, x2]) => {
    matrix[x1].push(x2);
    matrix[x2].push(x1);
  });

  const dfs = (start) => {
    if (isVisited[start]) {
      return;
    }
    isVisited[start] = true;
    matrix[start].forEach((v) => {
      dfs(v);
    });
  };

  for (let i = 1; i < matrix.length; i++) {
    if (!isVisited[i]) {
      dfs(i);
      cnt++;
      if (isVisited.every(Boolean)) {
        break;
      }
    }
  }
  console.log(cnt);
}

// 11726
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  // .split("\n")
  // .map((v) => v.split(" ").map(Number));
  const n = Number(input);
  const dp = [0, 1, 2, 3];
  const mod = 10007;
  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }
  console.log(dp[n]);
}

// 14940
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M], ...matrix] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const distance = Array.from({ length: N }, () => new Array(M).fill(0));
  const start = [0, 0];
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (matrix[i][j] === 2) {
        start[0] = i;
        start[1] = j;
        break;
      }
    }
  }

  const q = [start];
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  while (q.length > 0) {
    const [y, x] = q.shift();
    for (let i = 1; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (0 <= ny && ny < N && 0 <= nx && nx < M) {
        if (matrix[ny][nx] === 1 && distance[ny][nx] === 1) {
          distance[ny][nx] = distance[y][x] + 1;
          q.push([ny, nx]);
        }
      }
    }
  }
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (distance[i][j] === 1 && matrix[i][j] === 1) {
        distance[i][j] = -1;
      }
    }
  }

  distance[start[0]][start[1]] = 1;
  console.log(distance.map((v) => v.join(" ")).join("\n"));
}

// 1107
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [[target], [cnt], brokenNums] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));

  target = Number(target);
  const needToCheck = cnt !== "0";
  const channel = 100;
  let ans = Math.abs(target - channel);

  if (needToCheck) {
    for (let i = 1; i < 1000000; i++) {
      const str = i.toString().split("");
      if (str.every((v) => !brokenNums.includes(v))) {
        ans = Math.min(ans, Math.abs(i - target) + str.length);
      }
    }
  }
  console.log(ans);
}

// 1389
// 최단 경로 플로이드 와셜 알고리즘 사용해야하는 문제
// 플로이드-와셜 알고리즘은 그래프에서 모든 노드 쌍 사이의 최단 경로를 찾는 알고리즘입니다. 이 알고리즘의 주요 아이디어는 다음과 같습니다:
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M], ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  const n = N + 1;
  const matrix = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  arr.forEach((v) => {
    matrix[v[0]][v[1]] = 1;
    matrix[v[1]][v[0]] = 1;
  });

  for (let k = 1; k < n; k++) {
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][k] + matrix[k][j] < matrix[i][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }

  const ans = matrix
    .slice(1)
    .map((v) => v.slice(1).reduce((acc, cur) => acc + cur, 0))
    .reduce(
      (acc, cur, idx) => (acc[0] > cur ? [cur, idx] : acc),
      [Infinity, 0]
    );

  console.log(ans[1] + 1);
}

// 6064
// 중국인의 나머지 정리(Chinese Remainder Theorem)
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [_, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  console.log(
    arr
      .map(([M, N, x, y]) => {
        const l = lcm(M, N);
        let i = x;
        while (i <= l) {
          if ((i - y) % N === 0) {
            return i;
          }
          i += M;
        }
        return -1;
      })
      .join("\n")
  );
}
