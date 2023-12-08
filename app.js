// 혼자서 하는 틱택토
function solution(board) {
  const n = 3;
  let oCnt = 0;
  let xCnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        oCnt += 1;
      }
      if (board[i][j] === "X") {
        xCnt += 1;
      }
    }
  }
  const gap = oCnt - xCnt;
  if (gap > 1 || gap < 0) {
    return 0;
  }
  const isWin = (who) => {
    const isPromising = new Array(8).fill(0);
    for (let i = 0; i < n; i++) {
      if (board[i][0] === who) isPromising[0]++;
      if (board[i][1] === who) isPromising[1]++;
      if (board[i][2] === who) isPromising[2]++;
      if (board[0][i] === who) isPromising[3]++;
      if (board[1][i] === who) isPromising[4]++;
      if (board[2][i] === who) isPromising[5]++;
      if (board[i][i] === who) isPromising[6]++;
      if (board[n - i - 1][n - i - 1] === who) isPromising[7]++;
    }
    return isPromising.some((v) => v === n);
  };

  const isOWin = isWin("O");
  const isXWin = isWin("X");
  if (isOWin && isXWin) {
    return 0;
  }
  if (isOWin && gap !== 1) {
    return 0;
  }
  if (isXWin && gap !== 0) {
    return 0;
  }
  return 1;
}
