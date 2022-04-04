const fs = require("fs");
const inputs = fs
  // .readFileSync("./text.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();
// .split(" ");
// .split("\n");

console.log(parseInt(inputs) - 543);
