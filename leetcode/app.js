/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const row = [];

  for (let i = n - 1; i >= 0; i--) {
    if ((n - 1 - i) % 2 === 0) {
      row.push(...board[i]);
    } else {
      row.push(...board[i].reverse());
    }
  }
  const target = row.length;
  const isVisited = new Array(target).fill(false);
  const q = [[0, 0]];
  isVisited[0] = true;

  while (q.length > 0) {
    const [point, step] = q.shift();
    if (point === target - 1) return step;

    for (let i = 1; i <= 6; i++) {
      const nextPoint = point + i;
      if (nextPoint >= target || isVisited[nextPoint]) continue;

      isVisited[nextPoint] = true;
      if (row[nextPoint] !== -1) {
        q.push([row[nextPoint] - 1, step + 1]);
      } else {
        q.push([nextPoint, step + 1]);
      }
    }
  }
  return -1;
};
