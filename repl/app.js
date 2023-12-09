// 메뉴 리뉴얼
function solution(orders, course) {
    const orderedCountMap = new Map();
    const maxCountMap = new Map();
    const courseSet = new Set(course);
    
    function combination(result, index, str) {
        if (courseSet.has(result.length)) {
            let count = orderedCountMap.get(result) || 0;
            orderedCountMap.set(result, ++count);
            
            const max = maxCountMap.get(result.length) || 0;
            if (max < count) {
                maxCountMap.set(result.length, count);
            }
        }
        
        for (let i = index; i < str.length; i++) {
            combination(result + str[i], i + 1, str);
        }
    }
    
    orders.map(order => order.split("").sort().join(""))
        .forEach(e => combination("", 0, e));
    
    return course
        .map(length => {
            const max = maxCountMap.get(length);
            return Array.from(orderedCountMap)
                .filter(e => 
                    e[0].length === length && e[1] >= 2 && e[1] === max
                )
                .map(e => e[0]);
        })
        .flatMap(e => e)
        .sort();
}

테스트
셔틀버스
const change = (time) => {
    let hour = String(Math.floor(time / 60))
    let mins = String(time % 60)
    if (hour.length === 1) {
        hour = '0' + hour
    }
    if (mins.length === 1) {
        mins = '0' + mins
    }
    return `${hour}:${mins}`
}

1.
function solution(n, record) {
    const server = Array.from({length: n+1}, () => new Array(5).fill(0))
    for (let val of record) {
        const arr = val.split(' ')
        if (server[arr[0]].includes(arr[1])) {
            continue
        }
        else {
            server[arr[0]].shift()
            server[arr[0]].push(arr[1])
        }
    }
    const box = []
    for (let i = 1; i < server.length; i++){
        for (let j = 0; j < server[i].length; j++){
            if(server[i][j] !== 0) box.push(server[i][j])
        }
    }
    return box
}
2.
function solution(m, v) {
    const board = []
    board.push(new Array(m).fill(0).fill(1, 0, v[0]))
    for (let i = 1; i < v.length; i++) {
        let box = new Array(m).fill(0), check = true
        for (let j = board.length - 1; j >= 0; j--){
            console.log(board)
            if(m - board[j].filter(v => v).length > v[i]) {
                if(board[j+1]) {
                    board[j+1].fill(1, board[j+1].indexOf(0), board[j+1].indexOf(0) + v[i])
                    check = false
                    break
                }
            }
            if(j === 0) {
                if(m - board[j].filter(v => v).length >= v[i]){
                    board[j].fill(1,board[j].indexOf(0),board[j].indexOf(0)+v[i])
                    check = false
                    break
                }
            }
        }
        if(check) {
            box.fill(1,0,v[i])
            board.push(box)
        }
    }
    return board.length
}
3.
function solution(next_student) {
    const N = next_student.length
    if(N === 0) return 0
    const board = Array.from({length:N+1}, () => new Array)
    let ans = new Array(N+1).fill(0)
    for (let i = 0; i < N; i++){
        board[i+1].push(next_student[i])
    }
    const dfs = (idx,start,check, cnt) => {
        if(!check[board[start]]) {
            ans[idx] = cnt
            return
        }
        check[start] = false
        dfs(idx, board[start], check, cnt+1)
    }
    
    for (let i = 1; i < N+1; i++) {
        let check = new Array(N+1).fill(true).fill(false,0,1)
        dfs(i,i,check, 1)
    }
    const max = Math.max(...ans)
    return ans.lastIndexOf(max)
}


프로그래머즈 JS 공부 시작!!
Lv. 1 연습문제

// 두개 뽑아서 더하기
function solution(numbers) {
    const set = new Set()
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            set.add(numbers[i]+numbers[j])
        }
    }
    return Array.from(set).sort((a,b) => a-b)
}

// 완주하지 못한 선수
const solution = (arr1,arr2) => {
    arr1.sort()
    arr2.sort()
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return arr1[i]
        }
    }
}

// 모의고사
function solution(arr) {
    const p1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let ans = [0,0,0,0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === p1[i % p1.length]) ans[1] += 1
        if(arr[i] === p2[i % p2.length]) ans[2] += 1
        if(arr[i] === p3[i % p3.length]) ans[3] += 1
    }
    const max = Math.max(...ans)
    return ans.map((val, idx) => {
        if(val === max){
            return idx
        }
    }).filter(x => x != null)
}

// 체육복
function solution(n, a1, a2) {
    const arr1 = a1.filter(x => (!a2.includes(x))).sort((a,b) => a - b)
    const arr2 = a2.filter(x => (!a1.includes(x))).sort((a,b) => a - b)
    
    for(let i = 0; i < arr2.length; i++){
        if(arr1.includes(arr2[i]-1)){
            arr1.splice(arr1.indexOf(arr2[i]-1),1)
        }
        else if(arr1.includes(arr2[i]+1)){
            arr1.splice(arr1.indexOf(arr2[i]+1),1)
        }
    }
    return n - arr1.length
}

K번째 수
function solution(array, commands) {
    const ans = []
    for(let [a,b,c] of commands){
        let tmp = array.slice(a - 1, b).sort((i, j) => i - j)
        ans.push(tmp[c-1])
    }
    return ans
}

2016년
function solution(a, b) {
    const date = new Date(2016, (a - 1), b)
    return date.toString()
}

3진법 뒤집기
function solution(n) {
    return parseInt(
           n.toString(3)
            .split("")
            .reverse()
            .join(""), 3)
}

가운데 글자 가져오기
function solution(s) {
    return s.length % 2 === 1 ? s.substr(Math.floor(s.length / 2),1) 
                              : s.substr(Math.floor(s.length / 2)-1,2) 
}

같은 숫자는 싫어
function solution(arr)
{
    return arr.filter((v, i) => v !== arr[i-1])
}

나누어 떨어지는 숫자 배열
function solution(arr, d) {
    arr = arr.filter(v => v % d === 0).sort((a, b) => a - b)
    return arr.length === 0 ? [-1] : arr
}

두 정수 사이의 합
function solution(a, b, s = 0) {
    const big = Math.max(a,b), small = Math.min(a,b)
    let ans = 0
    for(let i = small; i <= big; i++){
        ans += i
    }
    return ans
}

문자열 내 마음대로 정하기
function solution(strings, n) {
    return strings.map(v => v[n]+v).sort().map(v => v.substring(1))
}

문자열 내 p와 y의 개수
function solution(s){
    s = s.toUpperCase().split("")
    const P = s.filter(v => v === "P")
    const Y = s.filter(v => v === "Y")
    return P.length === Y.length
    
}

문자열 내림차순으로 배치하기
function solution(s) {
    return s.split("").sort().reverse().join("")
}

문자열 다루기 기본
function solution(s) {
    if(s.length === 4 || s.length === 6){
        if(Number.isInteger(Number(s))) return true
    }
    return false
}

서울에서 김서방 찾기
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

소수 찾기
function solution(n) {
    const dp = new Array(n+1).fill(true).fill(false, 0, 2)
    for(let i = 2; i < n ** 0.5 + 1; i++){
        if(dp[i]){
            for(let j = i*2; j <= n; j += i){
                dp[j] = false
            }
        }
    }
    return dp.filter(x => x === true).length
}

