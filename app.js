function solution(X, Y) {
  const x = X.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  const y = Y.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  let ans = "";
  for (let i = 9; i > -1; i--) {
    const nowX = x[i];
    const nowY = y[i];
    const min = Math.min(nowX, nowY);

    if (!Number.isNaN(min)) {
      ans += i.toString().repeat(min);
    }
  }

  if (ans === "") return "-1";
  if (Number(ans) === 0) return "0";
  return ans;
}
