// 11660
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

  const matrix = arr.slice(0, N);
  const points = arr.slice(N);
  const dp = new Array(N).fill().map((_, i) => new Array(N).fill(matrix[i][0]));

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      dp[i][j] = matrix[i][j] + dp[i][j - 1];
    }
  }

  let ans = "";
  for (let i = 0; i < points.length; i += 1) {
    let sum = 0;
    let [y1, x1, y2, x2] = points[i].map((v) => v - 1);
    while (y1 <= y2) {
      sum += x1 === 0 ? dp[y1][x2] : dp[y1][x2] - dp[y1][x1 - 1];
      y1++;
    }
    ans += `${sum}\n`;
  }
  console.log(ans);
}
