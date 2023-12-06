// 위클리 챌린지 8주차 최소직사각형
// 문제 해결책이 안떠올라서 그렇지 쉬운 문제
function solution(sizes) {
  return sizes
    .reduce(
      (acc, cur) => {
        const a = Math.max(acc[0], Math.max(cur[0], cur[1]));
        const b = Math.max(acc[0], Math.min(cur[0], cur[1]));
        return [a, b];
      },
      [0, 0]
    )
    .reduce((acc, cur) => acc * cur);
}

// 위클리 챌린지 7주차 입실 퇴실
// 어려웠던 문제, 특이하게 푼 것 같다.
function solution(enter, leave) {
  const N = enter.length;
  const ans = Array.from({ length: N }, () => new Set());
  const room = [];

  for (let i = 0; i < N; i++) {
    room.push(enter[i]);
    if (room.length > 1) {
      room.forEach((member) => {
        room.forEach((mem) => {
          ans[member - 1].add(mem);
        });
      });
    }
    while (true) {
      if (room.includes(leave[0])) {
        room.splice(room.indexOf(leave[0]), 1);
        leave.shift();
      } else {
        break;
      }
    }
  }
  return ans.map((v) => (v.size === 0 ? 0 : v.size - 1));
}
// 다른사람풀이

// 위클리 챌린지 5주차 모음 사전
// 백트래킹문제라고 생각했음
function solution(word) {
  const arr = ["A", "E", "I", "O", "U"],
    N = arr.length;
  const ans = [];
  const str = [];

  function backtracking(str) {
    if (str.length === 5) {
      return;
    } else {
      for (let i = 0; i < N; i++) {
        str.push(arr[i]);
        ans.push(str.join(""));
        backtracking(str);
        str.pop();
      }
    }
  }

  backtracking(str);
  return ans.indexOf(word) + 1;
}
// 다른사람 풀이
function solution(words) {
  return words
    .split("")
    .reduce(
      (r, c, i) =>
        r + [781, 156, 31, 6, 1][i] * ["A", "E", "I", "O", "U"].indexOf(c) + 1,
      0
    );
}
//////////////////////////////

// 위클리 챌린지 6주차
// 복서 정렬하기
// 정렬이 짜증나는 문제
function solution(weights, head2head) {
  const ans = [];
  head2head.forEach((head, idx) => {
    const tmp = head.split("");
    const info = {};
    info.weight = weights[idx];
    info.idx = idx;
    info.winToBig = 0;
    info.battle = 0;
    info.win = 0;
    tmp.forEach((fight, i) => {
      if (fight === "N") {
      } else if (fight === "L") info.battle += 1;
      else if (fight === "W") {
        info.battle += 1;
        info.win += 1;
        if (info.weight < weights[i]) info.winToBig += 1;
      }
    });
    ans.push(info);
  });
  // 아래 내용 적용
  return ans
    .sort((a, b) => {
      if (a.win / a.battle > b.win / b.battle) return -1;
      if (a.win / a.battle < b.win / b.battle) return 1;
      if (a.winToBig > b.winToBig) return -1;
      if (a.winToBig < b.winToBig) return 1;
      if (a.weight > b.weight) return -1;
      if (a.weight < b.weight) return 1;
      if (a.idx < b.idx) return -1;
      if (a.idx > b.idx) return 1;
    })
    .map(({ idx }) => idx + 1);
}

// 다른사람 풀이
// 같은 방식인데 정렬만 이렇게 써도 훨씬 깔끔할 것 같다.
function compareFunc(a, b) {
  if (a.winRate < b.winRate) return 1;
  if (a.winRate > b.winRate) return -1;
  if (a.winToHeavy < b.winToHeavy) return 1;
  if (a.winToHeavy > b.winToHeavy) return -1;
  if (a.weight < b.weight) return 1;
  if (a.weight > b.weight) return -1;
  return a.idx - b.idx;
}
answer = records.sort(compareFunc).map((v) => v.idx);
// 다른 방식
function solution(weights, head2head) {
  return head2head
    .map((l, i) =>
      l.split("").reduce(
        (acc, v, j) => {
          acc[0] += v === "W" ? 1 : 0;
          acc[1] += v === "W" ? (weights[i] < weights[j] ? 1 : 0) : 0;
          acc[2] += v === "L" ? 1 : 0;
          return acc;
        },
        [0, 0, 0]
      )
    )
    .map((v) => [v[0] / (v[0] + v[2]), v[1]])
    .map((v, i) => [i + 1, { t: v[0], s: v[1], w: weights[i] }])
    .sort(
      (a, b) =>
        b[1].t - a[1].t || b[1].s - a[1].s || b[1].w - a[1].w || a[0] - b[0]
    )
    .map((v) => v[0]);
}

