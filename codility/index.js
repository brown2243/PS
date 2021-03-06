// Lesson 1 Iterations
// BinaryGap
function BinaryGap(N) {
  const arr = N.toString(2).split("1");
  const n = arr.length;
  arr.pop();

  return n === 2 ? 0 : arr.sort((a, b) => b.length - a.length)[0].length;
}
// Lesson 2 Arrays
// CyclicRotation
function CyclicRotation(A, K) {
  const N = A.length;
  const k = K % N;

  return A.slice(N - k, N).concat(A.slice(0, N - k));
}

// OddOccurrencesInArray
function OddOccurrencesInArray(A) {
  const obj = A.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  return Number(Object.keys(obj).filter((val) => obj[val] % 2 === 1)[0]);
}
// 이 문제 이해가 안가는게
// Number(Object.keys(obj).filter((val) => obj[val] % 2 === 1)[0]); 가 정답인데
// Number(Object.keys(obj).filter((val) => obj[val] === 1)[0]); 정답이 아님;; 문제 상 정답 cnt는 무조건 1인데 66% 나옴

// Lesson 3 Time Complexity
// FrogJmp
function FrogJmp(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

// PermMissingElem
function PermMissingElem(A) {
  const N = A.length;
  if (N === 0) {
    return 1;
  }

  const total = ((N + 1) * (N + 2)) / 2;
  const arrTotal = A.reduce((acc, cur) => acc + cur);
  return total - arrTotal;
}

// TapeEquilibrium
function TapeEquilibrium(A) {
  let right = A.reduce((acc, cur) => acc + cur);
  let left = 0;
  const abs = [];

  A.forEach((val) => {
    left += val;
    right -= val;
    abs.push(Math.abs(left - right));
  });
  abs.pop(); // 이거 못찾아서 삽질함

  return Math.min(...abs);
}

// Lesson 4 Counting Elements
// FrogRiverOne
function FrogRiverOne1(X, A) {
  let lastIdx = 0;

  for (let i = 1; i < X + 1; i++) {
    const idx = A.indexOf(i);
    if (idx === -1) return -1;
    lastIdx = Math.max(lastIdx, idx);
  }
  return lastIdx;
}
// 타임 아웃 걸려서 답 봄, 로직은 동일한데 set으로 품
function FrogRiverOne2(X, A) {
  const leaves = new Set();
  for (let i = 0; i < A.length; i++) {
    leaves.add(A[i]);

    if (leaves.size === X) {
      return i;
    }
  }
  return -1;
}

// PermCheck
function PermCheck(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0;
  }
  return 1;
}

// MaxCounters
// timeOut
function MaxCounters1(N, A) {
  const ans = new Array(N).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      const max = Math.max(...ans);
      ans.forEach((_, idx) => {
        ans[idx] = max;
      });
    } else {
      ans[A[i] - 1] += 1;
    }
  }
  return ans;
}
function MaxCounters2(N, A) {
  const ans = new Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  A.forEach((val) => {
    if (val === N + 1) {
      max = lastMax;
    } else {
      ans[val - 1] = Math.max(ans[val - 1] + 1, max + 1);
      lastMax = Math.max(lastMax, ans[val - 1]);
    }
  });

  return ans.map((v) => Math.max(v, max));
}

// MissingInteger
// 88(tiemOut) -> 100
function MissingInteger(A) {
  const set = new Set(A);
  const arr = Array.from(set).sort((a, b) => a - b);
  const idx = arr.findIndex((val) => val > 0);

  if (arr[idx] !== 1) return 1;
  let ans = 2;
  for (let i = idx + 1; i < arr.length; i++, ans++) {
    if (arr[i] !== ans) {
      return ans;
    }
  }
  return ans;
}

// Lesson 5 Prefix Sums
// PassingCars
function PassingCars(A) {
  const max = 1000000000;
  let zeroCnt = 0,
    total = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zeroCnt += 1;
    } else {
      total += zeroCnt;
    }
  }
  return max < total ? -1 : total;
}
// CountDiv
function CountDiv(A, B, K) {
  return Math.floor(B / K) - Math.ceil(A / K) + 1;
}

// GenomicRangeQuery
// 애매하게 최적화 하려하는게 더 느리다 ㅋㅋㅋ.ㅋ...
// const arr = Array.from(new Set(S.slice(P[i], Q[i] + 1)));
// const idx = shock.findIndex((v) => arr.indexOf(v) !== -1);
function GenomicRangeQuery(S, P, Q) {
  const ans = [];
  const shock = ["A", "C", "G", "T"];

  for (let i = 0; i < P.length; i++) {
    const str = S.slice(P[i], Q[i] + 1);
    const idx = shock.findIndex((v) => str.indexOf(v) !== -1);
    ans.push(idx + 1);
  }
  return ans;
}

