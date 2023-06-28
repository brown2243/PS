// 1644
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();
  const N = Number(input);

  const isPrime = new Array(N + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }
  const primes = isPrime.map((v, i) => (v ? i : 0)).filter(Boolean);
  if (primes.length === 1) {
    console.log(1);
    return;
  }

  let cnt = 0;
  let start = 0;
  let end = 1;
  let sum = primes[start] + primes[end];
  while (start <= end) {
    if (sum === N) {
      cnt++;
      sum -= primes[start++];
    } else if (sum < N) {
      sum += primes[++end];
    } else {
      sum -= primes[start++];
    }
  }
  console.log(cnt);
}
