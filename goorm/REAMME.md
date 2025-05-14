# 구름

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
// 뭉친 K
// Stack
// RGB 주차장
// 규칙 숫자 야구
```