// MinAvgTwoSlice
// 이 문제는 2개, 3개 집합만 구하면 된다는걸 파악하고 품
function MinAvgTwoSlice(A) {
  const N = A.length;
  let smallAvg = (A[0] + A[1]) / 2;
  let startPoint = 0;

  for (let i = 0; i < N - 1; i++) {
    const partAvg2 = A.slice(i, i + 2).reduce((acc, cur) => acc + cur) / 2;

    if (partAvg2 < smallAvg) {
      smallAvg = partAvg2;
      startPoint = i;
    }
  }

  for (let i = 0; i < N - 2; i++) {
    const partAvg3 = A.slice(i, i + 3).reduce((acc, cur) => acc + cur) / 3;
    if (partAvg3 < smallAvg) {
      smallAvg = partAvg3;
      startPoint = i;
    }
  }

  return startPoint;
}

// Lesson 6 Sorting
// Distinct
function Distinct(A) {
  return new Set(A).size;
}

// MaxProductOfThree
// 너무 떄려 맞춘듯 -> 이게 맞는 풀이법인데 3번쨰꺼 없으면 완벽
function MaxProductOfThree(A) {
  A.sort((a, b) => b - a);
  const N = A.length;
  return Math.max(
    [A[0], A[1], A[2]].reduce((acc, cur) => acc * cur, 1),
    [A[0], A[N - 1], A[N - 2]].reduce((acc, cur) => acc * cur, 1),
    [A[N - 3], A[N - 1], A[N - 2]].reduce((acc, cur) => acc * cur, 1)
  );
}

// Triangle
function Triangle(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (
      A[i] < A[i + 1] + A[i + 2] &&
      A[i + 1] < A[i] + A[i + 2] &&
      A[i + 2] < A[i + 1] + A[i]
    ) {
      return 1;
    }
  }
  return 0;
}

// NumberOfDiscIntersections
// 2번쨰 조건이 핵심이네
function NumberOfDiscIntersections(A) {
  const N = A.length;
  const arr = A.map((val, idx) => [idx - val, idx + val]);
  arr.sort((a, b) => a[0] - b[0]);

  let total = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (total > 10000000) {
        return -1;
      }
      if (arr[j][0] > arr[i][1]) {
        break;
      }
      if (arr[i][1] >= arr[j][0]) {
        total += 1;
      }
    }
  }

  return total;
}

// Lesson 7 Stacks and Queues
// Brackets
function Brackets(S) {
  const box = [];
  const arr = S.split("");
  const obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      box.push(arr[i]);
    } else {
      if (obj[arr[i]] === box[box.length - 1]) {
        box.pop();
      } else {
        return 0;
      }
    }
  }

  return box.length === 0 ? 1 : 0;
}

// fish
// 이거는 못푼 문제 ㅅㅂ 답봄
function fish(A, B) {
  const N = A.length;
  const river = [];
  let i = 0;

  while (i < N) {
    if (B[i] === 0 && B[river[river.length - 1]] === 1) {
      if (A[i] > A[river[river.length - 1]]) {
        river.pop();
      } else {
        i++;
      }
    } else {
      river.push(i);
      i++;
    }
  }
  return river.length;
}
// Nesting
// 위 Brackets과 동일하기 풀리는 문제
function Nesting(S) {
  const box = [];
  const arr = S.split("");
  const obj = {
    ")": "(",
  };
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      box.push(arr[i]);
    } else {
      if (obj[arr[i]] === box[box.length - 1]) {
        box.pop();
      } else {
        return 0;
      }
    }
  }

  return box.length === 0 ? 1 : 0;
}

// StoneWall
// 답 봄 로직 생각이 안남
function StoneWall(H) {
  const N = H.length;

  let ans = 0;
  const blockQueue = [];

  for (let i = 0; i < N; i++) {
    const now = H[i];
    while (blockQueue.length && blockQueue[blockQueue.length - 1] > now) {
      blockQueue.pop();
    }
    if (blockQueue.length === 0 || blockQueue[blockQueue.length - 1] < now) {
      blockQueue.push(now);
      ans++;
    }
  }
  return ans;
}

// Lesson 8 Leader
// Dominator
function Dominator(A) {
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

// EquiLeader
function EquiLeader(A) {
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
  idx = Number(idx);
  let counter = 0;
  const maxCntBox = [];
  for (let i = 0; i < N; i++) {
    if (A[i] === idx) {
      counter++;
    }
    maxCntBox.push(counter);
  }

  let ans = 0;

  for (let i = 0; i < N - 1; i++) {
    const leftN = i + 1;
    const rightN = N - i - 1;

    const left = maxCntBox[leftN - 1];
    const right = maxCntBox[N - 1] - left;

    if (left / leftN > 0.5 && right / rightN > 0.5) {
      ans++;
    }
  }

  return ans;
}

// Lesson 9 Maximum slice problem
function MaxProfit(A) {
  const N = A.length;

  let min = A[0];
  let gap = 0;
  for (let i = 1; i < N; i++) {
    min = Math.min(min, A[i]);
    gap = Math.max(gap, A[i] - min);
  }

  return gap;
}

// MaxSliceSum
function MaxSliceSum(A) {
  const N = A.length;
  const ans = [A[0]];

  for (let i = 1; i < N; i++) {
    ans.push(Math.max(A[i], ans[ans.length - 1] + A[i]));
  }

  return Math.max(...ans);
}

// MaxDoubleSliceSum
// 답 봄
function MaxDoubleSliceSum(A) {
  const N = A.length;

  if (N === 3) {
    return 0;
  }

  const leftArr = new Array(N).fill(0);
  const rightArr = new Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    leftArr[i] = Math.max(0, leftArr[i - 1] + A[i]);
  }

  for (let i = N - 2; i > 0; i--) {
    rightArr[i] = Math.max(0, rightArr[i + 1] + A[i]);
  }

  let maxSum = 0;

  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, leftArr[i - 1] + rightArr[i + 1]);
  }
  return maxSum;
}

