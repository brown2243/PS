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

// 단어 공부
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = Object.entries(
    input
      .toUpperCase()
      .split("")
      .reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
      }, {})
  ).sort((a, b) => b[1] - a[1]);

  console.log(
    arr.length === 1 ? arr[0][0] : arr[0][1] === arr[1][1] ? "?" : arr[0][0]
  );
}

// 평균은 넘겠지
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

  let ans = "";
  arr.forEach((row) => {
    const [n, ...a] = row.split(" ").map(Number);
    const total = a.reduce((acc, cur) => acc + cur, 0);
    const avg = total / n;
    const cnt = a.filter((v) => v > avg).length;
    ans += `${((cnt / n) * 100).toFixed(3)}%\n`;
  });

  console.log(ans);
}

// 너의 평점은
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const arr = fs.readFileSync(filePath).toString().trim().split("\n");

  const gradeObj = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };

  let total = 0;
  let earn = 0;

  for (let i = 0; i < arr.length; i++) {
    let [name, point, grade] = arr[i].split(" ");
    if (grade === "P") {
      continue;
    }
    point = Number(point);
    earn += point * gradeObj[grade];
    total += point;
  }

  console.log((earn / total).toFixed(6));
}