수박수박
function solution(n) {
    return "수박".repeat(Math.ceil(n/2)).substring(0,n)
}

문자열을 정수로 바꾸기
function solution(s) {
    return Number(s)
}

내적 
function solution(a, b) {
    return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0)
}

시저 암호
function solution(s, n) {
   var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}

약수의 합
function solution(n) {
    let total = 0
    for(let i = 1; i <= n; i++){
        if(n % i === 0) total += i
    }
    return total
}

이상한 문자 만들기
function solution(s){
    return s.split(' ')
            .map(v => v.split('')
                 .map((val, key) => key % 2 === 0 ? val.toUpperCase() : val.toLowerCase())
                 .join(''))
            .join(' ')
}

자릿수 더하기
function solution(n) 
{
    return String(n).split("").reduce((acc,cur) => acc + Number(cur), 0)
}

자연수 뒤집어 배열로 만들기
function solution(n) {
    return String(n).split("").reverse().map(v => Number(v))
}

정수 내림차순으로 배치하기
function solution(n) {
    return Number(String(n).split("").sort((a,b) => b-a).join(""))
}

정수 제곱근 판별
function solution(n) {
    return Number(n ** 0.5) === parseInt(n ** 0.5) ? (n ** 0.5 + 1)** 2 : -1   
}

제일 작은 수 제거하기
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr.length !== 0 ? arr : [-1]   
}

짝수와 홀수
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

최대공약수와 최소공배수
function solution(n, m){
    return [GCD(n,m), n*m / GCD(n,m)]
}
const GCD = (n, m) => {
    if(m === 0) return n
    return GCD(m, n % m)
}

콜라츠 추측
function solution(num) {
    let cnt = 0
    while(cnt < 500 && num !== 1){
        if(num % 2 === 0) num = num / 2
        else num = num * 3 + 1
        cnt++
    }
    return cnt === 500 ? -1 : cnt
}

평균 구하기
function solution(arr) {
    return arr.reduce((acc,cur) => acc+cur) / arr.length
}

하샤드 수
function solution(x) {
    const N = String(x).split("").reduce((acc, cur) => Number(acc) + Number(cur))
    return (x % N === 0)    
}

핸드폰 번호 가리기
function solution(phone_number) {
    return phone_number.split("").fill("*", 0, -4).join("")
}

행렬의 덧셈
function solution(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[0].length; j++){
            arr1[i][j] += arr2[i][j]
        }
    }
    return arr1
}

x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    return Array.from({length:n}, ((val, idx) => (idx + 1) * x))
}

직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ") 
    for(let i = 0; i < m; i++){
        console.log("*".repeat(n))
    }
});

예산
function solution(d, b) {
    let cnt = 0 ,total = 0
    d.sort((a,b) => a - b)
    for(let i = 0; i < d.length; i++){
        if(total + d[i]  <= b){
            total += d[i]
            cnt++
        } else break
    }
    return cnt
}
Lv. 1 카카오 문제

크레인 인형뽑기
function solution(board, moves) {
    const stack = []
    let cnt = 0
    for(let move of moves){
        for(let i = 0; i < board.length; i++){
            if(board[i][move-1] !== 0){
                if(board[i][move-1] === stack[stack.length - 1]){
                    stack.pop()
                    board[i][move-1] = 0
                    cnt += 2
                    break
                } else {
                    stack.push(board[i][move-1])
                    board[i][move-1] = 0
                    break
                }
            }
        }
    }
    return cnt    
}

키패드 누르기
function solution(numbers, hand) {
    const box ={1 : [0,0], 2 : [0,1], 3 : [0,2], 
                4 : [1,0], 5 : [1,1], 6 : [1,2],
                7 : [2,0], 8 : [2,1], 9 : [2,2],
                11: [3,0], 0 : [3,1], 12: [3,2]}
    let left = box[11], right = box[12], ans = ''
    for(let v of numbers){
        if(v === 1 || v === 4 || v === 7){
            left = box[v]
            ans += 'L'
        }
        else if(v === 3 || v === 6 || v === 9){
            right = box[v]
            ans += 'R'
        }
        else {
            let target    = box[v]
            let leftRange = Math.abs(left[0] - target[0]) + Math.abs(left[1] - target[1])
            let rightRange= Math.abs(right[0]- target[0]) + Math.abs(right[1]- target[1])
            if(leftRange < rightRange){
                left = box[v]
                ans += 'L'
            }
            else if(rightRange < leftRange){
                right = box[v]
                ans += 'R'
            }
            else {
                if(hand === 'left'){
                    left = box[v]
                    ans += 'L'
                }
                else {
                    right = box[v]
                    ans += 'R'
                }
            }
        }
    }
    return ans
}

비밀지도
function solution(n, arr1, arr2) {
    arr1 = arr1.map(v => v.toString(2))
               .map(v => '0'.repeat((n - v.length)) + v)
    arr2 = arr2.map(v => v.toString(2))
               .map(v => '0'.repeat((n - v.length)) + v)
    const ans = Array.from({length:n}, () => new Array(n).fill("#"))
    return ans.map((val, idx1) => val.map((v, idx2)=> {
        if(arr1[idx1][idx2] === '0' && arr2[idx1][idx2] === '0'){
            return ' '
        } else return v
    }).join(""))
}

실패율
function solution(N, stages) {
    const stage = []
    let totalnum = stages.length
    
    for(let i=1; i <= N; i++){
        const num = stages.filter(val => val === i).length
        if(num === 0){
            stage.push({idx:i, ratio:0})
        } else {
            stage.push({idx:i, ratio:(num / totalnum)})
            totalnum -= num
        }
    }
    stage.sort((a,b) => {
        if(b.ratio === a.ratio){
            return a.idx - b.idx
        } else {
            return b.ratio - a.ratio
        }
    })
    return stage.map(val => val.idx)
}

다트 게임
function solution(dartResult) {
    const arr = dartResult.split(""), ans = []
    let tmp =''
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(Number(arr[i]))){
             tmp += arr[i]
        } else {
            let num = Number(tmp)
            tmp = ''
            switch(arr[i]){
                case 'S':
                    ans.push(num**1)
                    break
                case 'D':
                    ans.push(num**2)
                    break
                case 'T':
                    ans.push(num**3)
                    break
                case '*':
                    ans[ans.length-1] *= 2
                    ans[ans.length-2] *= 2
                    break
                case '#':
                    ans[ans.length-1] *= -1
                    break
            }
        }
    }
    return ans.reduce((acc,cur) => acc+cur)
}


Lv 2. 연습문제
// 기능개발
function solution(pro, speeds) {
    const ans = []
    while(pro.length > 0){
        for(let i = 0; i < pro.length; i++){
            pro[i] += speeds[i]
        }
        
        let cnt = 0
        while(pro[0] >= 100){
            pro.shift()
            speeds.shift()
            cnt++
        }
        if(cnt > 0) ans.push(cnt)
    }
    return ans
}
// 다리를 지나는 트럭
function solution(bridge_length, limit, truck) {
    const bridge = new Array(bridge_length).fill(0)
    let time = 0, weightTotal = 0
    while(truck.length > 0){
        time += 1
        weightTotal -= bridge.shift()
        if(weightTotal + truck[0] <= limit){
            let moveTruck = truck.shift()
            weightTotal += moveTruck
            bridge.push(moveTruck)
        }
        else bridge.push(0)
    }
    time += bridge_length
    return time
}

