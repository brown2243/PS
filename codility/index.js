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
