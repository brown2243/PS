function countFactors2(N) {
  const ans = [1];
  for (let i = 1; i < Math.sqrt(N) + 1; i++) {
    if (N % i === 0) {
      ans.push(i);
    }
  }
  const A = ans.length;
  for (let i = 0; i < A; i++) {
    ans.push(N / ans[i]);
  }
  return Array.from(new Set(ans)).sort((a, b) => a - b);
}

function solution(A) {
  const N = A.length;
  if (N < 3) {
    return 0;
  }
  const peaks = [];
  peaks.push(false);
  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(true);
    } else {
      peaks.push(false);
    }
  }
  peaks.push(false);
  const countFactors = countFactors2(N);
  for (let i = 1; i < countFactors.length; i++) {
    console.log(i);
    const divider = countFactors[i];
    let idx = 0;
    let checker = true;
    while (idx < N) {
      const part = peaks.slice(idx, idx + divider);
      console.log(idx, N, part);
      if (part.every((p) => p === false)) {
        checker = false;
        break;
      }
      idx += divider;
    }
    if (idx >= N && checker) {
      console.log(`ans`, divider);
      return N / divider;
    }
  }
  return 0;
}
solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]);
// 1. peak P와 Q사이의 거리(배열 A에서 index)가 챙겨간 깃발의 갯수보다 크거나 같아야 깃발을 꽂을 수 있다.
// 2. 이 때, 배열 A의 peak에 꽂을 수 있는 가장 큰 깃발의 수를 구하면 된다.
