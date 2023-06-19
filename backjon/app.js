// 소수
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [m, n] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const graph = new Array(n + 1).fill(true);
  graph[0] = false;
  graph[1] = false;
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (graph[i]) {
      primes.push(i);
      for (let j = i * i; j <= n; j += i) {
        graph[j] = false;
      }
    }
  }
  const idx = primes.findIndex((v) => m <= v);
  const sliced = primes.slice(idx === -1 ? primes.length : idx);
  const sum = sliced.reduce((acc, cur) => acc + cur, 0);
  console.log(sliced.length === 0 ? -1 : `${sum}\n${sliced[0]}`);
}
