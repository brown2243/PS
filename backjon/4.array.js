// 개수 세기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  console.log(input[1].split(" ").filter((v) => v === input[2]).length);
}

// 최소, 최대
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const arr = input[1].split(" ").map(Number);
  console.log(Math.min(...arr), Math.max(...ar));
}

// 공 넣기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const [info, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

  const [n, m] = info.split(" ").map(Number);
  const ans = new Array(n).fill(0);

  for (let y = 0; y < m; y++) {
    const [i, j, k] = arr[y].split(" ").map(Number);
    for (let x = i - 1; x < j; x++) {
      ans[x] = k;
    }
  }
  console.log(ans.join(" "));
}

// 공 바꾸기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const [info, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

  const [n, m] = info.split(" ").map(Number);
  const ans = new Array(n).fill(0).map((_, idx) => idx + 1);

  for (let i = 0; i < m; i++) {
    const [x, y] = arr[i].split(" ").map((v) => Number(v) - 1);
    [ans[x], ans[y]] = [ans[y], ans[x]];
  }
  console.log(ans.join(" "));
}

// 과제 안 내신 분..?
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  console.log(
    new Array(30)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((v) => !input.includes(v))
      .sort((a, b) => a - b)
      .join("\n")
  );
}

// 바구니 뒤집기
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";
  const [info, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

  const [n, m] = info.split(" ").map(Number);
  const ans = new Array(n).fill(0).map((_, idx) => idx + 1);

  for (let i = 0; i < m; i++) {
    const [x, y] = arr[i].split(" ").map((v) => Number(v) - 1);
    const tmp = ans.slice(x, y + 1).reverse();
    ans.splice(x, tmp.length, ...tmp);
  }
  console.log(ans.join(" "));
}