// 124나라의 숫자
function solution(n) {
    const li = ["4","1","2"]
    let ans = ""
    while(n > 0){
        let a = n % 3
        ans = li[a] + ans
        if (a === 0){
             n = Math.floor(n / 3) - 1
        } else {
             n = Math.floor(n / 3)
        }
    }
    return ans
}
function solution(n) {
    return n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

// 프린터
function solution(priorities, location) {
    let cnt = 0
    let idx = location
    while(true){
        let max = Math.max(...priorities)
        let tmp = priorities.shift()
        if(tmp === max){
            if(idx === 0){
                cnt += 1
                return cnt
            } else {
                cnt += 1
                idx -= 1
            }
        }
        else {
            if(idx === 0){
                priorities.push(tmp)
                idx = priorities.length - 1
            } else {
                priorities.push(tmp)
                idx -= 1
            }
        }
    }
}

// 큰 수 만들기
function solution(number, k) {
    const box = []
    number.split("")
    
    for(let val of number){
        while(k > 0 && box[box.length-1] < val){
            box.pop()
            k--
        }
        box.push(val)
    }
    box.splice(box.length-k,k)
    let ans = box.join("")
    return ans
}

// 조이스틱(이거는 문제가 좀 오류가 있는 듯)
// 테스트 11 탈 
function solution(name) {
    const Alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', N = Alpha.length
    const arr = name.split(""), n = arr.length - 1
    let total = 0
    for(let val of arr){
        total += Math.min(Alpha.indexOf(val), N - Alpha.indexOf(val))
    }
    let left = true, right = true, RightA = 0, LeftA = 0 
    for(let start = 1, end = arr.length-1; start < arr.length; start++, end--){
        if(left && arr[start] === 'A') LeftA++
        else left = false
        if(right && arr[end] === 'A') RightA++
        else right = false
    }
    total += n - Math.max(LeftA, RightA)
    return total
}
// 정답 https://after-newmoon.tistory.com/60 
function solution(name) {
    const arr = [0];

    const answer = [...name].reduce((acc, cur, i)=>{
        if(cur === "A"){
            if(name[i-1]!= "A") {
                arr.push(continuous(name.substring(i))-(i-1));
            }
            return acc + 1;
        }    
        return acc + ascii(name, i) + 1;
    }, 0);
    
    return answer - Math.max(...arr) -1;
}

function ascii(name, i){
    const num = name.charCodeAt(i);
    return (num > 78)? 91 - num : num - 65;
}

function continuous(name){
    let repeat = 0;
    for(let i = 0; i < name.length; i++){
        if(name[i] != "A") break;
        repeat++;
    }
    return repeat;
}

// 소수 찾기
// 순열구하기와 소수구하기가 결합된 문제이다.
function solution(numbers) {
    // 순열 구하기
    const string = numbers.split(""), N = string.length, set = new Set()
    
    const permutation = (arr, k, list) => {
        if (list.length === k) {
            set.add(list.join(''))
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            const nextArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
            permutation(nextArr, k, [...list, arr[i]]);
        }
    }
    
    for(let i = 1; i <= N; i++){
        permutation(string, i, [])
    }
    const ans = Array.from(set)
    
    // 소수 구하기
    const max = Math.max(...ans), Prime = new Array(max+1).fill(true).fill(false, 0, 2)
    for(let i = 2; i < Math.ceil(max ** 0.5); i++){
        if(Prime[i]){
            for(let j = i * 2; j <= max; j += i){
                Prime[j] = false
            }
        }
    }    
    // 정답 구하기
    return ans.filter(v => Prime[v]).length
}

// 이분은 맥스값으로 에스카 체 만듬
// 소수마다 자릿수로 나눠서 filter로 numbers에 있으면 없앰
// length === 0 이면 만들 수 있는 값 cnt++
function solution(numbers) {
    var answer = 0;
    let a = numbers.split('').sort((a,b)=>b-a);
    let N = Number(a.join(''));
    let arr = makePrimeNum(N); 
    for(let i=2; i<=N; i++){
        if(arr[i] == false) continue;
        let temp = i.toString().split('');
        for(let cn of a){
            let idx = temp.indexOf(cn);
            if(idx > -1) temp.splice(idx,1);
            }
        if(temp.length == 0) answer++;
        }
     return answer;
}

// 가장 큰 수
// 아니 PS하는 인간들은 다들 천재 인걸까?
function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return answer[0] === '0' ? '0' : answer;
}

// H-index
function solution(arr) {
    arr.sort((a,b) => a-b)
    const N = arr.length
    for(let i = 0; i < N; i++){
        if(arr[i] >= N - i){
            return N - i
        }
    }
    return 0
}

// 위장
function solution(clothes) {
    const obj = {}
    for(let [name, sort] of clothes){
        obj[sort] = obj[sort] ? obj[sort] + 1 : 1;
    }
    return Object.values(obj).reduce((acc,cur) => acc * (cur + 1), 1) - 1
}

// 구명보트 
// 이중반복문쓰니까 효율성에서 시간초과남 
function solution(people, limit) {
    const wait = people.sort((a, b) => b - a)
    let cnt = 0
    for(let big = 0, small = wait.length-1; big <= small; big++){
        cnt++
        if(wait[big] + wait[small] <= limit) {
            small--
        }
    }
    return cnt
}

// 타겟 넘버
// DFS문제 답 보니까 나도 풀수있는 문제였는데 답보기전엔 감이안오더라;;
function solution(numbers, target) {
    let ans = 0
    let N = numbers.length
    dfs(0, 0);
    
    function dfs(sum, idx){
        if(idx === N){
            if(sum === target){
                ans++
            }
            return
        }
        dfs(sum + numbers[idx], idx+1)
        dfs(sum - numbers[idx], idx+1)
    }
    return ans    
}

// 가장 큰 정사각형 찾기
// 아니 시바 이런 방법론들을 모르는 상태에서 생각해서 테스트를 통과할 수가 있나...??
function solution(board)
{
    const x = board.length
    const y = board[0].length
    
    if(x === 1 && y === 1){
        return 1
    }
    let max = 0
    for(let i = 1; i < x; i++){
        for(let j = 1; j < y; j++){
            if(board[i][j] >= 1){
                board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1
                max = Math.max(max, board[i][j])
            }
        }
    }
    return max**2
}

// 쿼드압축 후 개수 세기
function solution(arr) {
    const ans = [0,0]    
    const solve = (x, y, size) => {
        let start = arr[x][y]
        for(let i = x; i < x + size; i++){
            for(let j = y; j < y + size; j++){
                if(arr[i][j] !== start){
                    solve(x           , y            , size / 2)
                    solve(x           , y + size / 2 , size / 2)
                    solve(x + size / 2, y            , size / 2)
                    solve(x + size / 2, y + size / 2 , size / 2)
                    return
                }
            }
        }
        ans[start] += 1
        return
    }
    solve(0, 0, arr.length)
    return ans
}

