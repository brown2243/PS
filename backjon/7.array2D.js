// 행렬 덧셈
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [info, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
  const [N, M] = info.split(" ").map(Number);

  const ans = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < arr.length; i++) {
    const row = arr[i].split(" ").map(Number);

    for (let j = 0; j < M; j++) {
      ans[i % N][j] += row[j];
    }
  }
  console.log(ans.map((row) => row.join(" ")).join("\n"));
}

// 최댓값
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const matrix = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let max = matrix[0][0];
  let point = [0, 0];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (max < matrix[i][j]) {
        max = matrix[i][j];
        point = [i, j];
      }
    }
  }
  console.log(`${max}\n${point.map((v) => v + 1).join(" ")}`);
}

// 세로읽기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const matrix = fs.readFileSync(filePath).toString().trim().split("\n");

  let flag = true;
  let ans = "";
  let j = 0;

  while (flag) {
    flag = false;
    for (let i = 0; i < matrix.length; i++) {
      const char = matrix[i].substring(j, j + 1);
      if (char) {
        flag = true;
        ans += char;
      }
    }
    j++;
  }
  console.log(ans);
}

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
