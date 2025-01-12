// 직사각형
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [a, b] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  console.log(a * b);
}

// 수학은 체육과목 입니다
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();
  const n = Number(input);
  console.log(n * 4);
}

// 대지
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

  if (arr.length === 1) {
    console.log(0);
  } else {
    arr = arr.map((v) => v.split(" ").map(Number));
    let xMax = arr[0][0];
    let xMin = arr[0][0];
    let yMax = arr[0][1];
    let yMin = arr[0][1];

    arr.forEach((row) => {
      const [x, y] = row;
      xMax = Math.max(xMax, x);
      xMin = Math.min(xMin, x);
      yMax = Math.max(yMax, y);
      yMin = Math.min(yMin, y);
    });

    console.log(Math.abs(xMax - xMin) * Math.abs(yMax - yMin));
  }
}

// 삼각형 외우기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [a, b, c] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  if (a + b + c !== 180) {
    console.log("Error");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}

// 삼각형과 세 변
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

  arr.pop();

  arr.forEach((tri) => {
    const [a, b, c] = tri;
    const max = Math.max(a, b, c);

    if (max >= a + b + c - max) {
      console.log("Invalid");
    } else if (a === b && b === c) {
      console.log("Equilateral");
    } else if (a === b || b === c || a === c) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  });
}

// 세 막대
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const [a, b, c] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const max = Math.max(a, b, c);

  if (max >= a + b + c - max) {
    console.log((a + b + c - max) * 2 - 1);
  } else {
    console.log(a + b + c);
  }
}
