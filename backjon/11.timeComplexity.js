// 알고리즘 수업 - 알고리즘의 수행 시간 1
{
  console.log(1);
  console.log(0);
}

// 알고리즘 수업 - 알고리즘의 수행 시간 2
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  console.log(input);
  console.log(1);
}

// 알고리즘 수업 - 알고리즘의 수행 시간 3
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  console.log(Number(input) ** 2);
  console.log(2);
}
// 알고리즘 수업 - 알고리즘의 수행 시간 4
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();

  console.log(
    new Array(Number(input) - 1)
      .fill(0)
      .map((_, idx) => idx + 1)
      .reduce((acc, cur) => acc + cur, 0)
  );
  console.log(2);
}

// 알고리즘 수업 - 알고리즘의 수행 시간 5
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  const n = BigInt(input);
  console.log((n * n * n).toString());
  console.log(3);
}

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
