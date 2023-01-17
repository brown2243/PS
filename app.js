function solution(storey) {
  const arr = storey.toString().split("").map(Number);
  let stone = 0;

  for (let N = arr.length - 1, i = N; i >= 0; i--) {
    const now = arr[i];
    const next = arr[i - 1];
    if (now > 5) {
      stone += 10 - now;
      if (next) {
        arr[i - 1] += 1;
      } else {
        stone += 1;
      }
    }
    if (now < 5) {
      stone += now;
    }
    if (now === 5) {
      if (next && next >= 5) {
        stone += 10 - now;
        arr[i - 1] += 1;
      } else {
        stone += now;
      }
    }
  }
  return stone;
}
solution(16);
solution(2554);
