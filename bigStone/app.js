// 2852
{
  const os = process.platform;
  const fs = require("fs");
  const input =
    os === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const arr = input
    .split("\n")
    .slice(1)
    .map((v) =>
      v.split(" ").map((v, i) => {
        if (i === 0) {
          return Number(v);
        }
        return v
          .split(":")
          .map((v, i) => Number(v) * (i === 0 ? 60 : 1))
          .reduce((acc, cur) => acc + cur, 0);
      })
    );

  let winningTime1 = 0;
  let winningTime2 = 0;
  let score1 = 0;
  let score2 = 0;
  let lastTime = 0;
  let endTime = 48 * 60;

  for (let i = 0; i < arr.length; i++) {
    const [team, time] = arr[i];
    if (score1 > score2) {
      winningTime1 += time - lastTime;
    }
    if (score2 > score1) {
      winningTime2 += time - lastTime;
    }
    if (team === 1) score1++;
    if (team === 2) score2++;
    lastTime = time;
  }

  if (score1 > score2) {
    winningTime1 += endTime - lastTime;
  }
  if (score2 > score1) {
    winningTime2 += endTime - lastTime;
  }

  console.log(
    `${Math.floor(winningTime1 / 60)}`.padStart(2, "0") +
      ":" +
      `${winningTime1 % 60}`.padStart(2, "0") +
      "\n" +
      `${Math.floor(winningTime2 / 60)}`.padStart(2, "0") +
      ":" +
      `${winningTime2 % 60}`.padStart(2, "0")
  );
}
