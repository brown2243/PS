// 11724
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
  const isVisted = new Array(n).fill(false);
  const network = Array.from({ length: n }, () => []);

  arr.forEach(([x, y]) => {
    network[x].push(y);
    network[y].push(x);
  });

  let ans = 0;
  const dfs = (now) => {
    if (isVisted[now]) {
      return;
    }
    isVisted[now] = true;
    network[now].forEach(dfs);
  };

  for (let i = 1; i < n; i++) {
    if (!isVisted[i]) {
      dfs(i);
      ans += 1;
    }
  }
  console.log(ans);
}
