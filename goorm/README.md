# 구름

## 유형 트레이닝

### 구현

```javascript
// 인공지능 청소기
// 타임 아웃 떠서 보니, 맨해튼 거리로 푸는 문제라함
// distance = |x| + |y|
// 오답
let lineCount = 0
rl.on("line", function(line) {
lineCount++
if(lineCount === 1) return
const [X,Y,time] = line.split(" ").map(Number)
let flag = false
const q = [[0,0,0]]
while (q.length > 0){
  const [x, y, depth] = q.shift()
  if(time === depth){
    if(x === X && y === Y) {
      flag = true
      break
    }
    continue
  }
  q.push([x + 1, y, depth + 1])
  q.push([x - 1, y, depth + 1])
  q.push([x , y + 1, depth + 1])
  q.push([x , y - 1, depth + 1])
}
console.log(flag ? "YES" : "NO")
// 정답
let lineCount = 0
rl.on("line", function(line) {
	lineCount++
	if(lineCount === 1) return
	const [X,Y,time] = line.split(" ").map(Number)
  const distance = Math.abs(X) + Math.abs(Y)
  const isPossible = time >= distance && ((time - distance) % 2 === 0)
	console.log(isPossible ? "YES" : "NO")
})

// 소금물의 농도 구하기
const [N, M] = line.split(" ").map(Number)
const salt = N * 7 / 100
console.log((salt / (N + M) * 100).toFixed(3).slice(0, -1))


// [KOI 2017] 딱지놀이
// 마지막 공백까지 ㅋㅋ;;
let rl = readline.createInterface({ input: process.stdin });
let lineCount = 0
let A = []
let B = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) continue;
  const card = line.split(" ").map(Number).slice(1).sort((a,b) => b - a)
  if(lineCount % 2 === 0) A.push(card)
  else B.push(card)
}

for(let i = 0 ; i < A.length; i++){
  const a = A[i]
  const b = B[i]
  const max = Math.max(a.length , b.length);
  let isDraw = true
  for(let j = 0 ; j < max; j++){
    const aValue = a[j] || 0
    const bValue = b[j] || 0
    if(aValue === bValue) continue

    if(aValue > bValue) {
      console.log("A")
    } else {
      console.log("B")
    }
    isDraw = false
    break;

  }
  if(isDraw) console.log("D")
}
console.log("")

// 장마
let lineCount = 0
let rains = []
let houses = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) continue
  const input = line.split(" ").map(Number)
  if(lineCount === 2) {
    houses = input
  } else {
    rains.push(input)
  }
}
// 물 빼는게 집보다 낮아질 수 없음
const n = houses.length
const twodays = new Array(n).fill(0)

for(let day = 1; day <= rains.length; day++){
  for(let i = 0; i < n; i++) {
    twodays[i] = twodays[i] - 1 > 0 ? twodays[i] - 1 : 0
  }
  const [start, end] = rains[day - 1]
  for(let i = start - 1;  i < end; i++){
    houses[i] += 1
    twodays[i] = 3
  }
  if(day % 3 === 0){
      for(let i = 0 ; i < n; i++){
        if(twodays[i] > 0) houses[i] -= 1
      }
  }
}
console.log(houses.join(" "))

// 계수기 만들기
// https://velog.io/@chocopi21221/%EA%B5%AC%EB%A6%84-LEVEL-%EA%B3%84%EC%88%98%EA%B8%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-Python
// 참고했다 모듈러 연산으로 하는 방식 생각했는데 값이 안맞네...
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let maxValues = [];
let initialValues = [];

rl.on("line", function (line) {
  lineCount++;
  if (lineCount === 1) {
    return;
  }
  const inputs = line.split(" ").map(Number);
  if (lineCount === 2) {
    maxValues = inputs;
    return;
  }
  if (lineCount === 3) {
    initialValues = inputs;
    return;
  }

  const n = maxValues.length;
  let k = inputs[0];

  initialValues.reverse();
  maxValues.reverse();

  const result = [];
  for (let i = 0; i < n; i++) {
    k += initialValues[i];
    result.push(k % (maxValues[i] + 1));
    k = Math.floor(k / (maxValues[i] + 1));
  }
  result.reverse();
  console.log(result.join(""));
  rl.close();
}).on("close", function () {
  process.exit();
});

// 어려운 문제
// digitalRoot는 처음 알았음
const n = Number(line);
const dp = new Array(n + 1).fill(1n);
for (let i = 2; i < n + 1; i++) {
  dp[i] = (BigInt(i) * dp[i - 1])
}
if(dp[n] > 9){
  const digitalRoot = 1n + (dp[n] - 1n) % 9n
  console.log(digitalRoot.toString())
} else {
  console.log(dp[n].toString());
}


// 단풍나무
// 1트 이게 위 문제들보다 쉬운 듯...
let lineCount = 0
const matrix = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) continue
  matrix.push(line.split(" ").map(Number))
}
const n = matrix.length
let days = 0
while (true) {
  const arr = []
  for(let i = 0; i < n;i++){
    for(let j = 0; j < n; j++){
      if(matrix[i][j] > 0){
        let cnt = 0
        if(matrix[i - 1]?.[j] === 0) cnt++
        if(matrix[i + 1]?.[j] === 0) cnt++
        if(matrix[i]?.[j - 1] === 0) cnt++
        if(matrix[i]?.[j + 1] === 0) cnt++
        if(cnt > 0) arr.push([i,j, cnt])
      }
    }
  }
  for(let k = 0; k < arr.length; k++){
    const [i, j ,cnt] = arr[k]
    matrix[i][j] = Math.max(matrix[i][j] - cnt , 0)
  }
  if(arr.length === 0) break
  days++
}
console.log(days)
```

