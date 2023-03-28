// 2309
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  const N = inputs.length;
  const ans = [];
  const combination = (arr = []) => {
    if (arr.length === 7) {
      if (arr.reduce((acc, cur) => acc + cur, 0) === 100) {
        ans.push([...arr]);
      }
      return;
    }

    for (let i = arr.length; i < N; i++) {
      if (!arr.includes(inputs[i])) {
        arr.push(inputs[i]);
        combination(arr);
        arr.pop();
      }
    }
  };
  combination();
  ans[0].forEach((element) => console.log(element));
}

// 2309
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  const N = inputs.length;
  const total = inputs.reduce((acc, cur) => acc + cur, 0);

  outer: for (let i = 0; i < N; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      if (total - inputs[i] - inputs[j] === 100) {
        inputs
          .filter((v) => v !== inputs[i] && v !== inputs[j])
          .forEach((v) => console.log(v));
        break outer;
      }
    }
  }
}

// 10808
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

  const arr = new Array(26).fill(0);

  inputs.split("").forEach((char) => {
    arr[char.charCodeAt() - 97] += 1;
  });
  console.log(arr.join(" "));
}
