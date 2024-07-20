/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill("");
  let now = 0;
  let step = 1;

  for (let char of s) {
    rows[now] += char;

    if (now === 0) step = 1;
    else if (now === numRows - 1) step = -1;

    now += step;
  }

  return rows.join("");
};
