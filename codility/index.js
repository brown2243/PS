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
