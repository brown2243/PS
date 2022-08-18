// 반복문

// 구구단
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split("\n");
  // .split(" ");
  const N = Number(inputs);
  for (let i = 1; i < 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
}

// A + B - 3
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");

  inputs.shift();
  inputs.forEach((v) => {
    console.log(
      v
        .split(" ")
        .map(Number)
        .reduce((acc, cur) => acc + cur)
    );
  });
}

// 합
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split("\n");
  // .split(" ");
  const N = Number(inputs);
  console.log(
    new Array(N + 1)
      .fill(0)
      .map((_, i) => i)
      .reduce((acc, cur) => acc + cur)
  );
}

// 영수증
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");

  const A = Number(inputs[0]);
  const B = inputs.slice(2).reduce(
    (acc, cur) =>
      acc +
      cur
        .split(" ")
        .map(Number)
        .reduce((acc, cur) => acc * cur),
    0
  );
  console.log(A === B ? "Yes" : "No");
}

// 빠른 A + B
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");

  const N = inputs.length;
  let ans = "";
  for (let i = 1; i < N; i++) {
    const [a, b] = inputs[i].split(" ");
    const sum = parseInt(a) + parseInt(b);
    ans += `${sum} \n`;
  }
  console.log(ans);
}

// A+B - 7
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");

  const N = inputs.length;
  let ans = "";
  for (let i = 1; i < N; i++) {
    const [a, b] = inputs[i].split(" ");
    const sum = parseInt(a) + parseInt(b);
    ans += `Case #${i}: ${sum} \n`;
  }
  console.log(ans);
}

// A+B - 8
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");

  const N = inputs.length;
  let ans = "";
  for (let i = 1; i < N; i++) {
    const [a, b] = inputs[i].split(" ");
    const sum = parseInt(a) + parseInt(b);
    ans += `Case #${i}: ${a} + ${b} = ${sum} \n`;
  }
  console.log(ans);
}

// 별 찍기 - 1
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split("\n");
  // .split(" ");

  const N = Number(inputs);
  for (let i = 1; i < N + 1; i++) {
    console.log("*".repeat(i));
  }
}

// 별 찍기 - 2
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split("\n");
  // .split(" ");

  const N = Number(inputs);
  for (let i = 1; i < N + 1; i++) {
    console.log(`${" ".repeat(N - i)}${"*".repeat(i)}`);
  }
}

// X보다 작은 수
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");
  const x = Number(inputs[0].split(" ").pop());
  console.log(
    inputs[1]
      .split(" ")
      .map(Number)
      .filter((v) => v < x)
      .join(" ")
  );
}

// A+B - 5
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");
  inputs.slice(0, inputs.length - 1).forEach((v) =>
    console.log(
      v
        .split(" ")
        .map(Number)
        .reduce((acc, cur) => acc + cur)
    )
  );
}

// A+B - 4
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  // .split(" ");
  inputs.forEach((v) =>
    console.log(
      v
        .split(" ")
        .map(Number)
        .reduce((acc, cur) => acc + cur)
    )
  );
}

// 더하기 사이클
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("backjon/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
  // .split("\n");
  // .split(" ");

  const N = Number(inputs);
  let num = N;

  function change(N, num, cnt = 1) {
    const a = num % 10;
    const b = num
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur);

    const c = Number(`${a}${b % 10}`);

    if (N === c) {
      console.log(cnt);
    } else {
      change(N, c, (cnt += 1));
    }
  }
  change(N, num);
}
