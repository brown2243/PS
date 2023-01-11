function solution(a, b, n, ans = 0) {
  const int = Math.floor(n / a);
  if (int === 0) {
    return ans;
  }
  return solution(a, b, n - int * a + int * b, ans + int * b);
}

const ans = solution(3, 1, 20);
console.log(ans);