// 카펫
// 이거 처음봤을때 도대체 뭔 문젠가 했더만 풀었다 코드는 엉망진창
// 풀이보면 다 똑같이 풀어놨네 어디 학원이 있나..
function solution(brown, yellow) {
    const N = brown + yellow
    let tmp = N ** 0.5
    if(Number.isInteger(tmp)){
        return [tmp,tmp]
    } else {
        let a = Math.ceil(tmp)
        while(true){
            if(N % a === 0 && brown === (a*2 + ((N/a)-2)* 2)){
                return [a, N/a]
            } else {
                a++
            }
        }
    }
}


// 삼각달팽이
// 와 진짜 ㅋㅋㅋ;;; 얼탱이 없네 이런거 어케 푸냐
function solution(n) {
    const arr = Array.from({length:n}, ((val,i) => new Array(i+1).fill(0)))
    let counter = 1, startColumn = 0, endColumn = n-1, startRow = 0, endRow = n-1, cnt = 0;
    while (startColumn <= endColumn && startRow <= endRow){
      //맨왼쪽줄
        for (let i = startRow; i <= endRow; i++){
            arr[i][startColumn] = counter
            counter++
        }
        startRow++
        startColumn++
      //맨아래줄
        for (let i = startColumn; i <= endColumn; i++){
            arr[endRow][i] = counter
            counter++
        }
        endColumn--
        endRow--
      //대각선줄
        for(let i = endRow; i >= startRow; i--){
          arr[i][arr[i].length-1-cnt] = counter
          counter++
        }
        endColumn--
        startRow++
        cnt++
    }
    return arr.flat();
}

// 올바른 괄호
// 간만에 쉬운문제 
function solution(s){
    s.split("")
    const box = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') box.push(s[i])
        else {
            if(box.length === 0) return false
            else box.pop()
        }
    }
    return box.length === 0 ? true : false
}

// 다음 큰 숫자
function solution(n) {
    const N = n.toString(2).split("").filter(v => v === '1').length
    let i = n + 1
    while(true){
        if(N === i.toString(2).split("").filter(v => v === '1').length) return i
        i++
    }
}
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}


// 땅따먹기
// 코드를 JS처럼 짠것 같다 ㅎㅎ
function solution(land) {
    // const dp = Array.from({length: land.length}, ((val, i ) => new Array(land[i].length).fill(0)))
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < land[i].length; j++){
            land[i][j] += Math.max(...land[i-1].filter((val,z) => z !== j))
        }
    }
    return Math.max(...land[land.length-1]);
}

// 숫자의 표현
// 그냥 구현하면 풀림
function solution(n) {
    let cnt = 1
    for(let i = 1; i < n; i++){
        let num = i
        for(let j = i+1; j < n; j++){
            num += j
            if(num === n){
                cnt++
                break
            }
            if(num > n){
                break
            }
        }
    }
    return cnt;
}

// 최댓값과 최소값
function solution(s) {
    s = s.split(" ").map(v => Number(v))
    return `${Math.min(...s)} ${Math.max(...s)}`
}
function solution(s) {
    const arr = s.split(' ');
    return Math.min(...arr)+' '+Math.max(...arr);
}

// 폰켓몬 obj or set
function solution(nums) {
    const obj = {}
    for(let val of nums){
         obj[val] = obj[val] ? obj[val] + 1 : 1   
    }
    return Math.min(nums.length / 2, Object.keys(obj).length)
}

// 행렬곱셈
// N x M * M x K
function solution(arr1, arr2) {
    const ans = Array.from({length:arr1.length}, () => new Array(arr2[0].length).fill(0))
    for(let N = 0; N < arr1.length; N++){
        for(let K = 0; K < arr2[0].length; K++){
            for(let M = 0; M < arr1[0].length; M++){
                ans[N][K] += arr1[N][M] * arr2[M][K]
            }
        }
    }
    return ans
}
// 허허... 아직 이해는 안된다.
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}

// JadenCase 문자열만들기
function solution(s) {
    return s.split(" ")
            .map(v => v.substring(0,1).toUpperCase() + v.substring(1).toLowerCase())
            .join(" ")
}
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

// 이진 변환 반복하기
// 문제를 좀 더 꼼꼼히 읽자
function solution(s) {
    const ans = [0,0];
    let cnt = 0
    while(s !== "1"){
        ans[0] += 1
        s = s.split("").filter(val => {
            if(val === "0"){
                ans[1] +=1
                return false
            }
            return true
        }).join("").length.toString(2)
    }
    return ans
}
//
function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}

// 피보나치 수
// 좀 이해가 안되는게 n번째 피보나치수를 1234567로 나눈 나머지를 반환하는 건데
// for 문안에서 안나누면 틀린다
// int의 범위 때문임 https://programmers.co.kr/questions/11991
function solution(n) {
    const dp = [0,1,1]
    for(let i = 3; i <= n; i++){
        dp.push((dp[i-1] + dp[i-2]) % 1234567)
    }
    return dp[n]
}

// 최솟값 만들기
function solution(A,B){
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    return A.reduce((acc,cur,idx) => acc + cur*B[idx], 0)
}

// 짝지어 제거하기 stack
function solution(s){
    s = s.split('')
    const box = []
    for(let i = 0; i < s.length; i++){
        if (box[box.length-1] === s[i]) box.pop()
        else box.push(s[i])
    }
    return box.length === 0 ? 1 : 0
}

// N개의 최소공배수
function solution(num){
    return num.reduce((acc,cur) => acc*cur / GCD(acc,cur))
}
const GCD = (a,b) => {
    if(b === 0) return a
    return GCD(b, a % b)
}

// 예상 대진표
function solution(n,a,b)
{
    let ans = 0
    while(a !== b){
        ans++
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
    }
    return ans
}


Lv 2. 코테출제문제
// 스킬트리
function solution(skill, skill_trees) {
    skill = skill.split("")
    skill_trees = skill_trees.map(v => v.split("").map(v => skill.includes(v) ? v : '').filter(v => v.length > 0))
    let cnt = skill_trees.length
    for(let i = 0; i < skill_trees.length; i++){
        for(let j = 0; j < skill_trees[i].length; j++){
            if(skill_trees[i][j] != skill[j]){
                cnt--
                break
            }
        }
    }
    return cnt
}

// 멀쩡한 사각형
// 수학공식을 알아야 풀수 있는 문제 이런건 안나올듯
function solution(w, h) {
    const gcd = GCD(w,h)
    // return (w * h) - (w /gcd + h / gcd -1) * gcd
    return w * h - (w + h - gcd(w, h));
}
const GCD = (a, b) => {
    return b ? GCD(b, a%b) : a 
}
// answer = (가로 * 세로) - (w / gcd + h / gcd -1) * 최소공배수
return w * h - (w + h - gcd(w, h));