// Lesson 10 Prime and composite numbers
// CountFactors
// 간단하게 약수 찾는 방식으로는 답 안나와서 알고리즘 검색
// https://kbw1101.tistory.com/32
function CountFactors(N) {
  if (N === 1) {
    return 1;
  }
  let ans = 2;
  for (let i = 2; i < N / 2 + 1; i++) {
    if (N % i === 0) {
      ans++;
    }
  }
  return ans;
}
function CountFactors2(N) {
  if (N === 1) {
    return 1;
  }

  const ans = [];
  for (let i = 1; i < Math.sqrt(N) + 1; i++) {
    if (N % i === 0) {
      ans.push(i);
    }
  }
  const A = ans.length;
  for (let i = 0; i < A; i++) {
    ans.push(N / ans[i]);
  }
  return new Set(ans).size;
}
// MinPerimeterRectangle
function MinPerimeterRectangle(N) {
  const ans = [];
  for (let i = 1; i < Math.sqrt(N) + 1; i++) {
    if (N % i === 0) {
      ans.push(i);
    }
  }
  const key = ans.pop();
  return (key + N / key) * 2;
}

// Flags
// 답 봄, 로직은 대강 비슷한데 sqrt 하는게... 어렵
function Flags(A) {
  const N = A.length;
  if (N < 3) {
    return 0;
  }
  const peeks = [];
  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peeks.push(i);
    }
  }

  const P = peeks.length;
  if (P <= 2) {
    return P;
  }

  const maxFlags = Math.floor(Math.sqrt(peeks[P - 1] - peeks[0]) + 1);

  for (let i = maxFlags; i >= 2; i--) {
    let cnt = 1;
    let curLocation = peeks[0];

    for (let j = 1; j < P; j++) {
      if (curLocation + i <= peeks[j]) {
        curLocation = peeks[j];
        cnt++;
      }
    }
    if (cnt >= i) {
      return i;
    }
  }
  return 2;
}
// 1. peak P와 Q사이의 거리(배열 A에서 index)가 챙겨간 깃발의 갯수보다 크거나 같아야 깃발을 꽂을 수 있다.
// 2. 이 때, 배열 A의 peak에 꽂을 수 있는 가장 큰 깃발의 수를 구하면 된다.

// Peaks
// 한번에 품 크크루핑퐁
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

function Peaks(A) {
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
    const divider = countFactors[i];
    let idx = 0;
    let checker = true;
    while (idx < N) {
      const part = peaks.slice(idx, idx + divider);
      if (part.every((p) => p === false)) {
        checker = false;
        break;
      }
      idx += divider;
    }
    if (idx >= N && checker) {
      return N / divider;
    }
  }
  return 0;
}
// CountNonDivisible
// 퍼포먼스를 통과 못해서 답 봄 ㅅㅂ....

// 원소 A[i]의 약수가 아닌 수는 전체 원소의 개수에서 약수인 수를 빼서 구했다.
// 맨 처음에는 배열안에서 각각의 수가 몇개인지 구해준다. 원소의 개수를 담는 배열의 범위는 idx값이 1부터 N*2까지 담을 수 있도록 만들었다. 왜냐하면 문제의 조건 중에 A[I]의 원소가 될 수 있는 범위는 1부터 N*2까지 이기 때문이다.
//  처음에 이 조건을 제대로 안보고 풀려고 하다보니 조금 헤맸다.
// 그리고나서 배열 A를 순회하면서 약수 j = 1부터 시작해서 A의 원소를 나누기 시작한다.
//  만약에 나눠지면, numCnt배열에서 해당 약수의 개수를 divisors개수에 합해주었다.
//  그리고나서 A[i]/j의 값이 j가 아니라면 이 수 역시 약수가 되기 때문에 numCnt에서 찾아서 divisors에 더해준 후 전체 배열의 개수인 N에서 빼주었다.
// 시간 복잡도는 O(N * log(N))가 나왔으며 total 100%가 나왔다.

function CountNonDivisible(A) {
  const N = A.length;
  const divisors = new Array(N * 2 + 1).fill(0);

  A.forEach((_, idx) => {
    divisors[A[idx]] += 1;
  });

  const ans = [];
  for (let i = 0; i < N; i++) {
    let cnt = 0;
    for (let j = 1; j * j <= A[i]; j++) {
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