// 점 찍기
// 수학적 접근을 시도는 했는데 구하지는 못했음 ㅠㅠ
function solution(k, d) {
  let ans = 0;
  for (let x = 0; x <= d; x += k) {
    const y = Math.sqrt(d ** 2 - x ** 2);
    ans += Math.floor(y / k) + 1;
  }
  return ans;
}

// 마법의 엘리베이터
function solution(storey) {
  const arr = storey.toString().split("").map(Number);
  let stone = 0;

  for (let N = arr.length - 1, i = N; i >= 0; i--) {
    const now = arr[i];
    const next = arr[i - 1];
    if (now > 5) {
      stone += 10 - now;
      if (next) {
        arr[i - 1] += 1;
      } else {
        stone += 1;
      }
    }
    if (now < 5) {
      stone += now;
    }
    if (now === 5) {
      if (next && next >= 5) {
        stone += 10 - now;
        arr[i - 1] += 1;
      } else {
        stone += now;
      }
    }
  }
  return stone;
}

function solution(topping) {
  let ans = 0;
  let leftCnt = 0;
  let rightCnt = 0;
  const left = {};
  const right = topping.reduce((acc, cur) => {
    if (!acc[cur]) {
      rightCnt += 1;
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});

  for (let i = 0; i < topping.length; i++) {
    if (!left[topping[i]]) {
      left[topping[i]] = 1;
      leftCnt += 1;
    }
    right[topping[i]] -= 1;
    if (right[topping[i]] === 0) {
      rightCnt -= 1;
    }
    if (leftCnt === rightCnt) {
      ans += 1;
    }
  }
  return ans;
}

function solution(numbers) {
  const ans = new Array(numbers.length).fill(-1);

  let stack = [numbers[numbers.length - 1]];
  let maxNum = numbers[numbers.length - 1];
  for (let i = numbers.length - 2; i >= 0; i--) {
    if (numbers[i] >= maxNum) {
      maxNum = numbers[i];
      stack = [maxNum];
    } else {
      while (stack.length > 0) {
        const last = stack.pop();
        if (numbers[i] < last) {
          ans[i] = last;
          stack.push(last, numbers[i]);
          break;
        }
      }
    }
  }
  return ans;
}

// 연속된 부분 수열의 합
function solution(sequence, k) {
  const n = sequence.length;
  const res = [];
  let sum = 0,
    end = 0;

  for (let i = 0; i < n; i++) {
    while (sum < k && end < n) {
      sum += sequence[end];
      end += 1;
    }

    if (sum === k) {
      res.push([i, end - 1, end - 1 - i]);
    }
    sum -= sequence[i];
  }

  res.sort((a, b) => a[2] - b[2]);
  return res[0].slice(0, 2);
}

// 두 큐 합 같게 만들기 [https://blog.encrypted.gg/1076]
// 그리디 풀이 js 시간초과
function solution(queue1, queue2) {
  const n = queue1.length;
  let tot1 = queue1.reduce((acc, val) => acc + val, 0);
  let tot2 = queue2.reduce((acc, val) => acc + val, 0);

  for (let i = 0; i < 4 * n + 1; i++) {
    if (tot1 === tot2) {
      return i;
    }
    if (tot1 < tot2) {
      const x = queue2.shift();
      tot1 += x;
      tot2 -= x;
      queue1.push(x);
    } else {
      const x = queue1.shift();
      tot2 += x;
      tot1 -= x;
      queue2.push(x);
    }
  }
  return -1;
}

// two pointer
function solution(queue1, queue2) {
  const q = queue1.concat(queue2);
  let total1 = queue1.reduce((acc, val) => acc + val, 0);
  let total2 = queue2.reduce((acc, val) => acc + val, 0);
  const total = total1 + total2;
  if (total1 === total2) {
    return 0;
  }
  if (total % 2 !== 0) {
    return -1;
  }
  const target = total / 2;

  let start = 0;
  let end = queue1.length;
  let cnt = 0;

  while (cnt <= q.length * 3) {
    if (target === total1) {
      return cnt;
    }
    if (target > total1) {
      total1 += q[end];
      end++;
    } else {
      total1 -= q[start];
      start++;
    }
    cnt++;
  }
  return -1;
}

// 무인도 여행
function solution(maps) {
  const n = maps.length,
    m = maps[0].length;
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const answer = [];

  const dfs = (i, j) => {
    let days = 0;

    const move = (i, j) => {
      if (0 <= i && i < n && 0 <= j && j < m) {
        if (visited[i][j] || maps[i][j] === "X") {
          return;
        }
        visited[i][j] = 1;
        days += Number(maps[i][j]);

        move(i + 1, j);
        move(i - 1, j);
        move(i, j + 1);
        move(i, j - 1);
      }
    };

    move(i, j);
    if (days > 0) {
      answer.push(days);
    }

    return days;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dfs(i, j);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
// 전력망을 둘로 나누기
function solution(n, wires) {
  let ans = n,
    cnt = 0;

  const dfs = (visited, map, now) => {
    if (!visited[now]) {
      visited[now] = 1;
      for (let i = 0; i < map[now].length; i++) {
        dfs(visited, map, map[now][i]);
      }
    }
  };

  while (cnt < n) {
    const first = wires.shift();
    const visited = new Array(n + 1).fill(0);
    visited[0] = 1;
    const map = Array.from({ length: n + 1 }, () => []);

    wires.forEach((wire) => {
      map[wire[0]].push(wire[1]);
      map[wire[1]].push(wire[0]);
    });
    const start = wires[0][0];
    dfs(visited, map, start);
    const leftCnt = visited.reduce((acc, cur) => acc + cur, 0) - 1;
    const rightCnt = n - leftCnt;

    ans = Math.min(ans, Math.abs(rightCnt - leftCnt));
    cnt++;
    wires.push(first);
  }

  return ans;
}
// 호텔 대실
const timeToMin = (str) =>
  str
    .split(":")
    .map(Number)
    .reduce((acc, cur, idx) => {
      if (idx === 0) {
        cur *= 60;
      }
      return acc + cur;
    }, 0);

function solution(book_time) {
  const arr = new Array(1440).fill(0);

  for (let i = 0; i < book_time.length; i++) {
    const [arriveTime, leaveTime] = book_time[i].map(timeToMin);
    for (let j = arriveTime; j < leaveTime + 10; j++) {
      arr[j] += 1;
    }
  }
  return Math.max(...arr.slice(0, 1440));
}

// 씨바...
// 줄 서는 방법
// 시간 초과
function solution(n, k) {
  const answer = [];

  const permutation = (arr = []) => {
    if (arr.length === n) {
      answer.push([...arr]);
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        permutation(arr);
        if (answer.length === k) {
          return;
        }
        arr.pop();
      }
    }
  };
  permutation();

  return answer[k - 1];
}

function solution(n, k) {
  const answer = [];
  const arr = new Array(n).fill(1).map((v, i) => v + i);

  let nth = k - 1;

  while (true) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = Math.floor(nth / fact);
    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }
  return answer;
}

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

// 시소 짝꿍
// 실패 코드
function solution(weights) {
  const n = weights.length;
  let ans = 0;

  const permutation = (arr = []) => {
    if (arr.length === 2) {
      const [left, right] = arr;
      const min = Math.min(weights[left], weights[right]);
      const max = Math.max(weights[left], weights[right]);
      if (min === max) {
        ans += 1;
      } else if (min * 4 === max * 2) {
        ans += 1;
      } else if (min * 3 === max * 2) {
        ans += 1;
      } else if (min * 4 === max * 3) {
        ans += 1;
      }
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        permutation(arr);
        arr.pop();
      }
    }
  };
  permutation();
  return ans / 2;
}
function solution(weights) {
  let ans = 0;
  const store = {};
  const cals = [1, 3 / 2, 2, 4 / 3];

  weights
    .sort((a, b) => b - a)
    .forEach((weight) => {
      cals.forEach((cal) => {
        const s = weight * cal;
        if (store[s]) {
          ans += store[s];
        }
      });
      store[weight] = store[weight] + 1 || 1;
    });
  return ans;
}