// 문자열 압축
function solution(s) {
    const ans = []
    for(let i = 1; i < Math.ceil(s.length / 2)+1; i++){
        let arr = [], tmp = '', cnt = 1
        for(let j = 0; j < s.length; j += i){
            if(s.substr(j, i) !== s.substr(j+i, i)){
                if(cnt === 1) tmp += s.substr(j, i)
                else {
                    tmp += `${cnt}${s.substr(j, i)}`
                    cnt = 1
                }
            }
            else {
                cnt++
            }
        }
        ans.push(tmp)
    }
    return Math.min(...ans.map(v => v.length))
}

// 튜플
function solution(s) {
    const ans = []
    s = s.substring(2,s.length-2)
         .split('},{')
         .sort((a,b) => a.length - b.length)
         .map(v => v.split(',').map(v => Number(v)))
    for(let val of s){
        for(let v of val){
            if(!ans.includes(v)) ans.push(v)
        }
    }
    return ans
}

// 영어 끝말잇기
function solution(n, words) {
    const saidword = [words[0]]
    
    for(let i = 1; i < words.length; i++){
        let lastWord = saidword[saidword.length-1]
        let curWord = words[i]
        if(saidword.includes(curWord) || curWord[0] !== lastWord[lastWord.length-1]){
            return [(i % n) + 1 , Math.floor(i/n) + 1]
        }
        saidword.push(curWord)
    }
    return [0,0]
}
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}

// 점프와 순간이동
// 프로그래머즈 lv.2 테스트에서 나를 두번떨궜던 문제 ...
// dp로 하니 시간초과났었다
// 근데 그냥 시박 n을 나눠서 푸니 끝나네..???
function solution(n)
{
    let cnt = 0
    while(n !== 0){
        if(n % 2 === 0) n = n / 2
        else {
            n = n -1
            cnt++
        }
    }
    return cnt
}

// 괄호 변환 
function solution(p) {
    let check = false, left = 0, right = 0, ans = ""
    
    if(p.length === 0) return ""
    
    for(let i = 0; i < p.length; i++){
        if(p[i] === "(") left++
        if(p[i] === ")") right++
        if(right > left) check = true
        
        if(left === right){
            if(check){
                ans += '('
                ans += solution(p.slice(i+1, p.length))
                ans += ')'
                
                for(let j = 1; j < i; j++){
                    if(p[j] === ")") ans += '('
                    if(p[j] === "(") ans += ')'
                }
                return ans
            } else {
                ans += p.slice(0, i+1)
                ans += solution(p.slice(i+1,p.length))
                return ans
            }
        }
    }
}

// 소수만들기
// 밑에 풀이로 풀었는데 답이 안나오는게 이해가 안된다
function solution(nums) {
    let arr = Array.from(permutation(nums, 3))
    arr = arr.map(v => v.reduce((acc,cur) => acc+cur,0))
    arr = Array.from(new Set(arr))
    const max = Math.max(...arr)

    //에스카~체
    let dp = Array(max+1).fill(true).fill(false, 0, 2);

    for(let i = 2; i <= max ** 0.5; i++){
        if(dp[i]){
            for(let j = i * 2; j <= max; j += i){
                dp[j] = false;
            }
        }
    }
    // 갯수 세기
    let cnt = 0
    for(let val of arr){
        if(dp[val]){
            console.log(val)
            cnt++
        }
    }
    return cnt
}
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}
// 답
function solution(nums) {
    let cnt = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let z = j+1; z < nums.length; z++){
                let num = nums[i]+ nums[j] + nums[z]
                if(isPrime(num)) cnt++
            }
        }
    }
    return cnt
}
const isPrime = (a) =>{
    for(let i = 2; i < a; i++){
        if(a % i === 0){
            return false
        }
    }
    return true
}

// 수식 최대화
function solution(expression) {
    const ans = [0,0,0,0,0,0]
    const order = [['+','-','*'],
                   ['+','*','-'],
                   ['*','-','+'],
                   ['*','+','-'],
                   ['-','+','*'],
                   ['-','*','+']]
    for(let a = 0; a < ans.length; a++){
        let arr = expression.split(/(\D)/)
        for(let b = 0; b < order[a].length; b++){
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === order[a][b]){
                    let sum = eval(`${arr[i-1]} ${arr[i]} ${arr[i+1]}`)
                    arr[i-1] = ''
                    arr[i] = ''
                    arr[i+1] = sum
                }
            }
            arr = arr.filter(v => v !== '')
            if(arr.length === 1){
                ans[a] = Math.abs(arr[0])
            }
        }
    }
    return Math.max(...ans)       
}
// 답
function solution(expression) {
    const prior = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ]
    let box = []

    for (let val of prior) {
        const temp = expression.split(/(\D)/)
        for (let exp of val) {
            while (temp.includes(exp)) {
                const idx = temp.indexOf(exp)
                temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join('')))
            }
        }
        box.push(Math.abs(temp[0]))
    }
    return Math.max(...box)
}