### 자료 구조

```javascript
// 0커플
lineCount++
if(lineCount === 1) continue

const obj = line.split(" ").map(Number).reduce((acc,cur) => {
  const key = Math.abs(cur)
  if(acc[key]) acc[key] += cur
  else acc[key] = cur
  return acc
} , {})

const ans = Object.values(obj).reduce((acc,cur) => acc + cur)
console.log(ans);

// 블록 게임
let lineCount = 0
let n = 0
let types = ""
let scores = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) n = Number(line)
  if(lineCount === 2) types = line
  if(lineCount === 3) {
    scores = line.split(" ").map(Number)
    rl.close()
  }
}
const stack = [[0,0,1]]
const pointMap = new Map()
pointMap.set(`0,0`, true)

for(let i = 0; i < n; i++){
  const lastPoint = stack[stack.length - 1].slice(0, 2)
  const type = types[i]

  if(type === "L") lastPoint[0] -= 1
  if(type === "R") lastPoint[0] += 1
  if(type === "U") lastPoint[1] += 1
  if(type === "D") lastPoint[1] -= 1
  const nextKey = lastPoint.join(",")


  while (pointMap.has(nextKey) && stack.length > 0 ) {
    const last = stack.pop()
    const lastKey = last.slice(0,2).join(",")
    pointMap.delete(lastKey)
  }

  lastPoint.push(scores[i])
  stack.push(lastPoint)
  pointMap.set(nextKey,true)
}
const total = stack.reduce((acc,cur) =>  acc + cur[2], 0)
console.log(total)

// ADAS 시스템
// 우선순위 큐 문제로 패스
// https://level.goorm.io/exam/152116/%ED%98%84%EB%8C%80%EB%AA%A8%EB%B9%84%EC%8A%A4-%EC%98%88%EC%84%A0-adas-%EC%8B%9C%EC%8A%A4%ED%85%9C/quiz/1


// 불이야!!
// 구현한 코드 하나의 테케에서 타임아웃이 났다, set으로 처리한건데도 안되나...
const readline = require('readline');
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount = 0
	let C = 0
	const matrix = []
	for await (const line of rl) {
		lineCount++
		if(lineCount === 1){
			C = line.split(" ").map(Number)[1]
			continue
		}
		matrix.push(line.split(""))
		if(lineCount - 1 === C) rl.close();
	}
	const N = matrix.length
	let time = 0
	let flag = true
	outer: while (true) {
		const nextFirePoints = new Set()
		// 불 찾기
		for(let i = 0; i < N; i++){
			for(let j =  0 ; j < N; j++){
				if(matrix[i][j] === "@"){
					if(matrix[i + 1]?.[j] === "&") break outer;
					if(matrix[i - 1]?.[j] === "&") break outer;
					if(matrix[i]?.[j + 1] === "&") break outer;
					if(matrix[i]?.[j - 1] === "&") break outer;

					if(matrix[i + 1]?.[j] === ".") nextFirePoints.add(`${i + 1},${j}`);
					if(matrix[i - 1]?.[j] === ".") nextFirePoints.add(`${i - 1},${j}`);
					if(matrix[i]?.[j + 1] === ".") nextFirePoints.add(`${i},${j + 1}`);
					if(matrix[i]?.[j - 1] === ".") nextFirePoints.add(`${i},${j - 1}`);
				}
			}
		}
		// 더이상 번질 곳 없음
		if(nextFirePoints.size === 0){
			flag = false
			break
		}
		for(let point of nextFirePoints){
			const [i,j] = point.split(",")
			matrix[i][j] = "@"
		}
		time++
	}
	console.log(flag ? time : - 1)
})();
// bfs 형식으로 변경해도 10에서 타임아웃 발생
const readline = require('readline');
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount = 0
	let C = 0
	const matrix = []
	for await (const line of rl) {
		lineCount++
		if(lineCount === 1){
			C = line.split(" ").map(Number)[1]
			continue
		}
		matrix.push(line.split(""))
		if(lineCount - 1 === C) rl.close();
	}
	const N = matrix.length
	let time = 0
	let flag = true
	const nextFirePoints = []
	for(let i = 0; i < N; i++){
			for(let j =  0 ; j < N; j++){
				if(matrix[i][j] === "@") nextFirePoints.push([i, j, 0])
			}
	}

	const dy = [1,0,-1,0]
	const dx = [0,1,0,-1]

	outer: while (nextFirePoints.length > 0) {
		const [y, x, time] = nextFirePoints.shift()

		for(let k = 0; k < 4; k++){
			const ny = y + dy[k]
			const nx = x + dx[k]

			if(0 > ny || ny >= N || 0 > nx || nx >= N) continue
			if(matrix[ny][nx] === "&") {
				flag = false
				console.log(time)
				break outer;
			}
			if(matrix[ny][nx] === "."){
				matrix[ny][nx] = "@"
				nextFirePoints.push([ny, nx, time + 1])
			}
		}
	}

	if(flag){
		console.log(-1)
	}
})();

// https://1119wj.tistory.com/17
// 구름이가 불을 찾도록 해서 타임초과 통과했는데
// 실험실이 정방향이라고 착각해서 헤맸다...
const readline = require('readline');
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount = 0
  let N, M;
	const matrix = []
	for await (const line of rl) {
		lineCount++
		if(lineCount === 1){
      [N, M] = line.split(" ").map(Number);
			continue
		}
		matrix.push(line.split(""))
	}

  let ans = -1
	const q = []
	const isVisited = Array.from({length:N} , () => new Array(M).fill(0))

	for(let i = 0; i < N; i++){
			for(let j =  0 ; j < M; j++){
				if(matrix[i][j] === "&") {
          q.push([i, j])
					isVisited[i][j] = 1
          break
        }
			}
	}

	const dy = [1,0,-1,0]
	const dx = [0,1,0,-1]

	outer: while (q.length > 0) {
		const [y, x] = q.shift()

		for(let k = 0; k < 4; k++){
			const ny = y + dy[k]
			const nx = x + dx[k]

			if(0 > ny || ny >= N || 0 > nx || nx >= M) continue
			if(matrix[ny][nx] === "@") {
				ans = isVisited[y][x] - 1
				break outer;
			}
			if(matrix[ny][nx] === "." && isVisited[ny][nx] === 0){
				isVisited[ny][nx] = isVisited[y][x] + 1
				q.push([ny, nx])
			}
		}
	}
		console.log(ans)
})();
```

