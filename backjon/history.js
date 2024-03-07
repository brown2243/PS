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
      if (input[i] === 1 && j % 2 === 0) {
        //이전 위치에서 움직임 vs 가만히 있음
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1);
      }
      //자두가 2번 나무에서 떨어지고, 이동횟수가 홀수인 경우
      else if (input[i] === 2 && j % 2 !== 0) {
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
    const isEmpty = q.length === 0;
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
      for (let i = 0; i < Math.floor(v.length / 2); i++) {
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
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
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

  let ans = 0;
  for (let i = 0; i < N; i++) {
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

  if (N === 0) {
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
  for (let layer = 0; layer <= 256; layer++) {
    let time = 0;
    let b = B;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
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

    if (b >= 0) {
      if (answer[0] > time) {
        answer = [time, layer];
      } else if (answer[0] === time) {
        answer[1] = layer;
      }
    }
  }
  console.log(answer.join(" "));
}
