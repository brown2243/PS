// 터렛
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs.readFileSync(filePath).toString().trim().split("\n");
  const arr = input
    .slice(1)
    .map((v) => v.split(" ").map(Number))
    .map(([x1, y1, r1, x2, y2, r2]) => {
      const distance = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
      const rSum = r1 + r2;
      const rMinus = Math.abs(r1 - r2);

      if (distance === 0 && r1 === r2) {
        return -1;
      }
      if (rMinus < distance && distance < rSum) {
        return 2;
      }
      if (rMinus === distance || distance === rSum) {
        return 1;
      }
      return 0;
    });
  console.log(arr.join("\n"));
}
