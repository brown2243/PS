/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const map = [];
  roads.forEach((road) => {
    const [x, y] = road;
    if (map[x]) {
      map[x].push(y);
    } else {
      map[x] = [y];
    }
    if (map[y]) {
      map[y].push(x);
    } else {
      map[y] = [x];
    }
  });
  let ans = 0;
  const cntMap = new Array(map.length).fill(Infinity);
  const dfs = (now, depth) => {
    if (depth > cntMap[now]) {
      return;
    }
    cntMap[now] = depth;
    ans += Math.ceil(depth / seats);
    for (let i = 0; i < map[now]?.length; i++) {
      dfs(map[now][i], depth + 1);
    }
  };
  dfs(0, 0);

  return ans;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }

    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
};
