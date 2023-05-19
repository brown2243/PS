// 이론
{
  let n = 4;
  const a = ["사과", "딸기", "포도", "배"];
  for (let i = 0; i < 1 << n; i++) {
    console.log("-------------");
    console.log("-------------");
    console.log("i:", i, i.toString(2).padStart(4, "0"));
    console.log("-------------");
    let ret = "";
    for (let j = 0; j < n; j++) {
      console.log("j:", j, (1 << j).toString(2).padStart(N, "0"));
      if (i & (1 << j)) {
        ret += a[j] + " ";
      }
    }
    console.log(ret);
  }
}
{
  let n = 4;
  const a = ["사과", "딸기", "포도", "배"];
  const go = (num) => {
    let ret = "";
    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        ret += a[i] + " ";
      }
    }
    console.log(ret);
  };

  for (let i = 1; i < n; i++) {
    go(1 | (1 << i));
  }
}
// 문제
// 19942
// 메모리 초과
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N], mins, ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  // p, f, s, v

  const permutations = [];
  const permutation = (arr = []) => {
    if (arr.length > 0) {
      permutations.push([...arr]);
    }

    for (let i = 1; i <= N; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        permutation(arr);
        arr.pop();
      }
    }
  };
  permutation();
  const ans = permutations
    .map((permutationValues, idx) =>
      permutationValues.reduce(
        (acc, cur) => {
          const now = arr[cur - 1];
          acc[0] += now[0];
          acc[1] += now[1];
          acc[2] += now[2];
          acc[3] += now[3];
          acc[4] += now[4];
          return acc;
        },
        [0, 0, 0, 0, 0, idx]
      )
    )
    .filter(
      (v) =>
        mins[0] <= v[0] && mins[1] <= v[1] && mins[2] <= v[2] && mins[3] <= v[3]
    )
    .sort((a, b) => a[4] - b[4]);

  console.log(
    ans.length === 0 ? -1 : `${ans[0][4]}\n${permutations[ans[0][5]].join(" ")}`
  );
}
// 19942
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N], mins, ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  // p, f, s, v
  const [mp, mf, ms, mv] = mins;
  let min = Number.MAX_SAFE_INTEGER;
  let ansObj = {};

  for (let i = 1; i < 1 << N; i++) {
    let p = 0,
      f = 0,
      s = 0,
      v = 0,
      price = 0;

    const tmp = [];

    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        tmp.push(j + 1);
        p += arr[j][0];
        f += arr[j][1];
        s += arr[j][2];
        v += arr[j][3];
        price += arr[j][4];
      }
    }

    if (min >= price && p >= mp && f >= mf && s >= ms && v >= mv) {
      min = price;
      if (ansObj?.[min]) {
        ansObj[min].push(tmp);
      } else {
        ansObj[min] = [tmp];
      }
    }
  }

  if (min === Number.MAX_SAFE_INTEGER) {
    console.log(-1);
  } else {
    ansObj[min].sort();
    console.log(`${min}\n${ansObj[min][0].join(" ")}`);
  }
}

// 1285
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [N, ...arr] = input.split("\n");
  N = Number(N);
  arr = arr.map((v) => v.split(""));

  const bitsArr = [];
  let ret = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    let bits = 0;
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === "T") {
        bits += 1 << j;
      }
    }
    bitsArr.push(bits);
  }

  const dfs = (here) => {
    if (here === N) {
      let sum = 0;
      for (let i = 1; i <= 1 << (N - 1); i *= 2) {
        let cnt = 0;
        for (let j = 0; j < N; j++) {
          if (bitsArr[j] & i) {
            cnt++;
          }
        }
        sum += Math.min(cnt, N - cnt);
      }
      ret = Math.min(ret, sum);
      return;
    }

    dfs(here + 1);
    bitsArr[here] = ~bitsArr[here];
    dfs(here + 1);
  };

  dfs(0);
  console.log(ret);
}

// 17471
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N], peoples, ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const linked = Array.from({ length: N + 1 }, () => []);
  arr.forEach((v, idx) => {
    const now = idx + 1;
    const [_, ...nodes] = v;
    nodes.forEach((node) => {
      linked[now].push(node);
      linked[node].push(now);
    });
  });

  let min = Number.MAX_SAFE_INTEGER;
  const visited = new Array(N + 1);
  const sides = new Array(N + 1);

  const dfs = (here, side) => {
    visited[here] = 1;
    const ret = [1, peoples[here - 1]];

    for (let there of linked[here]) {
      if (sides[there] !== side) continue;
      if (visited[there]) continue;
      const _ret = dfs(there, side);
      ret[0] += _ret[0];
      ret[1] += _ret[1];
    }
    return ret;
  };

  for (let i = 1; i < (1 << N) - 1; i++) {
    visited.fill(0);
    sides.fill(0);

    let idx1 = -1,
      idx2 = -1;

    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        sides[j + 1] = 1;
        idx1 = j + 1;
      } else {
        idx2 = j + 1;
      }
    }

    const [cnt1, total1] = dfs(idx1, 1);
    const [cnt2, total2] = dfs(idx2, 0);

    if (cnt1 + cnt2 === N) {
      min = Math.min(min, Math.abs(total1 - total2));
    }
  }
  console.log(min === Number.MAX_SAFE_INTEGER ? -1 : min);
}

