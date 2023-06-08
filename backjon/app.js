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
