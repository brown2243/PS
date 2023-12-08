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
//// two pointer
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
// 1번 기둥에 남은 N개 중 N-1개를 2번 기둥에 옮긴다. (3번 기둥을 보조 기둥으로 사용)
// 1번 기둥에 남은 가장 큰 원판을 3번 기둥에 옮긴다.
// 2번 기둥에 남은 N-1개의 원판들을 3번 기둥에 옮긴다. (1번 기둥을 보조 기둥으로 사용)
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

// 양궁대회
function solution(n, info) {
  let max = 0;
  let result;

  const dfs = (idx, arrows, lionInfo) => {
    if (idx >= 10) {
      lionInfo[10] = arrows;
      arrows = 0;
      if (arrows > 0) {
        lionInfo[10] = arrows;
      }
      let lScore = 0;
      let AScore = 0;
      for (let i = 0; i < 11; i++) {
        if (!lionInfo[i] && !info[i]) continue;
        if (lionInfo[i] > info[i]) {
          lScore += 10 - i;
        } else {
          AScore += 10 - i;
        }
      }
      const gap = lScore - AScore;
      if (gap > max) {
        result = [...lionInfo];
        max = gap;
      }
      if (result && gap === max) {
        for (let i = 10; i >= 0; i--) {
          if (result[i] === lionInfo[i]) continue;
          if (result[i] < lionInfo[i]) {
            result = [...lionInfo];
          }
          break;
        }
      }
      lionInfo[10] = 0;
      return;
    }
    // 라이언이 이길 때
    const needArrowCnt = info[idx] + 1;
    if (needArrowCnt <= arrows) {
      lionInfo[idx] = needArrowCnt;
      dfs(idx + 1, arrows - needArrowCnt, lionInfo);
    }
    lionInfo[idx] = 0;
    // 어피치가 이길 때
    dfs(idx + 1, arrows, lionInfo);
  };
  dfs(0, n, new Array(11).fill(0));
  return max ? result : [-1];
}