### DP

```javascript
// 거리두기
// https://kwang2134.tistory.com/1
// 풀이 + 점화식 보고 구현...
for await (const line of rl) {
  const N = Number(line);
  const MOD = 100_000_007;
  // 0 - 0
  // 1 - 1
  // 2 - 2
  // 3 - 3
  // 4 - 1, 3
  const dp = Array.from({ length: N }, () => new Array(5).fill(1));
  for (let i = 1; i < N; i++) {
    dp[i][0] =
      (dp[i - 1][0] +
        dp[i - 1][1] +
        dp[i - 1][2] +
        dp[i - 1][3] +
        dp[i - 1][4]) %
      MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2] + dp[i - 1][3]) % MOD;
    dp[i][2] =
      (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][3] + dp[i - 1][4]) % MOD;
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
    dp[i][4] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
  }
  console.log(dp[N - 1].reduce((acc, cur) => (acc + cur) % MOD, 0));
  rl.close();
}

process.exit();

// 경쟁 배타의 원리 제출 수 보고 패스

// 징검다리 건너기
// 의외로 한큐에 풀림
let lineCount = 0;
let stones = [];
for await (const line of rl) {
  lineCount++;
  if (lineCount === 1) continue;
  stones = line.split(" ").map(Number);
  rl.close();
}
const n = stones.length;
const dp = new Array(n).fill(0);
if (n < 2) {
  console.log(0);
  process.exit();
}
dp[0] = stones[0];
dp[1] = stones[1];
dp[2] = stones[2];

for (let i = 3; i < n; i++) {
  dp[i] = stones[i] + Math.min(dp[i - 1], dp[i - 2], dp[i - 3]);
}

console.log(Math.min(...dp.slice(n - 3, n)));

// 인덕션 제출 수 보고 패스
```

