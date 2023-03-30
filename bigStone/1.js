// 2309
{
  const fs = require("fs");
  const inputs = fs
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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();

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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();

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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();

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
  const inputs = fs.readFileSync("/dev/stdin").toString();

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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [[N, K], arr] = inputs.map((str) => str.split(" ").map(Number));
  let max = arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);
  let sum = max;
  for (let i = K; i < N; i++) {
    sum += arr[i] - arr[i - K];
    max = Math.max(max, sum);
  }
  console.log(max);
}

// 1620
{
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [N, M] = inputs[0].split(" ").map(Number);

  const book = [""],
    bookObj = {};
  for (let i = 1; i <= N; i += 1) {
    book.push(inputs[i]);
    bookObj[inputs[i]] = i;
  }
  let ans = "";
  for (let i = N + 1; i < N + M + 1; i += 1) {
    const num = Number(inputs[i]);
    if (Number.isNaN(num)) {
      ans += `${bookObj[inputs[i]]}\n`;
    } else {
      ans += `${book[num]}\n`;
    }
  }
  console.log(ans);
}

// 9375
{
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let idx = 1;
  let ans = "";
  while (idx < inputs.length) {
    const clothesCnt = Number(inputs[idx]);

    const clothes = {};
    let j = 0;

    while (j < clothesCnt) {
      idx += 1;
      j += 1;
      const [, type] = inputs[idx].split(" ");
      clothes[type] = clothes[type] + 1 || 1;
    }
    ans +=
      Object.keys(clothes)
        .map((key) => clothes[key] + 1)
        .reduce((acc, cur) => acc * cur, 1) - 1;
    ans += "\n";
    idx += 1;
  }
  console.log(ans);
}

// 1213
{
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();

  const isEven = inputs.length % 2 === 0;
  const charObj = {};
  inputs.split("").forEach((char) => {
    charObj[char] = charObj[char] + 1 || 1;
  });
  let life = isEven ? 0 : 1;
  let mid = "";

  const entries = Object.entries(charObj).sort();
  entries.forEach(([key, value], idx) => {
    if (value % 2 === 1) {
      life -= 1;
      mid = key;
      entries[idx][1] -= 1;
      if (!entries[idx][1]) {
        entries.splice(idx, 1);
      }
    }
  });

  if (life < 0) {
    console.log(`I'm Sorry Hansoo`);
  } else {
    const arr = entries.map(([key, value]) => key.repeat(value / 2));
    console.log(`${arr.join("")}${mid}${arr.reverse().join("")}`);
  }
}

// 1940
{
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [_, M, ARR] = inputs;
  const m = Number(M);
  const arr = ARR.split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    cnt = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === m) {
      cnt += 1;
      right -= 1;
      left += 1;
    } else if (sum > m) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  console.log(cnt);
}

// 3986
{
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let cnt = 0;
  inputs
    .slice(1)
    .map((input) => input.split(""))
    .forEach((row) => {
      const stack = [];
      row.forEach((char) => {
        if (stack[stack.length - 1] && stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      });
      if (stack.length === 0) {
        cnt += 1;
      }
    });

  console.log(cnt);
}

// 1629
{
  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim();

  const [A, B, C] = inputs.split(" ").map(Number);

  const soloved = (a, b, c) => {
    if (b === 1) {
      return a % c;
    }
    const recursive = soloved(a, Math.floor(b / 2), c);
    if (b % 2 === 0) {
      return (recursive * recursive) % c;
    }
    return (recursive * recursive * a) % c;
  };
  console.log(soloved(A, B, C));
}
{
  const fs = require("fs");
  const inputs = fs
    // .readFileSync("./bigStone/input.txt")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

  const [A, B, C] = inputs.split(" ").map(BigInt);

  const soloved = (a, c) => {
    return function power(b) {
      if (b === 1n) {
        return a % c;
      }
      const recursive = power(b / 2n);
      if (b % 2n === 0n) {
        return (recursive * recursive) % c;
      }
      return (recursive * recursive * a) % c;
    };
  };
  console.log(soloved(A, C)(B).toString());
}

// 4375
{
  const fs = require("fs");

  const inputs = fs
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "./bigStone/input.txt"
    )
    .toString()
    .trim()
    .split("\n");

  let ans = "";

  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];
    const bint = BigInt(input);

    if (bint === 1n) {
      ans += `1\n`;
      continue;
    }

    let target = BigInt("".padStart(input.length + 1, "1"));

    while (true) {
      if (target % bint === 0n) {
        ans += `${target.toString().length}\n`;
        break;
      }
      target = target * 10n + 1n;
    }
  }
  console.log(ans);
}
{
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((e) => +e);

  for (num of input) {
    let cnt = 1;
    let remainder = 1;

    while (remainder % num !== 0) {
      remainder = (remainder * 10 + 1) % num;
      cnt++;
    }

    console.log(cnt);
  }
}
