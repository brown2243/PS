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
