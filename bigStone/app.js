// 12851
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [N, K] = input.split(" ").map(Number);
  if (N === K) {
    console.log(`0\n${K}`);
    return;
  }

  const max = 100001;

  const prev = new Array(max).fill(0);
  const visited = new Array(max).fill(0);
  const q = [N];

  visited[N] = 1;

  while (q.length > 0) {
    const now = q.shift();
    for (let i = 1; i < 4; i++) {
      let next = now;
      if (i === 1) next += 1;
      if (i === 2) next -= 1;
      if (i === 3) next *= 2;

      if (0 <= next && next < max && !visited[next]) {
        visited[next] = visited[now] + 1;
        prev[next] = now;
        if (next === K) {
          const path = [];
          for (let i = K; i !== N; i = prev[i]) {
            path.push(i);
          }
          path.push(N);
          console.log(`${visited[now]}\n${path.reverse().join(" ")}`);
          return;
        }
        q.push(next);
      }
    }
  }
}
