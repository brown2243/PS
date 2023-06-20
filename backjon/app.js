// 알고리즘 수업 - 점근적 표기 1
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [a1, a0] = input[0].split(" ").map(Number);
  const c = Number(input[1]);
  const n = Number(input[2]);

  let flag = true;
  for (let i = n; i < 101; i++) {
    const f = a1 * i + a0;
    const g = c * i;

    if (f > g) {
      flag = false;
      break;
    }
  }

  if (flag) {
    console.log(1);
  } else {
    console.log(0);
  }
}