// 뉴스 클러스터링
function solution(str1, str2) {
    const change = (str) => {
        const arr = []
        for(let i = 0; i < str.length; i++){
            let a = str.substr(i,2).toUpperCase()
            if(a.match(/[A-Z]{2}/)){
                arr.push(a)
            }
        }
        return arr
    }
    const arr1 = change(str1)
    const arr2 = change(str2)
    
    const set = new Set([...arr1, ...arr2]);
    let union = 0;
    let intersection = 0;
  
    set.forEach(item => {
        const has1 = arr1.filter(x => x === item).length;
        const has2 = arr2.filter(x => x === item).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

// 프렌즈4블록
function solution(m, n, board) {
    board = board.map(v => v.split(''))
    
    while(true){
        let tmp = []
        for (let i = 1; i < m; i++){
            for (let j = 1; j < n; j++){
                if (board[i][j] &&
                    board[i][j] === board[i-1][j] &&
                    board[i][j] === board[i][j-1] &&
                    board[i][j] === board[i-1][j-1]){
                    tmp.push([i,j])
                }
            }
        }
        if (!tmp.length) {
            return board.reduce((acc,cur) => acc + cur.filter(v => !v).length, 0)
        }
            
        tmp.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        for (let i = m-1; i > 0; i--){
            for (let j = 0; j < n; j++){
                if (board[i][j] === 0) {
                    for (let z = i-1; z >= 0; z--){
                        if(board[z][j] !== 0){
                            board[i][j] = board[z][j]
                            board[z][j] = 0
                            break
                        }
                    }
                }
            }
        }
    }
}
// 캐시
// 캐시에 대해 처음 봐서 당황했지만 문제자체는 쉬움
function solution(cacheSize, cities) {
    const box = new Array(cacheSize).fill(0)
    let cnt = 0

    for(let v of cities){
        v = v.toUpperCase()
        if(box.includes(v)){
            cnt += 1
            box.splice(box.indexOf(v),1)
            box.push(v)
        } else {
            cnt += 5
            box.push(v)
            box.shift()
        }
    }
    return cnt
}

// 오픈채팅방
function solution(record) {
    const obj = {}, arr = [], ans = []
    for (let v of record){
        v = v.split(' ')
        if (v[0] === 'Enter'){
            obj[v[1]] = v[2]
            arr.push(v)
        }
        else if (v[0] === 'Change') obj[v[1]] = v[2]
        else arr.push(v)
    }
    for (let [a, b] of arr) {
        if (a === 'Enter') ans.push(`${obj[b]}님이 들어왔습니다.`)
        else ans.push(`${obj[b]}님이 나갔습니다.`)
    }
    return ans
}

// 방금그곡
function solution(m, musicinfos) {
    m = m.replace(/(\D)#/g, (s,p1)=> p1.toLowerCase());
    musicinfos = musicinfos.map(v => v.split(','))
    let ans = []
    for(let [start, end, name, music] of musicinfos){
        let min = end.substring(3) - start.substring(3) + (end.substring(0,2) - start.substring(0,2)) * 60
        music = music.replace(/(\D)#/g, (s,p1)=> p1.toLowerCase());
        const N = music.length, repeatSong = music.repeat(Math.floor(min/N)) + music.substring(0, min%N)
        ans.push([name,repeatSong,music])
    }

    const answer = ans.reduce((acc, cur)=>{
        if(cur[1].includes(m)){
            if(acc.length == 0 || acc[1].length < cur[1].length) return cur;
        }
        return acc;
    },[]);
    return (answer.length == 0)? "(None)" : answer[0];
}


// 압축
function solution(msg) {
    const box = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), ans = []
    while(msg.length > 0){
        let check = true
        for(let i = box.length - 1; i > 26; i--){
            if(box[i] === msg.substring(0, box[i].length)){
                ans.push(i)
                box.push(msg.substring(0, box[i].length+1))
                msg = msg.substring(box[i].length)
                check = false
                break
            }
        }
        if(check){
            ans.push(box.indexOf(msg[0]))
            box.push(msg.substring(0, 2))
            msg = msg.substring(1)
            }
        }
    return ans
}

// 파일명 정렬 https://angwangho.github.io/algorithm-filename-sort/
function solution(files) {
    const ans = []
    for(let i = 0; i < files.length; i++){
        ans.push({idx : i , val : files[i].split(/(\d+)/)})
    }
    ans.sort((a, b) => {
        const a_head = a.val[0].toLowerCase(), b_head = b.val[0].toLowerCase()
        if     (a_head < b_head) return -1
        else if(a_head > b_head) return 1
        else {
            const a_num = Number(a.val[1]), b_num = Number(b.val[1])
            if     (a_num < b_num) return -1
            else if(a_num > b_num) return 1
            else {
                if(a.idx < b.idx) return -1
                else return 1
            }
        }
    })
    return ans.map(v => v.val.join(''))
}


// n진수 게임
function solution(n, t, m, p) {
    let str = '', ans = ''
    for(let i = 0; str.length < t * m; i++){
        str += i.toString(n)
    }
    str = str.toUpperCase()
    for(let i = p-1; ans.length < t; i += m){
        ans += str[i]
    }
    return ans
}


// 2 x n 타일링 O
// 뭔가 피보나치 같아서 해보니 바로 맞춤
function solution(n) {
    const ans = [0,1,2,3,5]
    for(let i = 5; i <= n; i++){
        ans.push((ans[i-1]+ans[i-2]) %1000000007)
    }
    return ans[n];
}

// N으로 표현 X 
// https://velog.io/@tjdud0123/N%EC%9C%BC%EB%A1%9C-%ED%91%9C%ED%98%84
function solution(N, number) {
    const dp = new Array(8).fill().map(_ => new Set())
    for(let i = 0; i < 8; i++){
        dp[i].add(Number(N.toString().repeat(i+1)))
        for (let j = 0; j < i; j++) {
            for(const val1 of dp[j]){
                for(const val2 of dp[i-j-1]){
                    dp[i].add(val1 + val2);
                    dp[i].add(val1 - val2);
                    dp[i].add(val1 * val2);
                    dp[i].add(val1 / val2);
                }
            }
        }
        if(dp[i].has(number)) return i+1;
    }
    return -1;
}

// 풍선 터트리기 X
// https://coding-lks.tistory.com/44
function solution(a) {
    const N = a.length
    if(N < 3) return N
    
    let left = a[0], right = a[N-1], ans= 2
    for(let i = 1; i < N-1; i++){
        if(left > a[i]){
            left = a[i]
            ans++
        }
        if(right > a[N-1-i]){
            right = a[N-1-i]
            ans++
        }
    }
    return left !== right ? ans : ans-1
}

// 네트워크 X
// 파이썬으로 다했던 건데...
function solution(n, computers) {
    var answer = 0, visited = []
  
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          answer++
          dfs(i, computers, visited)
        }
    }
    return answer
}
function dfs(start, computers, visited) {
    visited[start] = 1
    for (let i = 0; i < computers.length; i++){
        if (!visited[i] && computers[start][i]){
            dfs(i, computers, visited)
        }
    }
}

// 가장 먼 노드 X

// 섬 연결하기 X
// https://raina94.github.io/2019/10-07-algorithm-1/
function solution(n, costs) {
    costs.sort((a,b) => a[2] - b[2])
    let ans = 0, land = [], bridge = [], total = 0
    land[costs[0][0]] = true
    land[costs[0][1]] = true
    bridge[0] = true
    ans += costs[0][2]
    total += 2
    while(total < n){
        for(let i = 1; i < costs.length; i++){
            let [start, end, cost] = costs[i]
            if(!bridge[i] && (land[start] && !land[end]) || (!land[start] && land[end])){
                land[start] = true
                land[end] = true
                bridge[i] = true
                ans += cost
                total++
                break
            }
        }
    }
    return ans
}
function solution(n, costs) {
    costs.sort((a,b) => a[2] - b[2]);
    let [from, to, answer] = costs.shift();
    let connected = new Set([from, to]);
    while (connected.size < n) {
        let index = costs.findIndex(([from, to]) =>
                                    connected.has(from) && !connected.has(to)
                                    || connected.has(to) && !connected.has(from)
                                   );
        let [[from, to, cost]] = costs.splice(index, 1);
        answer += cost;
        connected.add(from).add(to);
    }
    return answer;
}

// 단어 변환
function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    let answer = 0, temp = []
    const visited = new Set(), queue = [begin]
    
    while (queue.length) {
        const word = queue.shift()
        if(word === target) return answer
        visited.add(word)
  
        for (let i = 0 ; i < word.length ; i++) {
            const letter = slicedWord(word, i);
            const matched = words.filter(v => !visited.has(v) && slicedWord(v, i) === letter);
            temp.push(...matched);
            }

        if(queue.length < 1) {
          answer++;
          queue.push(...temp);
          temp = [];
          } 
      }
    return answer
    
    function slicedWord(word, i) {
        const wordToArray = word.split('');
        wordToArray.splice(i, 1);
        return wordToArray.join('');
    }
}
// https://medium.com/@jjnooys/javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98-dfs-bfs-18d29a699800
function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    let answer = 0, temp = []
    const visited = new Set(), queue = [begin]
  
    while (queue.length) {
        const word = queue.shift()
        console.log(queue)
        if(word === target) return answer
        visited.add(word)
  
        for (let i = 0 ; i < word.length ; i++) {
            const letter = slicedWord(word, i);
            const matched = words.filter((v, j) => !visited.has(v) && slicedWord(v, i) === letter);
            temp.push(...matched);
            }

        if(queue.length < 1) {
          answer++;
          queue.push(...temp);
          temp = [];
          }
      }
  
    function slicedWord(word, i) {
        const wordToArray = word.split('');
        wordToArray.splice(i, 1);
        return wordToArray.join('');
    }
    return answer;
}