// 23/12/07
// 광물 캐기
function solution(picks, minerals) {
  let answer = Number.MAX_SAFE_INTEGER;
  const info = {
    0: {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    1: {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    2: {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  };
  let n = picks.reduce((acc, cur) => acc + cur, 0);
  const dfs = (idx, tired) => {
    if (idx >= minerals.length || n === 0) {
      answer = Math.min(answer, tired);
      return;
    }
    for (let pick = 0; pick < picks.length; pick++) {
      let work = tired;
      if (picks[pick] > 0) {
        picks[pick] -= 1;
        n -= 1;
        for (let i = idx; i < idx + 5; i++) {
          if (minerals[i]) {
            work += info[pick][minerals[i]];
          } else {
            break;
          }
        }
        dfs(idx + 5, work);
        picks[pick] += 1;
        n += 1;
      }
    }
  };
  dfs(0, 0);
  return answer;
}

// 우박수열 정적분
function solution(k, ranges) {
  const answer = [];
  const areas = [];
  while (true) {
    nextK = collatz(k);
    areas.push((k + nextK) / 2);
    k = nextK;
    if (k === 1) {
      break;
    }
  }
  const n = areas.length;
  for (let [a, b] of ranges) {
    b += n;
    const v = a > b ? -1 : areas.slice(a, b).reduce((acc, cur) => acc + cur, 0);
    answer.push(v);
  }
  return answer;
}

const collatz = (x) => {
  if (x % 2 === 0) {
    return x / 2;
  }
  return x * 3 + 1;
};

// 혼자 놀기의 달인
function solution(cards) {
  var answer = 0;
  const n = cards.length;
  const visited = new Array(n + 1);

  for (let i = 0; i < n; i++) {
    visited.fill(0);
    let firstCnt = 0;
    let step = cards[i] - 1;
    while (true) {
      if (visited[step]) {
        break;
      }
      visited[step] = 1;
      step = cards[step] - 1;
      firstCnt++;
    }
    if (n === firstCnt) continue;

    let secondVisited = [...visited];
    let secondIdx = 1;
    while (secondIdx < n) {
      if (!secondVisited[secondIdx]) {
        let secondCnt = 0;
        let step = cards[secondIdx] - 1;
        while (true) {
          if (secondVisited[step]) {
            break;
          }
          secondVisited[step] = 1;
          step = cards[step] - 1;
          secondCnt++;
        }
        answer = Math.max(answer, firstCnt * secondCnt);
        secondVisited = [...visited];
      }
      secondIdx++;
    }
  }
  return answer;
}

// 과제 진행하기
function solution(plans) {
  plans = plans
    .map((v) => {
      const [h, m] = v[1].split(":").map(Number);
      v[1] = h * 60 + m;
      v[2] = Number(v[2]);
      return v;
    })
    .sort((a, b) => a[1] - b[1]);

  const answer = [];
  const stack = [];
  let min = plans[0][1];

  while (plans.length > 0 || stack.length > 0) {
    if (stack.length > 0) {
      const last = stack[stack.length - 1];
      last[1] -= 1;
      if (last[1] === 0) {
        answer.push(stack.pop()[0]);
      }
    }
    if (plans.length > 0 && min === plans[0][1]) {
      const quest = plans.shift();
      stack.push([quest[0], quest[2]]);
    }
    min++;
  }
  return answer;
}

// N-Queen
function solution(n) {
  let ans = 0;

  const nQueens = (cnt, col) => {
    const n = col.length - 1;
    if (isPromising(cnt, col)) {
      if (cnt === n) {
        ans++;
        return;
      }
      for (let next = 1; next <= n; next++) {
        col[cnt + 1] = next;
        nQueens(cnt + 1, col);
        col[cnt + 1] -= next;
      }
    }
  };

  const isPromising = (now, col) => {
    let next = 1;
    let flag = true;
    while (flag && next < now) {
      // 1.같은 행에 배치
      // 2.행 번호 차이가 다른 퀸의 열 번호의 절대값 차이와 같다면 대각선상에 위치
      if (
        col[now] === col[next] ||
        now - next === Math.abs(col[now] - col[next])
      ) {
        flag = false;
      }
      next++;
    }
    return flag;
  };

  const col = new Array(n + 1).fill(0);
  nQueens(0, col);
  return ans;
}

// 두 원 사이의 정수 쌍
function solution(r1, r2) {
  let ans = 0;

  for (let x = 1; x <= r2; x++) {
    const y2 = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    const y1 = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) || 0;
    ans += y2 - y1 + 1;
  }
  return ans * 4;
}

// 12/08
// 혼자서 하는 틱택토
function solution(board) {
  const n = 3;
  let oCnt = 0;
  let xCnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        oCnt += 1;
      }
      if (board[i][j] === "X") {
        xCnt += 1;
      }
    }
  }
  const gap = oCnt - xCnt;
  if (gap > 1 || gap < 0) {
    return 0;
  }
  const isWin = (who) => {
    const isPromising = new Array(8).fill(0);
    for (let i = 0; i < n; i++) {
      if (board[i][0] === who) isPromising[0]++;
      if (board[i][1] === who) isPromising[1]++;
      if (board[i][2] === who) isPromising[2]++;
      if (board[0][i] === who) isPromising[3]++;
      if (board[1][i] === who) isPromising[4]++;
      if (board[2][i] === who) isPromising[5]++;
      if (board[i][i] === who) isPromising[6]++;
      if (board[i][n - i - 1] === who) isPromising[7]++;
    }
    return isPromising.some((v) => v === n);
  };

  const isOWin = isWin("O");
  const isXWin = isWin("X");
  if (isOWin && isXWin) {
    return 0;
  }
  if (isOWin && gap !== 1) {
    return 0;
  }
  if (isXWin && gap !== 0) {
    return 0;
  }
  return 1;
}

// KAKAO
// 거리 두기 확인하기
function solution(places) {
  return places.map((place) => {
    return place.some((row, rowIndex) => {
      return row.split("").some((column, index, arr) => {
        if (column == "X") return false;

        const userCount = [
          arr[index - 1] || "",
          arr[index + 1] || "",
          (place[rowIndex - 1] || "").charAt(index),
          (place[rowIndex + 1] || "").charAt(index),
        ].filter((v) => v == "P").length;

        if (
          (column == "P" && userCount > 0) ||
          (column == "O" && userCount >= 2)
        ) {
          return true;
        }

        return false;
      });
    })
      ? 0
      : 1;
  });
}
// 아래코드가 일반적인 방식
const iskeepingDistance = (place) => {
  let roomInfo = place.map((rooms) => rooms.split(""));

  let queue = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (roomInfo[i][j] === "P") {
        queue.push([i, j]);
      }
    }
  }

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (roomInfo[nx][ny] === "X") continue;
      if (roomInfo[nx][ny] === "P") return 0;

      for (let j = 0; j < 4; j++) {
        let aroundNX = nx + dx[j];
        let aroundNY = ny + dy[j];

        if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5)
          continue;
        if (aroundNX === x && aroundNY === y) continue;
        if (roomInfo[aroundNX][aroundNY] === "P") return 0;
      }
    }
  }

  return 1;
};

function solution(places) {
  let keepingDistance = [];
  for (let i = 0; i < 5; i++) {
    keepingDistance.push(iskeepingDistance(places[i]));
  }
  return keepingDistance;
}

