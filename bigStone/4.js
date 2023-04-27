// 이론

{
  let n = 4;
  const a = ["사과", "딸기", "포도", "배"];
  for (let i = 0; i < 1 << n; i++) {
    console.log("-------------");
    console.log("-------------");
    console.log("i:", i, i.toString(2).padStart(4, "0"));
    console.log("-------------");
    let ret = "";
    for (let j = 0; j < n; j++) {
      console.log("j:", j, j.toString(2).padStart(4, "0"));
      if (i & (1 << j)) {
        ret += a[j] + " ";
      }
    }
    console.log(ret);
  }
}
{
  let n = 4;
  const a = ["사과", "딸기", "포도", "배"];
  const go = (num) => {
    let ret = "";
    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        ret += a[i] + " ";
      }
    }
    console.log(ret);
  };

  for (let i = 1; i < n; i++) {
    go(1 | (1 << i));
  }
}
// 문제
// 19942
// 메모리 초과
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [[N], mins, ...arr] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  // p, f, s, v

  const permutations = [];
  const permutation = (arr = []) => {
    if (arr.length > 0) {
      permutations.push([...arr]);
    }

    for (let i = 1; i <= N; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        permutation(arr);
        arr.pop();
      }
    }
  };
  permutation();
  const ans = permutations
    .map((permutationValues, idx) =>
      permutationValues.reduce(
        (acc, cur) => {
          const now = arr[cur - 1];
          acc[0] += now[0];
          acc[1] += now[1];
          acc[2] += now[2];
          acc[3] += now[3];
          acc[4] += now[4];
          return acc;
        },
        [0, 0, 0, 0, 0, idx]
      )
    )
    .filter(
      (v) =>
        mins[0] <= v[0] && mins[1] <= v[1] && mins[2] <= v[2] && mins[3] <= v[3]
    )
    .sort((a, b) => a[4] - b[4]);

  console.log(
    ans.length === 0 ? -1 : `${ans[0][4]}\n${permutations[ans[0][5]].join(" ")}`
  );
}
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
