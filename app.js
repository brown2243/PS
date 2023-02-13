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
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let count = 0;
  let index1, index2;
  let n = s1.length;

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      count++;
      if (count === 1) {
        index1 = i;
      } else if (count === 2) {
        index2 = i;
      } else {
        return false;
      }
    }
  }
  if (count === 0) {
    return true;
  }
  return count === 2 && s1[index1] === s2[index2] && s1[index2] === s2[index1];
};