// 교점에 별 만들기
// 내가 짠 식, 완전 통과는 안됌 ㅅㅂ
function getPoint(line1, line2) {
  const [ax1, by1, c1] = line1;
  const [ax2, by2, c2] = line2;
  // 교점이 없는 경우
  if (ax1 * by2 - ax2 * by1 === 0) {
    return [];
  }
  const x = (by1 * c2 - by2 * c1) / (ax1 * by2 - ax2 * by1);
  return [x, -(ax1 / by1) * x - c1 / by1];
}
function solution(lines) {
  const box = new Set();
  const N = lines.length;
  const Xs = [];
  const Ys = [];

  for (let i = 0; i < N - 1; i++) {
    const line1 = lines[i];
    for (let j = i + 1; j < N; j++) {
      const line2 = lines[j];
      const point = getPoint(line1, line2);
      const [x, y] = point;
      if (x === undefined) continue;
      if (!(parseInt(x) === x) || !(parseInt(y) === y)) continue;
      Xs.push(x);
      Ys.push(y);
      box.add(point);
    }
  }
  // 중복 제거 및 정수 아닌 포인트 제거
  const arr = Array.from(box);
  if (arr.length === 1) {
    return ["*"];
  }

  const minX = Math.min(...Xs),
    minY = Math.min(...Ys),
    maxX = Math.max(...Xs),
    maxY = Math.max(...Ys);

  const YN = maxY - minY + 1;
  const sheet = Array.from({ length: YN }, () =>
    new Array(maxX - minX + 1).fill(".")
  );

  arr.forEach((line) => {
    const [x, y] = line;
    sheet[YN - (y - minY) - 1][x - minX] = "*";
  });
  return sheet.map((row) => row.join(""));
}
// 아래 참조함
// max min 부분, 교차점 구하는 부분이 달랐음
// https://velog.io/@front/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%90%EC%A0%90%EC%97%90-%EB%B3%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%84%ED%81%B4%EB%A6%AC-%EC%B1%8C%EB%A6%B0%EC%A7%80-10%EC%A3%BC%EC%B0%A8
function solution(lines) {
  const box = [];
  const N = lines.length;

  const INF = Number.MAX_SAFE_INTEGER;
  let minX = INF;
  let minY = INF;
  let maxX = -INF;
  let maxY = -INF;

  for (let i = 0; i < N - 1; i++) {
    const line1 = lines[i];
    for (let j = i + 1; j < N; j++) {
      const line2 = lines[j];
      const [a, b, e] = line1;
      const [c, d, f] = line2;

      const mod = a * d - b * c;
      if (!mod) continue; // 분모가 0인 경우 -> 서로 평행하거나 일치

      const xNumerator = b * f - e * d;
      const yNumerator = e * c - a * f;
      if (xNumerator % mod || yNumerator % mod) continue; // 정수가 아닌 교차점

      const x = xNumerator / mod;
      const y = yNumerator / mod;

      box.push([x, y]);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  const YN = maxY - minY + 1;
  const sheet = Array.from({ length: YN }, () =>
    new Array(maxX - minX + 1).fill(".")
  );

  box.forEach((line) => {
    const [x, y] = line;
    sheet[YN - (y - minY) - 1][x - minX] = "*";
  });
  return sheet.map((row) => row.join(""));
}

// 이모티콘 할인행사
function solution(users, emoticons) {
  const n = emoticons.length;
  const sales = new Array(n).fill(0);
  const salesRatio = [40, 30, 20, 10];
  let answer = [0, 0];

  const dfs = (depth) => {
    if (depth === n) {
      let plusCnt = 0,
        totalProfit = 0;

      for (let i = 0; i < users.length; i++) {
        const [acceptableRatio, maximumBudget] = users[i];
        let paid = 0;
        let isBuyPlus = false;
        for (let j = 0; j < sales.length; j++) {
          if (acceptableRatio > sales[j]) continue;
          paid += emoticons[j] * ((100 - sales[j]) / 100);
          if (paid >= maximumBudget) {
            isBuyPlus = true;
            paid = 0;
            break;
          }
        }

        if (isBuyPlus) {
          plusCnt += 1;
        }
        totalProfit += paid;
      }
      if (plusCnt > answer[0]) {
        answer = [plusCnt, totalProfit];
      } else if (plusCnt === answer[0]) {
        answer[1] = Math.max(answer[1], totalProfit);
      }
      return;
    }
    for (let i = 0; i < 4; i++) {
      sales[depth] = salesRatio[i];
      dfs(depth + 1);
      sales[depth] = 0;
    }
  };
  dfs(0);
  return answer;
}