// 1987
const solve = (N, M, matrix) => {
  const codeA = "A".charCodeAt();
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let ans = 1;
  const code = matrix[0][0].charCodeAt() - codeA;
  const bit = 1 << code;

  const dfs = (y, x, bit, depth) => {
    ans = Math.max(ans, depth);
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

      const nextBit = 1 << (matrix[ny][nx].charCodeAt() - codeA);
      if (!(bit & nextBit)) {
        dfs(ny, nx, bit | nextBit, depth + 1);
      }
    }
  };
  dfs(0, 0, bit, 1);
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

// 14890
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N, L], ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  for (let i = 0; i < N; i++) {
    const tmp = [];
    for (let j = 0; j < N; j++) {
      tmp.push(arr[j][i]);
    }
    arr.push(tmp);
  }

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    let cnt = 1,
      j = 0;

    for (; j < arr[i].length - 1; j++) {
      if (arr[i][j] === arr[i][j + 1]) cnt++;
      else if (arr[i][j] + 1 === arr[i][j + 1] && cnt >= L) cnt = 1;
      else if (arr[i][j] - 1 === arr[i][j + 1] && cnt >= 0) cnt = -L + 1;
      else break;
    }
    if (j === N - 1 && cnt >= 0) ans++;
  }
  console.log(ans);
}
// 1062
// 오답이지만 ㅠㅠ...
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");

  const [N, K] = arr[0].split(" ").map(Number);

  const codeA = "a".charCodeAt();
  const initBit =
    (1 << ("c".charCodeAt() - codeA)) +
    (1 << ("i".charCodeAt() - codeA)) +
    (1 << ("t".charCodeAt() - codeA)) +
    (1 << ("n".charCodeAt() - codeA)) +
    1;

  const words = arr.slice(1).map((word) =>
    word
      .split("")
      // ㅆㅃㅆㅃㅆㅃㅆㅃㅆㅃ
      .reduce((acc, cur) => acc + (1 << (cur.charCodeAt() - codeA)), 0)
  );

  const bits = [];

  const combination = (start = 0, bit = initBit, depth = 0) => {
    if (depth === K) {
      bits.push(bit);
      return;
    }
    for (let i = start; i < 26; i += 1) {
      if (!(bit & (1 << i))) {
        combination(i + 1, bit + (1 << i), depth + 1);
      }
    }
  };
  combination();

  let max = 0;
  for (let i = 0; i < bits.length; i++) {
    const bit = bits[i];
    const now = words.reduce((acc, word) => {
      if ((bit & word) === word) {
        acc++;
      }
      return acc;
    }, 0);
    max = Math.max(max, now);
  }
  console.log(max);
}
// 1062
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");

  let [N, K] = arr[0].split(" ").map(Number);

  const codeA = "a".charCodeAt();

  const initBit =
    (1 << ("c".charCodeAt() - codeA)) +
    (1 << ("i".charCodeAt() - codeA)) +
    (1 << ("t".charCodeAt() - codeA)) +
    (1 << ("n".charCodeAt() - codeA)) +
    1;

  K -= 5;

  const words = arr
    .slice(1)
    .map((word) =>
      word
        .split("")
        .reduce((acc, cur) => acc | (1 << (cur.charCodeAt() - codeA)), 0)
    );

  let max = 0;
  const combination = (start = 0, bit = initBit, depth = 0) => {
    if (K < 0) return;
    if (depth === K) {
      const cnt = words.reduce((acc, word) => {
        if ((bit & word) === word) {
          acc++;
        }
        return acc;
      }, 0);
      max = Math.max(max, cnt);
      return;
    }
    for (let i = start; i < 26; i += 1) {
      const nextBit = 1 << i;
      if (!(bit & nextBit)) {
        combination(i + 1, bit | nextBit, depth + 1);
      }
    }
  };
  combination();
  console.log(max);
}

// 1094
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const X = Number(input);

  if (X === 64) {
    console.log(1);
    return;
  }
  const bars = [64];
  while (true) {
    const now = bars.pop();
    const half = now / 2;
    const sum = bars.reduce((acc, cur) => acc + cur, 0) + half;
    if (sum >= X) {
      if (sum === X) {
        console.log(bars.length + 1);
        break;
      }
      bars.push(half);
    } else {
      if (sum === X) {
        console.log(bars.length + 2);
        break;
      }
      bars.push(half);
      bars.push(half);
    }
  }
}
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let x = Number(input);
  let cnt = 1;
  while (x !== 1) {
    if (x & 1) cnt++;
    x = x >> 1;
  }
  console.log(cnt);
}

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