// 단속카메라 
// 풀이만 보고 코드는 안봄 https://kyun2da.github.io/2020/07/20/checkCamera/
function solution(routes) {
    routes.sort((a,b) => a[1] - b[1])
    let camera = -30001, cnt = 0
    for(let i = 0; i < routes.length; i++){
        if(camera < routes[i][0]){
            camera = routes[i][1]
            cnt++
        }
    }
    return cnt
}
// 먼저 차량의 경로를 진출 지점을 기준으로 정렬합니다. 카메라를 설치할 지점을 초기에 -30001로 잡아놓습니다.
// 설치한 카메라의 위치가 차량의 진입지점보다 전에 있다면 다음 카메라를 그 차량의 진출지점으로 정해줍니다.
// 이런식으로 루프를 계속 돌려 카메라가 설치된 개수를 구합니다.

// 디스크 컨트롤러
function solution(jobs) {
    let ans = 0, time = 0, idx = 0
    jobs.sort((a,b) => a[0] - b[0])

    const pq = []
    while(idx < jobs.length || pq.length !== 0){
        if(jobs.length > idx && time >= jobs[idx][0]){
            pq.push(jobs[idx++])
            pq.sort((a,b) => a[1] - b[1])
            continue
        }
        if(pq.length !== 0){
            time += pq[0][1]
            ans  += time - pq[0][0]
            pq.shift()
        } else {
            time = jobs[idx][0]
        }
    }
    return parseInt(ans / jobs.length)
}

// 이중우선순위큐
// 풀리는게 이해가 안되는 문제 이름만 보면 heap 자료구조 써야 할 것 같은데 그냥 js arr로 풀림
function solution(operations) {
    const hq = []
    for(let val of operations){
        let [a,b] = val.split(' ')
        if(a === 'I'){
            hq.push(Number(b))
            hq.sort((a,b) => a - b)
        }
        if(a === 'D' && b === '1') hq.pop()
        if(a === 'D' && b === '-1') hq.shift()
    }
    return hq.length > 0 ? [hq[hq.length-1], hq[0]] : [0,0]
}

// 여행경로
// https://after-newmoon.tistory.com/66
function solution(tickets) {
    const answer = [];

    const route = (arr, country, m=["ICN"]) => {
        if(arr.length === 0) answer.push(m);
        else{
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0] === country){
                    let curr = arr.slice();
                    curr.splice(i, 1);
                    route(curr, arr[i][1], m.concat(arr[i][1]));
                }
            }
        }
    }
    route(tickets, 'ICN');
    return answer.sort()[0];
}

// 입국심사
// https://kyun2da.github.io/2020/07/24/Immigration/
function solution(n, times) {
    times.sort((a,b) => a - b)
    let left = 1, right = n * times[times.length-1]
    let ans = right
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let cnt = 0
        for (let i = 0; i < times.length; i++){
            cnt += parseInt(mid / times[i])
            if (cnt >= n) ans = Math.min(ans, mid)
        }
        if(cnt >= n) right = mid - 1
        else left = mid + 1
    }
    return ans
}

// 베스트앨범 
// https://velog.io/@yujo/JSProgrammers-%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%95%A8%EB%B2%94#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC-%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%95%A8%EB%B2%94
// 여기 코드에서 좀 수정 함
function solution(genres, plays) {
    const ans = [], genreMap = new Map()
    let playsArr = []
    for (let i = 0; i < genres.length; i++) {
      genreMap.has(genres[i])
            ? genreMap.set(genres[i], genreMap.get(genres[i]) + plays[i])
            : genreMap.set(genres[i], plays[i])
      
      playsArr[i] = [genres[i], plays[i], i]
    }
    
    const gen = Array.from(genreMap)
    gen.sort((a, b) => b[1] - a[1])
    playsArr.sort((a, b) => {
        if (b[1] > a[1]) return 1
        else if (b[1] < a[1]) return -1
        else {
            if(a[2] < b[2]) return 1
        }
    })
    
    for(let i = 0; i < gen.length; i++){
        for(let j = 0, cnt = 0; j < playsArr.length; j++){
            if(cnt === 2) break
            if(gen[i][0] === playsArr[j][0]){
                ans.push(playsArr[j][2])
                cnt++
            }
        }
    }
    return ans
}  

// 가장 긴 팰린드롬
// https://beomyeonandrewkim.github.io/posts/algorithm/longest-palindrom/
// 시간초과 남
function solution(s){
    if(s === s.split('').reverse().join('')){
        return s.length
    }
    const A = solution(s.substring(0, s.length - 1))
    const B = solution(s.substring(1, s.length))
    return Math.max(A,B)
}
// https://taesung1993.tistory.com/71
function solution(s) {
    for(let i = s.length; i >= 1; i--){
        for(let j = 0; j <= s.length-i; j++){
            const isPalin = isPalindrome(s.slice(j, i+j));
            if(isPalin) return i;
        }
    }
    return 1;
  }
const isPalindrome = (s) => {
    const half = Math.floor(s.length/2);
  
    for(let i=0; i < half; i++){
        if(s[i] !== s[s.length-1-i]) return false;
    }
    return true;
}

// N - 퀸

LV 3. 카카오문제

// 추석 트래픽
function solution(lines) {
    let ans = 0
    const arr = [], logArr = [] 
  
    lines.forEach(v => {
        const date = v.split(' ');
        const edSec =
                      Number(date[1].substring(0, 2)) * 3600 +
                      Number(date[1].substring(3, 5)) * 60 +
                      Number(date[1].substring(6, 12));
        
        const duration = Number(date[2].substring(0, date[2].length - 1));
        const stSec = edSec - duration + 0.001;
        arr.push([stSec, edSec]);
        logArr.push(stSec, edSec);
    })
    console.log(arr)
    logArr.sort((a, b) => a - b)
    console.log(logArr)
    logArr.forEach(v => {
        const beginRange = v
        const endRange = v + 1
        let cnt = 0
        for (let [stPoint,edPoint] of arr){
            if(
               (stPoint >= beginRange && stPoint < endRange) ||
               (edPoint >= beginRange && edPoint < endRange) ||
               (stPoint <= beginRange && edPoint >= endRange)
              ) cnt++
        }
        if(cnt > ans) ans = cnt
    })
    return ans
}

// 자물쇠와 열쇠
// 하루종일 삽질해도 모르겠다
// 결국 가져옴
function solution(key, lock) {
    const N = lock.length;
    const board = makeBoard(lock);
    for (let i = 0; i < 4; i++) {
        key = rotate90(key);
        for (let j = 0; j <= N * 2; j++) {
            for (let k = 0; k <= N * 2; k++) {
                matchKey(j, k, board, key, "do");
                if (isMatched(board)) {
                    return true;
                }
                matchKey(j, k, board, key, "undo");
          }
        }
    }
    return false;
}
function makeBoard(origin) {
    const length = origin.length;
    const board = new Array(length * 3).fill(null)
                                       .map(() => new Array(length * 3).fill(0));
    for (let m = 0; m < length; m++) {
        for (let n = 0; n < length; n++) {
            board[m + length][n + length] = origin[m][n];
        }
    }
    return board;
}
function rotate90(matrix) {
    const length = matrix.length;
    const rotated = new Array(length).fill(null)
                                     .map(() => new Array(length).fill(null));
    for (let col = 0; col < length; col++) {
        for (let row = length - 1; row >= 0; row--) {
            rotated[col][length - 1 - row] = matrix[row][col];
        }
    }
    return rotated;
}

