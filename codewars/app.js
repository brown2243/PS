function digPow(n, p) {
  const ans =
    n
      .toString()
      .split("")
      .map((v, i) => Number(v) ** (i + p))
      .reduce((acc, cur) => acc + cur) / n;
  return ans === parseInt(ans) ? ans : -1;
}
