// 31403
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [A, B, C] = fs.readFileSync(filePath).toString().trim().split("\n");

  console.log(Number(A) + Number(B) - Number(C));
  console.log(A + B - C);
}
