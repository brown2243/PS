// 2559
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const [[N, K], arr] = inputs.map((str) => str.split(" ").map(Number));
  let max = arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);
  let sum = max;
  for (let i = K; i < N; i++) {
    sum += arr[i] - arr[i - K];
    max = Math.max(max, sum);
  }
  console.log(max);
}
