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
  } else if (a === b) {
    console.log(1000 + a * 100);
  } else if (b === c) {
    console.log(1000 + b * 100);
  } else if (a === c) {
    console.log(1000 + a * 100);
  } else {
    console.log(Math.max(a, b, c) * 100);
  }
}

function findOdd(A) {
  return Object.entries(
    A.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {})
  ).find((v) => v[1] % 2 === 1)[0];
}
