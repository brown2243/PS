<!-- # EASY
--- -->

## MEDIUM

<!-- ### []()


```
```


```javascript

``` -->

### [2661. First Completely Painted Row or Column](https://leetcode.com/problems/first-completely-painted-row-or-column/description/?envType=daily-question&envId=2025-01-20)

```
- 매번 조건을 검사하다가 시간초과나서 cnt하는 방식으로 변경
- 속도 빠른 코드를 보니 배열이 obj보다 확실히 빠르게 동작
```

```javascript
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const obj = {};
  const n = mat.length;
  const m = mat[0].length;
  const isVisted = Array.from({ length: n }, () => new Array(m).fill(false));
  const row = {};
  const col = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      obj[mat[i][j]] = [i, j];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const [y, x] = obj[value];
    isVisted[y][x] = true;

    col[x] = col[x] + 1 || 1;
    row[y] = row[y] + 1 || 1;
    if (col[x] === n || row[y] === m) return i;
  }
  return 0;
};
```

### [2425. Bitwise XOR of All Pairings](https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/)

```
XOR의 성질
교환 법칙: a ^ b = b ^ a
결합 법칙: (a ^ b) ^ c = a ^ (b ^ c)
자기 자신과의 XOR: a ^ a = 0
0과의 XOR: a ^ 0 = a

1. 두 배열의 모든 순열 XOR 값의 XOR 연산


Input: nums1 = [1,2], nums2 = [3,4]
num3[0] = nums1[0] ^ nums2[0]
num3[1] = nums1[0] ^ nums2[1]
num3[2] = nums1[1] ^ nums2[0]
num3[3] = nums1[1] ^ nums2[1]

ans = num3[0] ^ num3[1] ^ num3[2] ^ num3[3]

nums1_XOR은 nums2.length번 포함
nums2_XOR은 nums1.length번 포함

- nums3 를 만들어서 계산하려니 memory 에러 발생
- 하나의 변수에 ^ 연산을 해주니 시간초과

```

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  return (
    (nums2.length % 2 === 0 ? 0 : nums1.reduce((acc, cur) => acc ^ cur)) ^
    (nums1.length % 2 === 0 ? 0 : nums2.reduce((acc, cur) => acc ^ cur))
  );
};
```

### [2683. Neighboring Bitwise XOR](https://leetcode.com/problems/neighboring-bitwise-xor/?envType=daily-question&envId=2025-01-17)

```
1. original로 파생된 derived 배열을 받아
2. derived[i] = original[i] ⊕ original[i + 1] 로 original 유추
3. 적절한 original이 있는지 return

- 이진 배열이니 엘리먼트는 0 or 1
- 0으로 만들어서 검증
- 1로 만들어서 검증
```

```javascript
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  const n = derived.length;

  const original1 = [0];
  for (let i = 0; i < n; i++) {
    original1.push(original1[i] ^ derived[i]);
  }
  if (original1[0] === original1[n]) return true;

  const original2 = [1];
  for (let i = 0; i < n; i++) {
    original2.push(original2[i] ^ derived[i]);
  }
  if (original2[0] === original2[n]) return true;

  return false;
};
```

### [2429. Minimize XOR](https://leetcode.com/problems/minimize-xor/submissions/1509456404/?envType=daily-question&envId=2025-01-15)

#### 해결 방법

```
1. num2의 이진수의 1 의 갯수 세기
2. XOR 연산  1 1, 0 0 -> 0,
3. 1갯수만 큼 1을 추가
  1. xor 고려 추가
  2. 가장 작은 수가 되도록 뒤에서 부터 추가
```

#### 구현 코드

```javascript
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  const binery1 = num1.toString(2);
  const binery2 = num2.toString(2);

  let cnt = 0;
  for (let i = 0; i < binery2.length; i++) {
    if (binery2[i] === "1") cnt++;
  }

  const ans = [];
  for (let i = 0; i < binery1.length; i++) {
    if (cnt === 0) {
      ans.push(..."0".repeat(binery1.length - i).split(""));
      break;
    }
    if (binery1[i] === "1") {
      ans.push("1");
      cnt--;
    } else {
      ans.push("0");
    }
  }

  for (let i = ans.length - 1; i >= 0; i--) {
    if (cnt === 0) {
      break;
    }
    if (ans[i] === "0") {
      ans[i] = "1";
      cnt--;
    }
  }
  if (cnt > 0) {
    ans.push(..."1".repeat(cnt).split(""));
  }
  return parseInt(ans.join(""), 2);
};
```

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
