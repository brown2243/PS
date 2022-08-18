// 더하기 사이클
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split("\n");
  // .split(" ");

  const N = Number(inputs);
  let num = N;

  function change(N, num, cnt = 1) {
    const a = num % 10;
    const b = num
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur);

    const c = Number(`${a}${b % 10}`);

    if (N === c) {
      console.log(cnt);
    } else {
      change(N, c, (cnt += 1));
    }
  }
  change(N, num);
}
