// 이모티콘 할인행사
function solution(users, emoticons) {
  const salesRatio = [40, 30, 20, 10];
  const n = emoticons.length;
  const sales = new Array(n).fill(0);
  let answer = [0, 0];

  const dfs = (depth) => {
    if (depth === n) {
      let plusCnt = 0,
        totalProfit = 0;

      for (let i = 0; i < users.length; i++) {
        const [acceptableRatio, maximumBudget] = users[i];
        let paid = 0;
        let isBuyPlus = false;
        for (let j = 0; j < sales.length; j++) {
          if (acceptableRatio > sales[j]) continue;
          paid += emoticons[j] * ((100 - sales[j]) / 100);
          if (paid >= maximumBudget) {
            isBuyPlus = true;
            paid = 0;
            break;
          }
        }

        if (isBuyPlus) {
          plusCnt += 1;
        }
        totalProfit += paid;
      }
      if (plusCnt > answer[0]) {
        answer = [plusCnt, totalProfit];
      } else if (plusCnt === answer[0]) {
        answer[1] = Math.max(answer[1], totalProfit);
      }
      return;
    }
    for (let i = 0; i < 4; i++) {
      sales[depth] = salesRatio[i];
      dfs(depth + 1);
      sales[depth] = 0;
    }
  };
  dfs(0);
  return answer;
}
