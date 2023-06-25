// 블랙잭
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  const box = [];

  const combination = (start = 0, tmp = []) => {
    if (tmp.length === 3) {
      box.push(tmp.reduce((acc, cur) => acc + cur, 0));
      return;
    }

    for (let i = start; i < arr.length; i += 1) {
      tmp.push(arr[i]);
      combination(i + 1, tmp);
      tmp.pop();
    }
  };

  combination();
  box.sort((a, b) => b - a);
  console.log(box.find((v) => m >= v));
}

// 분해합
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();

  const n = Number(input);

  for (let i = 1; i < n; i++) {
    if (
      n ===
      i +
        i
          .toString()
          .split("")
          .map(Number)
          .reduce((acc, cur) => acc + cur, 0)
    ) {
      console.log(i);
      return;
    }
  }
  console.log(0);
}

// 수학은 비대면강의입니다
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();

  let [a, b, c, d, e, f] = input.split(" ").map(Number);

  const x = (c * e - b * f) / (a * e - b * d);
  const y = (c * d - a * f) / (b * d - a * e);

  console.log(`${x} ${y}`);
}

// 체스판 다시 칠하기 성
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  let [n, m] = input[0].split(" ").map(Number);
  const matrix = input.slice(1).map((v) => v.split(""));

  let ans = 64;

  for (let y = 0; y <= n - 8; y++) {
    for (let x = 0; x <= m - 8; x++) {
      let white = 0;
      let black = 0;
      for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
          if (i % 2 === 0) {
            if (j % 2 === 0) {
              if (matrix[i][j] === "B") {
                white++;
              } else {
                black++;
              }
            } else {
              if (matrix[i][j] === "W") {
                white++;
              } else {
                black++;
              }
            }
          } else {
            if (j % 2 !== 0) {
              if (matrix[i][j] === "B") {
                white++;
              } else {
                black++;
              }
            } else {
              if (matrix[i][j] === "W") {
                white++;
              } else {
                black++;
              }
            }
          }
        }
      }
      ans = Math.min(ans, white, black);
    }
  }
  console.log(ans);
}
// 영화감독 숌
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  const n = Number(input);

  let i = 666;
  let cnt = 1;
  while (cnt < n) {
    i += 1;
    if (i.toString().includes(check)) {
      cnt += 1;
    }
  }
  console.log(i);
}

// 설탕 배달
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  const n = Number(input);

  let left = n % 5;
  let div = Math.floor(n / 5);

  if (left === 0) {
    console.log(div);
  } else {
    while (div > -1) {
      if (left % 3 === 0) {
        console.log(div + left / 3);
        return;
      }
      div--;
      left += 5;
    }
    console.log(div);
  }
}
