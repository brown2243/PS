<!-- # EASY
--- -->

## MEDIUM

---

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
