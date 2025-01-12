// 15654
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M], arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  arr.sort((a, b) => a - b);
  const isVisited = new Array(N).fill(false);
  const out = [];

  const solve = (depth) => {
    if (depth === M) {
      console.log(out.join(" "));
      return;
    }

    let overlap = 0;
    for (let i = 0; i < N; i++) {
      if (!isVisited[i] && overlap !== arr[i]) {
        isVisited[i] = true;
        out.push(arr[i]);
        overlap = arr[i];
        solve(depth + 1);
        isVisited[i] = false;
        out.pop();
      }
    }
  };

  solve(0);
}
