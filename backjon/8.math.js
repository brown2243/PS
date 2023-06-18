// 진법 변환
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [num, decimal] = fs.readFileSync(filePath).toString().trim().split(" ");
  decimal = Number(decimal);
  const n = num.length;

  console.log(
    num.split("").reduceRight((acc, cur, idx) => {
      const code = cur.charCodeAt();
      const num = code >= 65 ? code - 55 : Number(cur);

      return acc + num * decimal ** (n - idx - 1);
    }, 0)
  );
}

// 진법 변환 2
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [num, decimal] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const arr = [];

  while (Math.floor(num / decimal) > 0) {
    arr.push(num % decimal);
    num = Math.floor(num / decimal);
  }
  arr.push(num % decimal);

  console.log(
    arr
      .reverse()
      .map((v) => {
        return v < 10 ? v : String.fromCharCode(v + 55);
      })
      .join("")
  );
}

// 세탁소 사장 동혁
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [n, ...cases] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const arr = [25, 10, 5, 1];
  let ans = "";
  cases.forEach((coin) => {
    ans += `${arr
      .map((c) => {
        const cnt = Math.floor(coin / c);
        coin -= cnt * c;
        return cnt;
      })
      .join(" ")}\n`;
  });
  console.log(ans);
}

// 중앙 이동 알고리즘
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs.readFileSync(filePath).toString().trim();
  const n = Number(input);
  console.log((2 ** n + 1) ** 2);
}

// 달팽이는 올라가고 싶다
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [a, b, v] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const days = Math.ceil((v - b) / (a - b));
  console.log(days);
}

// 큰 수 A+B
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [a, b] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);

  console.log((a + b).toString());
}