### 탐색

```javascript
// 개미 집합의 지름
// 거의 2중 반복으로 풀고, 개선한 코드
let N, D;
let ants = [];
let lineCount = 0;
for await (const line of rl) {
  lineCount++;
  const input = line.split(" ").map(Number);
  if (lineCount === 1) {
    [N, D] = input;
    continue;
  }
  ants = input;
  ants.sort((a, b) => a - b);

  let maxRange = 0;
  let left = 0;
  for (let right = 1; right < N; right++) {
    while (ants[right] - ants[left] > D) {
      left++;
    }
    maxRange = Math.max(maxRange, right - left + 1);
  }
  console.log(N - maxRange);
  rl.close();
}

// 동전 퍼즐
// 새로보는 유형의 문제인데, 봐도 이해가 안되서 패스
// https://wnsdlfkrhqnffjwnj.tistory.com/133

// 심리적 거리감
// 구현을 80%는 하고 마무리는 못한...
let N, M, K;
let bridges = [];
let lineCount = 0;
for await (const line of rl) {
  lineCount++;
  const input = line.split(" ").map(Number);
  if (lineCount === 1) {
    [N, M, K] = input;
    continue;
  }
  bridges.push(input);
  if (lineCount === M + 1) rl.close();
}

const graph = Array.from({ length: N + 1 }, () => new Array());
const visited = Array(N + 1).fill(false);
const dist = Array(N + 1).fill(Infinity);
const q = [[K, 0]];
visited[K] = true;
dist[K] = 0;
bridges.forEach(([start, end]) => {
  graph[start].push(end);
});

while (q.length > 0) {
  const [node, d] = q.shift();
  for (let next of graph[node]) {
    if (visited[next]) continue;
    visited[next] = true;
    dist[next] = d + 1;
    q.push([next, d + 1]);
  }
}

let maxGap = -1;
let idx = -1;

for (let i = 1; i <= N; i++) {
  if (i === K || dist[i] === Infinity) continue;

  const gap = dist[i] + Math.abs(K - i);
  if (gap > maxGap || (gap === maxGap && i > idx)) {
    maxGap = gap;
    idx = i;
  }
}
console.log(idx);
```

