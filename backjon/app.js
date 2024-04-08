// 13241
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const arr = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

  console.log(
    arr
      .map(([a, b]) => {
        const gcd = getGCD(a, b);
        return gcd * (a / gcd) * (b / gcd);
      })
      .join("\n")
  );
}
