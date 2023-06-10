// 별 찍기 - 7
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();
  const N = Number(input);

  const star = "*";
  const gap = " ";
  let ans = "";

  for (let i = 0; i < N; i++) {
    ans += `${gap.repeat(N - i - 1)}${star.repeat(1 + i * 2)}\n`;
  }
  for (let i = N - 2; i >= 0; i--) {
    ans += `${gap.repeat(N - i - 1)}${star.repeat(1 + i * 2)}\n`;
  }

  console.log(ans);
}
