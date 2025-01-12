// 대표값2
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const arr = input.map(Number);

  const mid = arr[Math.floor(arr.length / 2)];
  const avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  console.log(`${avg}\n${mid}`);
}

// 커트라인
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [n, k] = input[0].split(" ").map(Number);

  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  console.log(arr[k - 1]);
}

// 수 정렬하기 2
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const arr = input.slice(1).map(Number);
  const dp = new Array(2000001).fill(0);
  let ans = "";

  arr.forEach((v) => {
    dp[v + 1000000] = 1;
  });

  dp.forEach((v, idx) => {
    if (v) {
      ans += `${idx - 1000000}\n`;
    }
  });
  console.log(ans);
}

// 수 정렬하기  3
// 메모리 초과(맞춘 사람 2명)
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const arr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  console.log(arr.join("\n"));
}

// 좌표 압축
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const arr = input[1].split(" ");
  const nums = Array.from(new Set(arr))
    .map(Number)
    .sort((a, b) => a - b);

  const dp = [];
  nums.forEach((v, idx) => {
    if (dp[v] === undefined) {
      dp[v] = idx;
    }
  });

  console.log(arr.map((v) => dp[v]).join(" "));
}