// 숫자 카드 나누기
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => b - a);
  arrayB.sort((a, b) => b - a);

  let ans = 0;
  const a = arrayA.reduce((acc, cur) => gcd(acc, cur));
  const b = arrayB.reduce((acc, cur) => gcd(acc, cur));

  if (a !== 1 && arrayB.every((v) => v % a !== 0)) {
    ans = Math.max(ans, a);
  }
  if (b !== 1 && arrayA.every((v) => v % b !== 0)) {
    ans = Math.max(ans, b);
  }
  return ans;
}

// 미로 탈출
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  let start, lever, end;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (maps[y][x] === "S") {
        start = [y, x];
      }
      if (maps[y][x] === "L") {
        lever = [y, x];
      }
      if (maps[y][x] === "E") {
        end = [y, x];
      }
    }
  }

  const bfs = (start, end) => {
    const q = [start];
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));

    while (q.length) {
      let [y, x] = q.shift();
      if (end[0] === y && end[1] === x) {
        break;
      }
      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (0 <= ny && ny < n && 0 <= nx && nx < m) {
          if (!visited[ny][nx] && maps[ny][nx] !== "X") {
            q.push([ny, nx]);
            visited[ny][nx] = visited[y][x] + 1;
          }
        }
      }
    }
    return visited[end[0]][end[1]];
  };
  const a1 = bfs(start, lever);
  const a2 = bfs(lever, end);
  if (!a1 || !a2) {
    return -1;
  }
  return a1 + a2;
}

