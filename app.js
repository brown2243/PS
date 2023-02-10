/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  const arr = points
    .map((v) => (v[0] === x || v[1] === y ? v : [0, 0]))
    .map((v) => {
      if (v[0] === 0) {
        return Infinity;
      }
      return Math.abs(x - v[0]) + Math.abs(y - v[1]);
    });
  const val = Math.min(...arr);
  return val === Infinity ? -1 : arr.indexOf(val);
};
