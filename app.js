function solution(A) {
  const N = A.length;
  const divisors = new Array(N * 2 + 1).fill(0);

  A.forEach((_, idx) => {
    divisors[A[idx]] += 1;
  });

  const ans = [];
  for (let i = 0; i < N; i++) {
    let cnt = 0;
    console.log("i", i);
    for (let j = 1; j * j <= A[i]; j++) {
      console.log("j", A[i], j);
      if (A[i] % j === 0) {
        cnt += divisors[j];

        if (A[i] / j !== j) {
          cnt += divisors[A[i] / j];
        }
      }
    }
    ans[i] = N - cnt;
  }
  return ans;
}
solution([3, 1, 2, 3, 6]);

// 원소 A[i]의 약수가 아닌 수는 전체 원소의 개수에서 약수인 수를 빼서 구했다.
// 맨 처음에는 배열안에서 각각의 수가 몇개인지 구해준다. 원소의 개수를 담는 배열의 범위는 idx값이 1부터 N*2까지 담을 수 있도록 만들었다. 왜냐하면 문제의 조건 중에 A[I]의 원소가 될 수 있는 범위는 1부터 N*2까지 이기 때문이다.
//  처음에 이 조건을 제대로 안보고 풀려고 하다보니 조금 헤맸다.
// 그리고나서 배열 A를 순회하면서 약수 j = 1부터 시작해서 A의 원소를 나누기 시작한다.
//  만약에 나눠지면, numCnt배열에서 해당 약수의 개수를 divisors개수에 합해주었다.
//  그리고나서 A[i]/j의 값이 j가 아니라면 이 수 역시 약수가 되기 때문에 numCnt에서 찾아서 divisors에 더해준 후 전체 배열의 개수인 N에서 빼주었다.
// 시간 복잡도는 O(N * log(N))가 나왔으며 total 100%가 나왔다.