## 기초 트레이닝

```javascript
// 정수의 길이
console.log(line.toString().length);

// 대소문자 바꾸기
const modified = line
  .split("")
  .map((str) => {
    const code = str.charCodeAt();
    const newCode = code > 91 ? code - 32 : code + 32;
    return String.fromCharCode(newCode);
  })
  .join("");

// A + B (2)
const num = line
  .split(" ")
  .reduce((acc, cur) => acc + Number(cur), 0)
  .toFixed(6);

// A + B
const num = line.split(" ").reduce((acc, cur) => acc + Number(cur), 0);

// 큰 팩토리얼
const MOD = 1000000007;
const n = Number(line);
const dp = new Array(n + 1).fill(1);
for (let i = 2; i < n + 1; i++) {
  dp[i] = (i * dp[i - 1]) % MOD;
}
console.log(dp[n]);

// 숫자 제거 배열
let lineCount = 0;
let k = "";
for await (const line of rl) {
  lineCount++;
  const list = line.split(" ");
  if (lineCount === 1) {
    k = list.pop();
    continue;
  }
  const ans = list.filter((text) => !text.includes(k)).length;
  console.log(ans);
  rl.close();
}

// 구름 아이돌
lineCount++;
if(lineCount === 1) continue;
const ans = line
  .split(" ")
  .map((score, idx) => [idx + 1, Number(score)])
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3)
  .map((v) => v[0])
  .join(" ");
console.log(ans);

// 8진수 계산기
lineCount++;
if(lineCount === 1) continue;
const total = line.split(" ").reduce((acc,cur) => acc + Number(cur),  0)
console.log(total.toString(8));
// 직접 구하기
// 나머지를 역으로 더하고, 계속 나눠주면 됌
let total = line.split(" ").reduce((acc,cur) => acc + Number(cur),  0)
let ans = ""
while(total > 0){
  ans = (total % 8).toString() + ans;
  total = Math.floor(total / 8);
}
console.log(ans);

// 구름스퀘어
let lineCount = 0;
const events = [];

for await (const line of rl) {
  lineCount++;
  if (lineCount === 1) continue;
  const event = line.split(" ").map(Number);
  events.push(event);
}

rl.close();
events.sort((a, b) => a[1] - b[1]);
const ans = events.reduce(
  (acc, event) => {
    if (event[0] >= acc[0]) {
      acc[0] = event[1] + 1
      acc[1]++;
    }
    return acc;
  },
  [0, 0]
)[1];

console.log(ans);

// 거스름돈
const coins = [40,20,10,5,1]
let count = 0
let left = 0
for await (const line of rl) {
  left = Number(line);
  rl.close();
}
for(let i = 0; i < coins.length; i++){
  const coin = coins[i]
  if(left >= coin){
    count += Math.floor(left / coin)
    left = left % coin
  }
  if(left === 0) break;
}
console.log(count);

// 수열
let n = 0
for await (const line of rl) {
  n = Number(line);
  rl.close();
}
const MOD = 1000000007
const dp = new Array(n + 1).fill(0)
dp[2] = 1
for(let i = 3; i < n + 1; i++){
  dp[i] = (dp[i-1] + dp[i-2]) % MOD
}
console.log(dp[n])

// 카드 모으기
let rl = readline.createInterface({ input: process.stdin });
const cards = []
let lineCount = 0
let k = 0
for await (const line of rl) {
  if(++lineCount === 1) {
    k = Number(line.split(" ")[0])
    continue
  }
  cards.push(Number(line))
}
rl.close();
const hand = new Set();
let ans = -1
for(let i = 0; i < cards.length; i++){
  const card = cards[i]
  hand.add(card);
  if(hand.size === k){
    ans = i + 1;
    break;
  }
}
console.log(ans);
process.exit();
// rl.close 때문에 오답인데 착각해서 검색해서 구현한 슬라이딩 윈도우로 최소 카드 수 구하는 로직
const readline = require('readline');
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const cards = []
	let lineCount = 0
	let k = 0
	for await (const line of rl) {
		if(++lineCount === 1) {
			k = Number(line.split(" ")[0])
			continue
		}
		cards.push(Number(line))
		rl.close();
	}
	const hand = new Map();
	let ans = Number.MAX_SAFE_INTEGER;

	for (let left = 0, right = 0; right < cards.length; right++){
		const card = cards[right];
		hand.set(card, hand.has(card) ? hand.get(card) + 1 : 1);

		while(hand.size === k && left <= right){
      ans = Math.min(ans, right - left + 1);
			const removeCard = cards[left];
			const removeCardCnt = hand.get(removeCard);

			if(removeCardCnt > 1){
				hand.set(removeCard, removeCardCnt - 1);
			} else {
        hand.delete(removeCard);
			}
			left++
		}
	}
	console.log(ans === Number.MAX_SAFE_INTEGER  ? -1 : ans);
	process.exit();
})();


// 숫자 배열
let n = 0
for await (const line of rl) {
  n = Number(line)
}
rl.close();
let str = new Array(n ** 2).fill(1).map((v,i) => v + i).reduce((acc, cur, i) => {
  const val = (i + 1) % n
  if(val === 0){
    return acc + " " + cur + '\n'
  }
  if(val === 1){
    return acc + cur
  }
  return acc + " " + cur
}, "")
console.log(str.trim())

// 단어 필터
let lineCount = 0
let filter = ""
let target = ""
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) {
    continue;
  }
  if(lineCount === 2){
    filter = line
    continue;
  }
  target = line;
}
rl.close();
let last = target
while (true) {
  const tmp = last.split(filter).join("")
  if(last === tmp){
    break;
  }
  last = tmp
}
console.log(last || "EMPTY")

// 0 채우기
let lineCount = 0
const matrix = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) continue
  matrix.push(line.split(" ").map(Number))
}
rl.close();
const m = matrix.length;
const n = matrix[0].length
const point = [0, 0]
for(let i = 0; i < m; i++){
  for(let j = 0 ; j < n; j++){
    if(matrix[i][j] === 0){
      point[0] = i
      point[1] = j
      break;
    }
  }
}
const [x,y] = point
let ans = 0;
for(let i = 0;  i < m ; i++){
  ans += matrix[i][y]
}
for(let j = 0;  j < n ; j++){
  ans += matrix[x][j]
}
console.log(ans)

// 큰 수식 찾기
let input = ""
for await (const line of rl) {
  input = line
}
rl.close();
const getLogic = (str) => {
  const operators = ["+","-","*"]
  const arr = []
  let tmp = ""

  for(let i = 0; i < str.length; i++){
    const char = str[i]
    if(operators.includes(char)){
      arr.push(tmp, char)
      tmp = ""
    } else {
      tmp += char
    }
  }
  arr.push(tmp)
  return arr
}

const finishMul = (arr) => {
  let idx = -1
  for(let i = 0; i < arr.length; i++){
    const char = arr[i]
    if(char === "*") {
      idx = i;
      break;
    }
  };
  if(idx === -1) return
  const mul = Number(arr[idx - 1]) * Number(arr[idx + 1])
  arr.splice(idx-1, 3, mul)
  finishMul(arr)
}
const calculate = (arr) => {
  while (arr.length > 1) {
    const isPlus = arr[1] === "+"
    const num1 = Number(arr[0])
    const num2 = Number(arr[2])
    const num = isPlus ? num1 + num2 : num1 - num2
    arr.splice(0, 3, num)
  }
}
const [left, right] = input.split(" ")
const leftLogic = getLogic(left)
finishMul(leftLogic)
calculate(leftLogic)
const rightLogic = getLogic(right)
finishMul(rightLogic)
calculate(rightLogic)
const leftValue = Number(leftLogic[0])
const rightValue = Number(rightLogic[0])
console.log(leftValue > rightValue ? leftValue : rightValue)

// M배 배열
// 통과 못해서 댓글보니, process.exit(); 를 지워야 통과 가능한 이상한 문제
let lineCount = 0
let m = 0
for await (const line of rl) {
  lineCount++;
  if(lineCount === 1) {
    m = Number(line.split(" ")[1])
    continue
  }
  console.log(line.split(" ").map(Number).map(v => v % m === 0 ? v : v * m).join(" "))
}
rl.close();

// Queue
// 테케 통과 못하더니 12 ~ 15
// process.exit(); 를 지우니 통과된다.
let lineCount = 0
let size = 0
let orders = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1){
    size = Number(line.split(" ")[1])
    continue
  }
  orders.push(line)
}
rl.close();
const outputs = []
const q = []
for(let order of orders){
  const [o, v] = order.split(" ")
  if(o === "push"){
    if(q.length < size){
      q.push(v)
    } else {
      outputs.push("Overflow")
    }
  }
  if(o === "pop"){
    outputs.push(q.shift() || "Underflow")
  }
}
console.log(outputs.join("\n"))

// 밀도 정렬
let lineCount = 0
let materials = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) continue
  materials.push(line.split(" ").map(Number))
}
const ans = materials.map(([무게, 부피], 순서) => [무게 / 부피, 무게, 순서 + 1]).sort((a,b) => {
  if(a[0] === b[0]){
    if(a[1] === b[1]){
      return a[2] - b[2]
    }
    return b[1] - a[1]
  }
  return b[0] - a[0]
})[0][2];
console.log(ans)

// 연속 점수
let lineCount = 0
for await (const line of rl) {
  lineCount++
  if(lineCount === 1) continue;
  const nums = line.split(" ").map(Number)
  let total = nums[0]
  let acc = nums[0]
  let last = nums[0]
  for(let i = 1 ; i < nums.length; i++){
    const now = nums[i]
    if(now - last === 1){
      acc += now
    } else {
      acc = now
    }
    total = Math.max(acc, total)
    last = now
  }
  console.log(total)
  rl.close();
}

// 보드 게임
// 처음에 재귀적으로 풀려고 했는데, 문제 요구사항을 보면 콜스텍이 터짐(콜스텍 사이즈 10000 ~ 12000)
const recursive = (point) => {
  if(n < point) return
  cells[point] = (cells[point] + 1) % MOD
  recursive(point + 1)
  recursive(point + 3)
}
recursive(0)
// 정답
let n = 0
for await (const line of rl) {
  n = Number(line)
  rl.close();
}
const MOD = 1_000_000_007
const cells = new Array(n + 1).fill(0)
cells[0] = 1

for(let i = 0; i <= n; i++){
  if(i + 1 <= n) cells[i + 1] = (cells[i + 1] + cells[i]) % MOD
  if(i + 3 <= n) cells[i + 3] = (cells[i + 3] + cells[i]) % MOD
}
console.log(cells[n])

// 뭉친 K
// 재귀는 스택오버플로우 나서 큐 형식으로 변경
let lineCount = 0
let point = [0,0]
const matrix = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1)continue
  if(lineCount === 2){
    point = line.split(" ").map(Number)
    continue
  }
  matrix.push(line.split(" ").map(Number))
}
rl.close();
const target = matrix[point[0] - 1][point[1] - 1]
const m = matrix.length
const n = matrix[0].length
const isVisited = Array.from({length: m}, () => new Array(n).fill(false))
let ans = 0
const check = (startY, startX) => {
  let count = 0
  const q = [[startY, startX]]
  while (q.length > 0) {
    const [y,x] = q.shift()
    if(y < 0 || y >= m || x < 0 || x >= n) continue
    if(isVisited[y][x] || matrix[y][x] !== target) continue
    count++
    isVisited[y][x] = true
    q.push([y + 1, x])
    q.push([y - 1, x])
    q.push([y, x + 1])
    q.push([y, x - 1])
  }
  ans = Math.max(ans, count)
}

for(let y = 0; y < m; y++){
  for(let x = 0 ; x < n ; x++){
    if(matrix[y][x] === target) check(y, x)
  }
}
console.log(ans)

// Stack
// 위 queue 문제에서 빼내는 부분만 수정 - 왜 난이도가 다를까?
let lineCount = 0
let size = 0
let orders = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1){
    size = Number(line.split(" ")[1])
    continue
  }
  orders.push(line)
}
rl.close();
const outputs = []
const q = []
for(let order of orders){
  const [o, v] = order.split(" ")
  if(o === "push"){
    if(q.length < size){
      q.push(v)
    } else {
      outputs.push("Overflow")
    }
  }
  if(o === "pop"){
    outputs.push(q.pop() || "Underflow")
  }
}
console.log(outputs.join("\n"))

// RGB 주차장
// MOD 값이 다를 꺼라 생각 못해 헤맸다...
let n = 0
for await (const line of rl) {
  n = Number(line)
}
rl.close();
const MOD = 100_000_007;
let ans = 3
for(let i = 1; i < n ; i++){
  ans = (ans * 2) % MOD;
}
console.log(ans)

// 규칙 숫자 야구
// 8, 18 테스트 케이스 통과 안되어 질답 보고 알았다.
// 첫 번째 자리와 두 번째 자리도 같이 옮겨져야 합니다. 그래서 칸을 옮긴 뒤에는 2498 → 8249가 되어야 한다는데 그러면 strike인 부분도 움직이는거 아닌가 싶긴하지만...
// 결국 8번 통과 못하고 패스
const readline = require('readline');

(async () => {
let rl = readline.createInterface({ input: process.stdin });
let lineCount = 0
let answer = []
let input = []
for await (const line of rl) {
  lineCount++
  if(lineCount === 1){
    answer = line.split("").map(Number)
  }
  if(lineCount === 2){
    input = line.split("").map(Number)
  }
}
rl.close();
const state = []
let count = 0
const valid = () => {
  for(let i = 0 ; i < 4; i++){
    if(answer[i] === input[i]) state[i] = 2
    else if(answer.includes(input[i])) state[i] = 1
    else state[i] = 0
  }
}
while (true) {
  count++
  // 1
  valid()
  if(state.every((v) => v === 2)) break;
  // 2
  for(let i = 0; i < 4; i++){
    if(state[i] === 0) {
      const others = [...input.slice(0,i), ...input.slice(i + 1)]
      let next = (input[i] + 1) % 10
      while (others.includes(next)) {
        next = (next + 1) % 10
      }
      input[i] = next
    }
  }

  valid()
  // 3
  for(let i = 0; i < 4; i++){
    // 회전은 회차별 한번만 수행
    if(state[i] === 1){
      let last = input[i]
      let tmp = -1
      // 여기서 인덱스 %로 넘기면 18번까진 통과
      for(let j = i + 1; j < 4; j++){
        if(state[j] === 2) continue
        tmp = last
        last = input[j]
        input[j] = tmp
      }
      if(tmp !== -1){
        input[i] = last
      } else {
        for(let j = 0; j < i; j++){
          if(state[j] === 2) continue
          let tmp = input[i]
          input[i] = input[j]
          input[j] = tmp
          break
        }
      }
      break
    }
  }
}
console.log(count)
})();


```
