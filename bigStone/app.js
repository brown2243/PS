// 2852
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...arr] = input.split("\n");

  let point1 = 0,
    point2 = 0;

  const playTime = 48 * 60;

  let aSum = 0,
    bSum = 0;
  let lastTime = 0;

  for (let i = 0; i < N; i += 1) {
    const [team, time] = arr[i].split(" ");
    const [m, s] = time.split(":").map(Number);
    const second = m * 60 + s;

    if (point1 > point2) {
      aSum += second - lastTime;
    }

    if (point2 > point1) {
      bSum += second - lastTime;
    }

    team === "1" ? (point1 += 1) : (point2 += 1);
    lastTime = second;
  }

  if (point1 > point2) {
    aSum += playTime - lastTime;
  }

  if (point2 > point1) {
    bSum += playTime - lastTime;
  }

  console.log(
    [aSum, bSum]
      .map((v) => {
        const mins = Math.floor(v / 60)
          .toString()
          .padStart(2, "0");
        const ss = (v % 60).toString().padStart(2, "0");
        return `${mins}:${ss}`;
      })
      .join("\n")
  );
}
