// 숫자 카드
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const has = input[1].split(" ").map(Number);
  const hasObj = has.reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});
  const all = input[3].split(" ").map(Number);
  console.log(all.map((v) => (hasObj[v] ? 1 : 0)).join(" "));
}

// 문자열 집합
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const has = {};
  let cnt = 0;
  for (let i = 1; i < n + 1; i++) {
    has[input[i]] = 1;
  }
  for (let i = n + 1; i < input.length; i++) {
    if (has[input[i]]) {
      cnt++;
    }
  }
  console.log(cnt);
}

// 회사에 있는 사람
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const inCompany = {};
  for (let i = 1; i < input.length; i++) {
    const [name, status] = input[i].split(" ");
    const v = status === "enter";
    inCompany[name] = v;
  }
  console.log(
    Object.entries(inCompany)
      .filter((v) => v[1])
      .map((v) => v[0])
      .sort()
      .reverse()
      .join("\n")
  );
}

// 숫자 카드 2
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const has = input[1].split(" ").map(Number);
  const hasObj = has.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  const all = input[3].split(" ").map(Number);
  console.log(all.map((v) => (hasObj[v] ? hasObj[v] : 0)).join(" "));
}

// 듣보잡
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  // const [n, m] = input[0].split(" ").map(Number);
  const obj = {};

  for (let i = 1; i < input.length; i++) {
    obj[input[i]] = obj[input[i]] + 1 || 1;
  }

  const arr = Object.entries(obj)
    .filter((v) => v[1] === 2)
    .map((v) => v[0])
    .sort();

  console.log(`${arr.length}\n${arr.join("\n")}`);
}

// 서로 다른 부분 문자열의 개수
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs.readFileSync(filePath).toString().trim();

  const set = new Set();
  let cnt = 1;

  while (cnt <= input.length) {
    for (let i = 0; i < input.length + 1 - cnt; i++) {
      set.add(input.substring(i, i + cnt));
    }
    cnt++;
  }
  console.log(set.size);
}
