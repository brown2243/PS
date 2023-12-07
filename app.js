// N-Queen
function solution(n) {
  let ans = 0;

  const nQueens = (cnt, col) => {
    const n = col.length - 1;
    if (isPromising(cnt, col)) {
      if (cnt === n) {
        ans++;
        return;
      }
      for (let next = 1; next <= n; next++) {
        col[cnt + 1] = next;
        nQueens(cnt + 1, col);
        col[cnt + 1] -= next;
      }
    }
  };

  const isPromising = (now, col) => {
    let next = 1;
    let flag = true;
    while (flag && next < now) {
      // 1.같은 행에 배치
      // 2.행 번호 차이가 다른 퀸의 열 번호의 절대값 차이와 같다면 대각선상에 위치
      if (
        col[now] === col[next] ||
        now - next === Math.abs(col[now] - col[next])
      ) {
        flag = false;
      }
      next++;
    }
    return flag;
  };

  const col = new Array(n + 1).fill(0);
  nQueens(0, col);
  return ans;
}
