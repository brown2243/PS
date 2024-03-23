// 2504
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const str = fs.readFileSync(filePath).toString().trim();
  const stack = [];
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (bracket === "(" || bracket === "[") {
      stack.push(bracket);
      continue;
    }
    if (stack.length === 0) {
      ans = 0;
      break;
    }
    const lastBracket = stack.pop();
    let value = 0;

    if (lastBracket === "(" && bracket === ")") {
      value = 2;
    } else if (lastBracket === "[" && bracket === "]") {
      value = 3;
    }
    //
    else {
      ans = 0;
      break;
    }

    while (stack.length > 0 && i < str.length - 1) {
      const lastBracket = stack[stack.length - 1];
      const nextBracket = str[i + 1];
      const num = Number(lastBracket);
      if (!Number.isNaN(num)) {
        value += num;
        stack.pop();
      } else if (lastBracket === "(" && nextBracket === ")") {
        value *= 2;
        i += 1;
        stack.pop();
      } else if (lastBracket === "[" && nextBracket === "]") {
        value *= 3;
        i += 1;
        stack.pop();
      } else {
        break;
      }
    }
    stack.length === 0 ? (ans += value) : stack.push(value.toString());
  }
  console.log(ans);
}
