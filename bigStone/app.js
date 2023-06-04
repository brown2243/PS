// 14391
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [info, ...arr] = input.split("\n");
  const [N, M] = info.split(" ").map(Number);
  const matrix = arr.map((v) => v.split("").map(Number));

  let ret = 0;

  for (let s = 0; s < 1 << (N * M); s++) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      let cur = 0;
      for (let j = 0; j < M; j++) {
        let k = i * M + j;
        if ((s & (1 << k)) == 0) {
          cur = cur * 10 + matrix[i][j];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
    for (let j = 0; j < M; j++) {
      let cur = 0;
      for (let i = 0; i < N; i++) {
        let k = i * M + j;
        if ((s & (1 << k)) != 0) {
          cur = cur * 10 + matrix[i][j];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
    ret = Math.max(ret, sum);
  }
  console.log(ret);
}
