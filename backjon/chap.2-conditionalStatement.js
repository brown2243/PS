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
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  // .split("\n");

  let [hours, mins] = inputs.map(Number);

  if (mins >= 45) {
    console.log(hours, mins - 45);
  } else {
    mins = mins + 15;
    if (hours === 0) hours = 23;
    else hours = hours - 1;

    console.log(hours, mins);
  }
}
