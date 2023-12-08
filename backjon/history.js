// 서로 다른 부분 문자열의 개수
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  console.log(input.reduce((acc, cur) => acc + cur ** 2, 0) % 10);
}

// 1, 2, 3 더하기 4
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

  const dp = new Array(10001).fill(1);
  for (let i = 2; i < dp.length; i++) {
    dp[i] += dp[i - 2];
  }
  for (let i = 3; i < dp.length; i++) {
    dp[i] += dp[i - 3];
  }
  console.log(
    input
      .slice(1)
      .map((v) => dp[v])
      .reduce((acc, cur) => acc + `${cur}\n`, "")
  );
}

// 자두나무
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "backjon/input.txt";

  let input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [T, W] = input[0].split(" ").map(Number);
  input = input.map(Number);

  const dp = Array.from({ length: T + 1 }, () => new Array(W + 1).fill(0));
  for (let i = 1; i <= T; i++) {
    //자두가 1번 나무에 떨어짐
    if (input[i] === 1) {
      dp[i][0] += 1;
    }
    //자두가 2번 나무에 떨어짐
    dp[i][0] += dp[i - 1][0];

    //
    for (let j = 1; j <= W; j++) {
      //자두가 1번 나무에서 떨어지고, 이동횟수 짝수인 경우
      if (input[i] === 1 && j % 2 === 0) {
        //이전 위치에서 움직임 vs 가만히 있음
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1);
      }
      //자두가 2번 나무에서 떨어지고, 이동횟수가 홀수인 경우
      else if (input[i] === 2 && j % 2 !== 0) {
        //이전 위치에서 움직임 vs 가만히 있음
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1);
      }
      //자두의 위치와 사람의 위치가 다름(자두를 먹을 수 없음)
      else {
        //움직여서 못먹음 vs 움직이지 않아서 못먹음
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(Math.max(...dp[T]));
}
