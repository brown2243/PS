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

// 2979
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map(Number));

  const costs = inputs[0];
  const parks = inputs.slice(1);

  const startTimes = parks.map((v) => v[0]);
  const endTimes = parks.map((v) => v[1]);

  const start = Math.min(...startTimes);
  const end = Math.max(...endTimes);

  let cost = 0;
  for (let i = start; i <= end; i += 1) {
    let cnt = 0;
    startTimes.forEach((startTime) => {
      if (startTime <= i) {
        cnt += 1;
      }
    });
    endTimes.forEach((endTime) => {
      if (endTime <= i) {
        cnt -= 1;
      }
    });
    if (cnt === 0) {
      continue;
    }
    cost += costs[cnt - 1] * cnt;
  }
  console.log(cost);
}

// 10988
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

  const half = Math.floor(inputs.length / 2);
  const str =
    inputs.length % 2 === 0
      ? inputs
      : inputs.substring(0, half) + inputs.substring(half + 1);

  if (
    str.substring(0, half) === str.substring(half).split("").reverse().join("")
  ) {
    console.log(1);
  } else {
    console.log(0);
  }
}

// 1159
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const obj = {};
  inputs.slice(1).forEach((str) => {
    obj[str[0]] = obj[str[0]] + 1 || 1;
  });

  console.log(
    Object.entries(obj)
      .filter(([, cnt]) => cnt > 4)
      .map(([char]) => char)
      .sort()
      .join("") || "PREDAJA"
  );
}

// 11655
{
  const fs = require("fs");
  const inputs = fs
    .readFileSync("./bigStone/input.txt")
    // .readFileSync("/dev/stdin")
    .toString()
    .trim();

  const cnt = 26;
  const UPPER = new Array(cnt)
    .fill(0)
    .map((_, idx) => String.fromCharCode(idx + 65));

  const LOWER = new Array(cnt)
    .fill(0)
    .map((_, idx) => String.fromCharCode(idx + 97));

  console.log(
    inputs
      .split("")
      .map((char) => {
        if (UPPER.includes(char)) {
          const idx = UPPER.indexOf(char) + 13;
          return UPPER[idx >= cnt ? idx - cnt : idx];
        }
        if (LOWER.includes(char)) {
          const idx = LOWER.indexOf(char) + 13;
          return LOWER[idx >= cnt ? idx - cnt : idx];
        }
        return char;
      })
      .join("")
  );
}

// 11655
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString();

  const cnt = 26;
  const UPPER = new Array(cnt)
    .fill(0)
    .map((_, idx) => String.fromCharCode(idx + 65));

  const LOWER = new Array(cnt)
    .fill(0)
    .map((_, idx) => String.fromCharCode(idx + 97));

  const ans = inputs
    .split("")
    .map((char) => {
      if (UPPER.includes(char)) {
        const idx = UPPER.indexOf(char) + 13;
        return UPPER[idx >= cnt ? idx - cnt : idx];
      }
      if (LOWER.includes(char)) {
        const idx = LOWER.indexOf(char) + 13;
        return LOWER[idx >= cnt ? idx - cnt : idx];
      }
      return char;
    })
    .join("");

  console.log(ans);
}

// 9996
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const [front, back] = inputs[1].split("*");

  const N = front.length + back.length;
  inputs.slice(2).forEach((str) => {
    if (str.length >= N && str.startsWith(front) && str.endsWith(back)) {
      console.log("DA");
    } else {
      console.log("NE");
    }
  });
}

// 2559
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const [[N, step], data] = inputs.map((str) => str.split(" ").map(Number));

  let max = Number.MIN_SAFE_INTEGER;
  const psums = [0];
  for (let i = 0; i < N; i += 1) {
    psums[i + 1] = data[i] + psums[i];
  }
  for (let i = step; i <= N; i += 1) {
    max = Math.max(max, psums[i] - psums[i - step]);
  }
  console.log(max);
}
// 2559
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const [[N, K], arr] = inputs.map((str) => str.split(" ").map(Number));
  let max = arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);
  let sum = max;
  for (let i = K; i < N; i++) {
    sum += arr[i] - arr[i - K];
    max = Math.max(max, sum);
  }
  console.log(max);
}
