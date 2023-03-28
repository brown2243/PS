// 2309
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

  const arr = new Array(26).fill(0);

  inputs.split("").forEach((char) => {
    arr[char.charCodeAt() - 97] += 1;
  });
  console.log(arr.join(" "));
}
