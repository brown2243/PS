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
