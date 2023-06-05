// 15353
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [n, str] = input.split("\n");
  n = Number(n);

  const stack = [-1];
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(i);
    else {
      stack.pop();
      if (stack.length !== 0) {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  console.log(ans);
}
