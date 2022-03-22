function solution(A) {
  const N = A.length;
  const cnt = A.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  let idx = 0;
  let max = 0;
  const keys = Object.keys(cnt);
  keys.forEach((key) => {
    if (cnt[key] > max) {
      idx = key;
      max = cnt[key];
    }
  });

  if (N / 2 >= max) {
    return -1;
  }

  return A.indexOf(Number(idx));
}

console.log(solution([2, 1, 1, 3]));
