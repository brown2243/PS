// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  const ans = new Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  A.forEach((val) => {
    console.log(ans);
    if (val === N + 1) {
      max = lastMax;
    } else {
      ans[val - 1] = Math.max(ans[val - 1] + 1, max + 1);
      lastMax = Math.max(lastMax, ans[val - 1]);
    }
  });
  console.log(ans);

  return ans.map((v) => Math.max(v, max));
}
solution(5, [3, 4, 4, 6, 1, 4, 4]);
