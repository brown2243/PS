// 18110
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M, B], ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let answer = [Number.MAX_SAFE_INTEGER, 256];
  for (let layer = 0; layer <= 256; layer++) {
    let time = 0;
    let b = B;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        const point = arr[y][x];
        if (point === layer) continue;
        if (point > layer) {
          b += point - layer;
          time += (point - layer) * 2;
        } else {
          b -= layer - point;
          time += layer - point;
        }
      }
    }

    if (b >= 0) {
      if (answer[0] > time) {
        answer = [time, layer];
      } else if (answer[0] === time) {
        answer[1] = layer;
      }
    }
  }
  console.log(answer.join(" "));
}
