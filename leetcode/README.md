<!-- # EASY
--- -->

## MEDIUM

### [2657. Find the Prefix Common Array of Two Arrays](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/?envType=daily-question&envId=2025-01-14)

#### 해결 방법

```
순회하며 현재 값이 포함 되었는지, set으로 계속 체크
set을 사용하는 이유는 해시테이블 기반이라 has(O(1))가 includes(O(N))보다 빠름
```

#### 구현 코드

```javascript
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

    ans[i] = cnt;
  }
  return ans;
};
```

### [3223. Minimum Length of String After Operations](https://leetcode.com/problems/minimum-length-of-string-after-operations/description/?envType=daily-question&envId=2025-01-13)

#### 해결 방법

```
1.  3개 이상이면 계속 2개를 뺄 수 있음
1 1
2 2
3 1
4 2
5 1
6 2
...
```

#### 구현 코드

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const arr = new Array(26).fill(0);
  const aCode = "a".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt() - aCode;
    arr[code] += 1;
  }

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    if (arr[i] % 2 === 0) ans += 2;
    else ans += 1;
  }
  return ans;
};
```

### [2337. Move Pieces to Obtain a String](https://leetcode.com/problems/move-pieces-to-obtain-a-string/description/)

```

'L'은 왼쪽으로만 이동할 수 있음 -> 즉, start에서 'L'이 나타난 위치는 target에서의 위치보다 오른쪽에 있어야 함
'R'은 오른쪽으로만 이동할 수 있음 -> 즉, start에서 'R'이 나타난 위치는 target에서의 위치보다 왼쪽에 있어야 함

1. 순회할 변수 i, j
2. i와 j를 '_' 외에 값을 찾음
3. 두 문자열 모두 끝에 도달했다면 i === j
   그렇지 않다면, 하나의 문자열이 먼저 끝남
4. start[i]와 target[j]가 다르면, 두 문자열이 동일한 문자가 아님
```

```javascript
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const n = target.length;

  let i = 0,
    j = 0;

  while (i <= n && j <= n) {
    while (i < n && start[i] === "_") i++;
    while (j < n && target[j] === "_") j++;

    if (i === n || j === n) {
      return i === j;
    }

    if (start[i] !== target[j]) return false;

    if (start[i] === "L") {
      if (i < j) return false;
    } else {
      if (i > j) return false;
    }

    i++;
    j++;
  }
  return true;
};
```
