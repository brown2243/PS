## MEDIUM

<!-- ### []()


```
```


```javascript

``` -->

### [1261. Find Elements in a Contaminated Binary Tree](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/?envType=daily-question&envId=2025-02-21)

```
간만에 풀어본 노드 관련문제

처음에 node가 가진 value를 변경하는 로직을 사용했는데, 변경이 안되더라
그래서 함수의 인자로 넘겨주도록 변경했다.

소요시간이 더 짧은 답변도 로직은 동일한데, set과 obj의 차이이다.
```

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
  this.obj = {};
  root.val = 0;

  const dfs = (node, x) => {
    this.obj[x] = true;
    if (node.left) {
      dfs(node.left, 2 * x + 1);
    }
    if (node.right) {
      dfs(node.right, 2 * x + 2);
    }
  };
  dfs(root, 0);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.obj[target] || false;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
```

### [2342. Max Sum of a Pair With Equal Sum of Digits](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/?envType=daily-question&envId=2025-02-12)

```
단순한 구현 문제이다. 더 잘 풀고 싶었는데 아이디어가 잘 안떠올랐다.

```

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const key = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (obj[key]) {
      obj[key].push(num);
    } else {
      obj[key] = [num];
    }
  }

  let ans = -1;
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const target = obj[keys[i]];
    target.sort((a, b) => b - a);
    if (target.length > 1) {
      ans = Math.max(ans, target[0] + target[1]);
    }
  }
  return ans;
};
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const max = new Array(82).fill(0);
  let ans = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let key = 0,
      temp = num;

    while (temp !== 0) {
      key += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (max[key] !== 0) ans = Math.max(ans, num + max[key]);
    max[key] = Math.max(max[key], num);
  }
  return ans;
};
```

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

---

## EASY

<!-- ### []()


```
```


```javascript

``` -->

### [1752. Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/submissions/1530994858/?envType=daily-question&envId=2025-02-02)

```
쉬운 문제라고 생각했는데, 생각보다 삽질했다.
```

```javascript
// 내 삽질코드...
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  const n = nums.length;
  let rotated = false;
  const start = nums[0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      if (nums[i - 1] === max && nums[i] === min) {
        rotated = true;
        continue;
      } else {
        return false;
      }
    }
    if (rotated && nums[i] > start) {
      return false;
    }
  }
  return true;
};
// 남들 코드
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length;
  let cnt = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) cnt++;
  }

  if (nums[n - 1] > nums[0]) cnt++;

  return cnt <= 1;
};
```

### [3105. Longest Strictly Increasing or Strictly Decreasing Subarray](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/?envType=daily-question&envId=2025-02-03)

```
- easy 문제라 브루트포스도 가능함
```

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let globalAsc = 1;
  let globalDesc = 1;
  let localAsc = 1;
  let localDesc = 1;

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const now = nums[i];

    if (prev < now) {
      localAsc += 1;
    } else {
      localAsc = 1;
    }
    if (prev > now) {
      localDesc += 1;
    } else {
      localDesc = 1;
    }
    if (globalAsc < localAsc) {
      globalAsc = localAsc;
    }
    if (globalDesc < localDesc) {
      globalDesc = localDesc;
    }
  }
  return Math.max(globalAsc, globalDesc);
};
```
