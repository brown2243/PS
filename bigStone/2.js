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

// 2583
{
  const os = process.platform;
  const fs = require("fs");
  const input =
    os === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[M, N, K], ...rects] = input
    .split("\n")
    .map((s) => s.split(" ").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const dfs = (graph, x, y, map, key) => {
    graph[x][y] = 1;
    map.set(key, (map.get(key) || 0) + 1);
    for (let k = 0; k < 4; k += 1) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < M && 0 <= ny && ny < N && graph[nx][ny] === 0) {
        dfs(graph, nx, ny, map, key);
      }
    }
  };

  const graph = Array.from({ length: M }, () => new Array(N).fill(0));
  rects.forEach((rect) => {
    const [x1, y1, x2, y2] = rect;
    for (let x = x1; x < x2; x += 1) {
      for (let y = y1; y < y2; y += 1) {
        graph[y][x] = 1;
      }
    }
  });
  const ansMap = new Map();
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!graph[i][j]) {
        const key = `${i}${j}`;
        dfs(graph, i, j, ansMap, key);
      }
    }
  }
  const ans = Array.from(ansMap.values()).sort((a, b) => a - b);
  console.log(`${ans.length}\n` + ans.join(" "));
}

// 1992
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...graph] = input.split("\n").map((s) => s.split(""));
  let ans = "";
  const quadTree = (x, y, n) => {
    const init = graph[x][y];
    for (let i = x; i < x + n; i += 1) {
      for (let j = y; j < y + n; j += 1) {
        if (init !== graph[i][j]) {
          ans += "(";
          const half = n / 2;
          quadTree(x, y, half);
          quadTree(x, y + half, half);
          quadTree(x + half, y, half);
          quadTree(x + half, y + half, half);
          ans += ")";
          return;
        }
      }
    }
    ans += init;
  };
  quadTree(0, 0, Number(N.join("")));
  console.log(ans);
}
// 2828
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[N, M], [J], ...apples] = input
    .split("\n")
    .map((s) => s.split(" ").map(Number));

  let ans = 0,
    l = 1;
  for (let i = 0; i < J; i += 1) {
    const tmp = apples[i][0];
    const r = l + M - 1;
    if (tmp >= l && tmp <= r) {
      continue;
    }
    if (tmp < l) {
      ans += l - tmp;
      l = tmp;
    } else {
      l += tmp - r;
      ans += tmp - r;
    }
  }
  console.log(ans);
}

// 2910
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [[N, C], arr] = input.split("\n").map((s) => s.split(" ").map(Number));

  const map = arr.reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());

  const ans = [];

  for (const [key, value] of map.entries()) {
    ans.push(new Array(value).fill(Number(key)));
  }

  console.log(
    ans
      .sort((a, b) => b.length - a.length)
      .flat()
      .join(" ")
  );
}

// 4659
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const arr = input.split("\n");

  const vowels = ["A", "E", "I", "O", "U"].map((v) => v.toLowerCase());

  let ans = "";

  for (let i = 0; i < arr.length - 1; i += 1) {
    const str = arr[i];
    let flag1 = false;
    let flag2 = true;
    let flag3 = true;

    let vCnt = 0,
      cCnt = 0;

    let last = "";

    for (let j = 0; j < str.length; j += 1) {
      const char = str[j];
      const isVowels = vowels.includes(char);
      if (!flag1 && isVowels) {
        flag1 = true;
      }
      if (isVowels) {
        vCnt += 1;
        cCnt = 0;
      } else {
        vCnt = 0;
        cCnt += 1;
      }
      if (vCnt === 3 || cCnt === 3) {
        flag2 = false;
      }
      if (last === char) {
        if (last === "e" || last === "o") {
          continue;
        } else {
          flag3 = false;
        }
      }
      last = char;
    }

    if (flag1 && flag2 && flag3) {
      ans += `<${str}> is acceptable.\n`;
    } else {
      ans += `<${str}> is not acceptable.\n`;
    }
  }
  console.log(ans);
}

// 2870
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...arr] = input.split("\n");

  const ans = [];
  arr.forEach((str) => {
    ans.push(...str.replace(/[a-z]/g, " ").split(" ").filter(Boolean));
  });

  ans.sort((a, b) => a - b);
  console.log(ans.map(BigInt).join("\n"));

  // console.log(
  //   ans
  //     .sort((a, b) => {
  //       if (a.length === b.length) {
  //         for (let i = 0; i < a.length; i += 1) {
  //           const code1 = a[i].charCodeAt();
  //           const code2 = b[i].charCodeAt();
  //           if (code1 === code2) {
  //             continue;
  //           }
  //           return code1 - code2;
  //         }
  //       }
  //       return a.length - b.length;
  //     })
  //     .map(Number)
  //     .join("\n")
  // );
}

// 10709
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...arr] = input.split("\n");

  const ans = arr
    .map((str) => {
      const sky = str.split("");
      let last = -1;
      return sky
        .map((cloud, idx) => {
          if (cloud === ".") {
            return last === -1 ? -1 : idx - last;
          }
          last = idx;
          return 0;
        })
        .join(" ");
    })
    .join("\n");
  console.log(ans);
}

// 3474
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...arr] = input.split("\n").map(Number);
  console.log(
    arr
      .map((v) => {
        let tCnt = 0,
          fCnt = 0;
        for (let i = 2; i <= v; i *= 2) {
          tCnt += Math.floor(v / i);
        }
        for (let i = 5; i <= v; i *= 5) {
          fCnt += Math.floor(v / i);
        }
        return Math.min(tCnt, fCnt);
      })
      .join("\n")
  );
}

// 2852
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...arr] = input.split("\n");

  let point1 = 0,
    point2 = 0;

  const playTime = 48 * 60;

  let aSum = 0,
    bSum = 0;
  let lastTime = 0;

  for (let i = 0; i < N; i += 1) {
    const [team, time] = arr[i].split(" ");
    const [m, s] = time.split(":").map(Number);
    const second = m * 60 + s;

    if (point1 > point2) {
      aSum += second - lastTime;
    }

    if (point2 > point1) {
      bSum += second - lastTime;
    }

    team === "1" ? (point1 += 1) : (point2 += 1);
    lastTime = second;
  }

  if (point1 > point2) {
    aSum += playTime - lastTime;
  }

  if (point2 > point1) {
    bSum += playTime - lastTime;
  }

  console.log(
    [aSum, bSum]
      .map((v) => {
        const mins = Math.floor(v / 60)
          .toString()
          .padStart(2, "0");
        const ss = (v % 60).toString().padStart(2, "0");
        return `${mins}:${ss}`;
      })
      .join("\n")
  );
}
