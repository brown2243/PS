// 문자와 문자열
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const [str, n] = fs.readFileSync(filePath).toString().trim().split("\n");

  console.log(str[Number(n) - 1]);
}

// 단어 길이 재기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  console.log(input.length);
}

// 문자열
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

  let ans = "";
  arr.forEach((str) => {
    ans += `${str[0]}${str[str.length - 1]}\n`;
  });

  console.log(ans);
}

// 그대로 출력하기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  console.log(input);
}

// 단어의 개수
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  console.log(input.length === 0 ? 0 : input.split(" ").length);
}
