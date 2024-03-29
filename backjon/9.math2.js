// 약수 구하기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [n, k] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const divisor = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisor.push(i);
      const quotient = Math.floor(n / i);
      if (i !== quotient) {
        divisor.push(quotient);
      }
    }
  }

  divisor.sort((a, b) => a - b);
  console.log(divisor[k - 1] || 0);
}

// 약수들의 합
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const arr = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  let ans = "";
  for (let i = 0; i < arr.length - 1; i++) {
    const n = arr[i];
    const divisor = [1];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisor.push(i);
        const quotient = Math.floor(n / i);
        if (i !== quotient) {
          divisor.push(quotient);
        }
      }
    }
    divisor.sort((a, b) => a - b);
    const sum = divisor.reduce((acc, cur) => acc + cur);
    if (n === sum) {
      ans += `${n} = ${divisor.join(" + ")}`;
    } else {
      ans += `${n} is NOT perfect.`;
    }
    ans += "\n";
  }
  console.log(ans);
}

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

  const decimals = new Array(n + 1).fill(true);
  decimals[0] = false;
  decimals[1] = false;

  for (let i = 2; i <= n; i++) {
    if (decimals[i]) {
      let isDecimal = true;

      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isDecimal = false;
          break;
        }
      }

      if (isDecimal) {
        for (let j = i * i; j <= n; j += i) {
          decimals[j] = false;
        }
      }
    }
  }
  const ans = decimals.map((v, i) => (v ? i : 0)).slice(m);
  const sum = ans.reduce((acc, cur) => acc + cur, 0);
  const min = ans.find((v) => v);
  console.log(!sum ? -1 : `${sum}\n${min}`);
}

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
