// 1992
{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...graph] = input.split("\n").map((s) => s.split(""));
  let ans = "";
  const quadTree = (x, y, n) => {
    const init = graph[x][y];
    for (let i = x; i < x + n; i += 1) {
      for (let j = y; j < y + n; j += 1) {
        if (init !== graph[i][j]) {
          ans += "(";
          const half = n / 2;
          quadTree(x, y, half);
          quadTree(x, y + half, half);
          quadTree(x + half, y, half);
          quadTree(x + half, y + half, half);
          ans += ")";
          return;
        }
      }
    }
    ans += init;
  };
  quadTree(0, 0, Number(N.join("")));
  console.log(ans);
}