// 테이블 해시 함수
function solution(data, col, row_begin, row_end) {
  col -= 1;
  row_begin -= 1;
  row_end -= 1;
  data.sort((a, b) => {
    if (a[col] === b[col]) {
      return b[0] - a[0];
    }
    return a[col] - b[col];
  });

  let ans = 0;
  for (let i = row_begin; i <= row_end; i++) {
    ans ^= data[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0);
  }
  return ans;
}

// 하노이의 탑
function solution(n) {
  const answer = [];
  const hanoi = (N, start, mid, end) => {
    if (N === 1) {
      answer.push([start, end]);
    } else {
      hanoi(N - 1, start, end, mid);
      answer.push([start, end]);
      hanoi(N - 1, mid, start, end);
    }
  };

  hanoi(n, 1, 2, 3);
  return answer;
}

// 리코쳇 로봇
function solution(board) {
  let start, end;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        start = [i, j, 0];
      }
      if (board[i][j] === "G") {
        end = [i, j, 0];
      }
    }
  }

  const bfs = (matrix, start, end, block) => {
    const n = matrix.length;
    const m = matrix[0].length;

    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    const q = [start];
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));

    while (q.length) {
      let [y, x, distance] = q.shift();
      if (visited[y][x]) continue;
      visited[y][x] = true;
      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        while (true) {
          if (
            0 <= ny &&
            ny < n &&
            0 <= nx &&
            nx < m &&
            matrix[ny][nx] !== block
          ) {
            ny += dy[i];
            nx += dx[i];
            if (end[0] === y && end[1] === x) {
              return distance;
            }
          } else {
            ny -= dy[i];
            nx -= dx[i];
            break;
          }
        }
        q.push([ny, nx, distance + 1]);
      }
    }
    return -1;
  };
  const ans = bfs(board, start, end, "D");
  return ans ? ans : -1;
}