function matchKey(rowStart, colStart, board, key, operator) {
    const length = key.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            board[rowStart + i][colStart + j] +=
                operator == "do" ? key[i][j] : key[i][j] * -1;
        }
    }
}

function isMatched(board) {
  const length = board.length;
  for (let i = length / 3; i < (length / 3) * 2; i++) {
    for (let j = length / 3; j < (length / 3) * 2; j++) {
      if (board[i][j] != 1) {
        return false;
      }
    }
  }
  return true;
}

// 외벽 점검
// https://velog.io/@yejineee/programmers-%EC%99%B8%EB%B2%BD-%EC%A0%90%EA%B2%80-in-JS
function solution(n, weak, dist) {
    const N = weak.length;
    dist.sort((a,b) => b - a)
    for (let k = 1; k <= dist.length; k++) {
        const combiList = permutation(dist, k, [], []);
        const findAll = combiList.some((list) => {
          for (let idx = 0; idx < N; idx++) {
            const unFoundWeak = [
              ...weak.slice(idx),
              ...weak.slice(0, idx),
            ]
            const foundCount = list.reduce((sum, distance) => {
              const count = countWeak(unFoundWeak, distance, n);
              return sum + count;
            }, 0);
            if (foundCount === N) {
              return true;
            }
          }
          return false;
      });
      if (findAll) {
        return k;
      }
    }
    return -1;
}

const permutation = (arr, k, list, result) => {
    if (list.length === k) {
        result.push(list);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        const nextArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        permutation(nextArr, k, [...list, arr[i]], result);
    }
    return result;
}

const countWeak = (unFoundWeak, distance, n) => {
    let count = 0;
    const start = unFoundWeak[0];
    for (let next = 0; next <= distance; next++) {
        const nextLoc = (start + next) % n;
        if (nextLoc !== unFoundWeak[0]) continue;
        count += 1;
        unFoundWeak.shift();
    }
    return count;
};

현재



문법 모음
//값이 없는 객체 null, 정의되지 않음 undefined, 숫자가 아님 NaN
//문자열은 객체로 취급된다.

//문자.charAt(idx) 하나반환
//문자.toUpperCase() 
//문자.length 길이
//문자.split(나눌값))
//문자.replace("이것을", "이걸로") 하나만 바뀜
//문자.replace(/이것을/g, "이걸로") / /g 전부 다 바꾸는 정규식
//문자.repeat(int)
//문자.substring(start,end)end 출력 X 
//거꾸로 출력을 지원한다(파이썬 처럼은 안됌 시발;))
//문자.match(정규식)

//문자.substr(start,start부터 몇개 )   end 출력 O
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr

//배열메써드
//arr.indexOf(값) 값의 인덱스 반환
//arr.toString() 배열을 문자열로 반환
//arr.concat(arr1) arr에 arr1합침(여러개가능)
//arr.join(값) 파이썬 동일
//arr.push() append
//arr.pop()
//arr.shift() popleft
//arr.unshift() appendleft
//arr.slice 슬라이스를 새로운배열로 반환
//arr.splice 배열의 일부분을 제거하고 다른항목으로 대체(원래배열변환)
//arr.sort() 정렬 
//arr.reverse() 역정렬 
//arr.filter(() => {})

ex
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



**중요**
JS 리스트 컴프리헨션 예시(다양히 활용가능)
const arr = Array.from({length:n}, ((val,i) => new Array(i+1).fill(0)))
let dp = Array(max+1).fill(true).fill(false, 0, 2);

Counter 구현
clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {}))

const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
        console.log(obj)
    }
Permutations 구현
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

문법 정리
//arr.map((요소,인덱스,배열) => {return 요소}) 짝지어준다
result = oneTwoThree.map((v) => {
  return v + 1;
});
result; // [2, 3, 4]

result = oneTwoThree.map((v) => {
  if (v % 2) {
    return '홀수';
  }
  return '짝수';
});
result; // ['홀수', '짝수', '홀수']

//arr.reduce((누적값,현재값,인덱스,요소) => {return 결과}, 초기값)
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6

result = oneTwoThree.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
result; // [1, 3]

const promiseFactory = (time) => {
  return new Promise((resolve, reject) => {
    console.log(time); 
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
// 바로 1000
// 1초 후 2000
// 2초 후 3000
// 3초 후 4000


**
//오브젝트.toString() 

//Math.ceil  소수값 올림
//Math.floor 소수값 버림
//Math.round 반올림

//parseInt(문자) 인트변환 parseInt(문자, 2) 이진수변환


//반복문
// while은 조건에 맞아야 시작, do while은 일단 실행 한번하고 그담부터 조건봄
while (true) {
  // 무한루프!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));

for (var i = 0; i < 5; i++) {
  // 내부 동작을 5번 반복합니다
}
for (let value of array) {
  // value로 작업을 실행합니다
}
for (let property in object) {
  // object의 항목(property)으로 작업을 실행합니다
}

&& 와 || 연산자는 첫번째 식을 평가한 결과에 따라서 두번째 식을 평가를 실행하는 단축평가(short-circuit) 논리를 사용합니다. 이는 다음과 같이 객체에 접근하기 전에 null 객체인지, 아닌지를 검사하는데 유용하게 사용될 수 있습니다

var name = o && o.getName();
또는 (틀린값이 유효하지 않은 값일때) 캐싱 값에 대해서도 사용합니다.:
var name = cachedName || (cachedName = getName());
삼중 연산
var allowed = (age > 18) ? "yes" : "no";

switch(action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default: //선택사항
        doNothing();
}

// 오브젝트
// 속성접근
obj.details.color; // dot 표기법
obj["details"]["size"]; //  브라켓표기법
// key를 정의하기 위해 변수도 쓸수 있습니다.
var user = prompt('what is your key?') // 사용자에게 물어봄
obj[user] = prompt('what is its value?')

// 함수 파라메터 갯수 정하지 않음
function avg(...args) {
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / arr.length;
}
avg(2, 3, 4, 5); // 3.5
// 배열은 어떻게 받나?
// 함수 변경
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5

//apply 함수 활용
avg.apply(null, [2, 3, 4, 5])
//apply의 첫번째 변수는 this or null 인듯
//두번째 매개변수는 매개변수들로 사용하고자 하는 배열


//JS this 정리 (이거 계속 헷갈렸음)
//this는 현재 실행 문맥이다(호출자가 누구냐!)


// 표기법
// 카멜 표기법 (helloWorld) 
// 파스칼 표기법 (HelloWorld) 함수와 클래스
// 스네이크 표기법 (hello_world) 변수명,함수명 데이터 타입 등등

