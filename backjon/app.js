// 14940
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [[N, M], ...matrix] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const distance = Array.from({ length: N }, () => new Array(M).fill(0));
  const start = [0, 0];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 2) {
        start[0] = i;
        start[1] = j;
        break;
      }
    }
  }

  const q = [start];
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  while (q.length > 0) {
    const [y, x] = q.shift();
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (0 <= ny && ny < N && 0 <= nx && nx < M) {
        if (matrix[ny][nx] === 1 && distance[ny][nx] === 0) {
          distance[ny][nx] = distance[y][x] + 1;
          q.push([ny, nx]);
        }
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (distance[i][j] === 0 && matrix[i][j] === 1) {
        distance[i][j] = -1;
      }
    }
  }

  distance[start[0]][start[1]] = 0;
  console.log(distance.map((v) => v.join(" ")).join("\n"));
}
