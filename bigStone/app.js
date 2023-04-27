// 19942
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N], mins, ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  // p, f, s, v
  const [mp, mf, ms, mv] = mins;
  let ans = Number.MAX_SAFE_INTEGER;
  let ansArr = [];

  for (let i = 1; i < 1 << N; i++) {
    let b = 0,
      c = 0,
      d = 0,
      e = 0,
      sum = 0;

    const tmp = [];

    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        tmp.push(j + 1);
        b += arr[j][0];
        c += arr[j][1];
        d += arr[j][2];
        e += arr[j][3];
        sum += arr[j][4];
      }
    }

    if (b >= mp && c >= mf && d >= ms && e >= mv) {
      if (ans >= sum) {
        ans = sum;
        if (!ansArr?.[ans]) {
          ansArr[ans] = [];
        }
        ansArr[ans].push(tmp);
      }
    }
  }

  if (ans === Number.MAX_SAFE_INTEGER) {
    console.log(-1);
  } else {
    ansArr[ans].sort();
    console.log(`${ans}\n${ansArr[ans][0].join(" ")}`);
  }
}
