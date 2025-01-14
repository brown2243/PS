/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;
  const ans = new Array(n).fill(0);
  const setA = new Set();
  const setB = new Set();
  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    if (setB.has(A[i])) cnt++;
    if (setA.has(B[i])) cnt++;

    if (A[i] === B[i]) cnt--;

    ans.push(cnt);
  }

  return ans;
};

A = [1, 3, 2, 4];
B = [3, 1, 2, 4];
findThePrefixCommonArray(A, B);
