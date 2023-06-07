// 조건문

// 두 수 비교하기
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  // .split("\n");
  const [A, B] = inputs.map(Number);
  if (A < B) console.log("<");
  else if (A > B) console.log(">");
  else console.log("==");
}

// 시험 성적
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  // .split("\n");

  const [input] = inputs.map(Number);
  if (90 <= input) console.log("A");
  else if (80 <= input) console.log("B");
  else if (70 <= input) console.log("C");
  else if (60 <= input) console.log("D");
  else console.log("F");
}

// 윤년
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  // .split("\n");

  const [input] = inputs.map(Number);

  if (input % 400 === 0) console.log(1);
  else if (input % 4 === 0 && input % 100 !== 0) console.log(1);
  else console.log(0);
}

// 사분면 고르기
// 런타임 에러 (EACCES) 현상
// 출처: https://hanch-dev.tistory.com/4#toc-1. node.js - 런타임 에러 (EACCES) 현상 [HanCh_Dev:티스토리]
{
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const inputs = [];

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    const [x, y] = inputs.map(Number);

    if (x > 0 && y > 0) console.log(1);
    else if (x < 0 && y > 0) console.log(2);
    else if (x < 0 && y < 0) console.log(3);
    else console.log(4);
    process.exit();
  });
}

// 알람 시계
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const [h, m] = input;
  let t = h * 60 + m - 45;
  if (t < 0) {
    t += 1440;
  }
  console.log(Math.floor(t / 60), t % 60);
}

// 오븐 시계
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const now = input[0].split(" ").map(Number);
  const cookingTime = Number(input[1]);

  const [h, m] = now;
  let t = h * 60 + m + cookingTime;
  if (t >= 1440) {
    t -= 1440;
  }
  console.log(Math.floor(t / 60), t % 60);
}

// 주사위 세개
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    // .split("\n")
    .split(" ")
    .map(Number);
  const [a, b, c] = inputs;
  if (a === b && b === c) {
    console.log(10000 + a * 1000);
    // } else if (a === b) {
    //   console.log(1000 + a * 100);
    // } else if (b === c) {
    //   console.log(1000 + b * 100);
    // } else if (a === c) {
    //   console.log(1000 + a * 100);
  } else if (a === b || b === c) {
    console.log(1000 + b * 100);
  } else {
    console.log(Math.max(a, b, c) * 100);
  }
}
