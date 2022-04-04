// 입출력
// 고양이
console.log("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|");

// 개
console.log('|\\_/|\n|q p|   /}\n( 0 )"""\\\n|"^"`    |\n||_/=\\\\__|\n');

// A + B
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./text.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  // .split("\n");

  console.log(inputs.map((v) => Number(v)).reduce((acc, cur) => acc + cur));
}

// 사칙연산
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./text.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  // .split("\n");

  const [A, B] = inputs.map((v) => Number(v));
  console.log(parseInt(A + B));
  console.log(parseInt(A - B));
  console.log(parseInt(A * B));
  console.log(parseInt(A / B));
  console.log(parseInt(A % B));
}
// ??!
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./text.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split(" ");
  // .split("\n");

  console.log(inputs.concat("??!"));
}
// 1998년생인 내가 태국에서는 2541년생?!
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./text.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split(" ");
  // .split("\n");

  console.log(parseInt(inputs) - 543);
}
