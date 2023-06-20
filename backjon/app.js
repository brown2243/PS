// 알고리즘 수업 - 알고리즘의 수행 시간 6
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  const n = BigInt(input) - BigInt(2);

  console.log(
    ((n * n * n + BigInt(3) * n * n + BigInt(2) * n) / BigInt(6)).toString()
  );
  console.log(3);
}
