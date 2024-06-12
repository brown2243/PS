function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = new Array(n).fill(false);

  let globalCount = 0;

  const permutation = (k, cnt = 0) => {
    globalCount = Math.max(globalCount, cnt);

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      const [required, spend] = dungeons[i];
      if (k >= required) {
        visited[i] = true;
        permutation(k - spend, cnt + 1);
        visited[i] = false;
      }
    }
  };

  permutation(k);
  return globalCount;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
