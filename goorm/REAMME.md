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
// 수열
// 카드 모으기
// 숫자 배열
// 단어 필터
// 0 채우기
// 큰 수식 찾기
// M배 배열
// Queue
// 밀도 정렬
// 연속 점수
// 보드 게임
// 뭉친 K
// Stack
// RGB 주차장
// 규칙 숫자 야구
```
