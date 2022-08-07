function solution(n) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(true));
  console.log(matrix);
}
solution(4);


// const fs = require("fs");
// const inputs = fs
//   // .readFileSync("./text.txt")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim();
// // .split(" ");
// // .split("\n");

// console.log(parseInt(inputs) - 543);
