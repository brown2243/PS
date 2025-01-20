/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const obj = {};
  const n = mat.length;
  const m = mat[0].length;
  const isVisted = Array.from({ length: n }, () => new Array(m).fill(false));
  const row = {};
  const col = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      obj[mat[i][j]] = [i, j];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const [y, x] = obj[value];
    isVisted[y][x] = true;

    col[x] = col[x] + 1 || 1;
    row[y] = row[y] + 1 || 1;
    if (col[x] === n || row[y] === m) return i;
  }
  return 0;
};
