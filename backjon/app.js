// 색종이
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [n, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const matrix = Array.from({ length: 100 }, () => new Array(100).fill(0));

  arr.forEach(([x, y]) => {
    for (let i = y; i < y + 10; i++) {
      for (let j = x; j < x + 10; j++) {
        matrix[i][j] = 1;
      }
    }
  });

  console.log(
    matrix.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + cur, 0), 0)
  );
}
