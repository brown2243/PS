// 오븐 시계
{
  const fs = require("fs");
  const inputs = fs
    .readFileSync("backjon/input.txt")
    // .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");

  const leftTime = Number(inputs[1]);
  const [hours, mins] = inputs[0].split(" ").map(Number);

  const totalMins = hours * 60 + mins + leftTime;
  const h =
    Math.floor(totalMins / 60) > 24
      ? 24 - Math.floor(totalMins / 60)
      : Math.floor(totalMins / 60);
  const m = totalMins % 60;
  console.log(`${h} ${m}`);
}
