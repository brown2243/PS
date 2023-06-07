// 코딩은 체육과목 입니다
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  console.log(`${"long ".repeat(Number(input) / 4)}int`);
}
