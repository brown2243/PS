// 서로 다른 부분 문자열의 개수
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  console.log(input.reduce((acc, cur) => acc + cur ** 2, 0) % 10);
}
