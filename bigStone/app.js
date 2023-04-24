// 9934
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [N, arr] = input.split("\n");
  N = Number(N);
  if (N === 1) {
    console.log(1);
  }
  arr = arr.split(" ");
  const ans = Array.from({ length: N }, () => []);

  const recur = (start, end, depth) => {
    if (depth === N) {
      return;
    }
    const mid = Math.floor((start + end) / 2);
    ans[depth].push(arr[mid]);
    recur(start, mid - 1, depth + 1);
    recur(mid + 1, end, depth + 1);
  };

  recur(0, arr.length - 1, 0);
  console.log(ans.map((v) => v.join(" ")).join("\n"));
}
