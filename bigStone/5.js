// 강의
{
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    get size() {
      return this.heap.length;
    }

    isEmpty() {
      return this.size === 0;
    }

    push(value) {
      this.heap.push(value);
      this._heapifyUp();
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const max = this.heap[0];
      const last = this.heap.pop();

      if (!this.isEmpty()) {
        this.heap[0] = last;
        this._heapifyDown();
      }

      return max;
    }

    _heapifyUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        // 최소힙과 다른 부분
        if (this.heap[currentIndex] <= this.heap[parentIndex]) {
          break;
        }

        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      }
    }

    _heapifyDown() {
      let currentIndex = 0;

      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let maxIndex = currentIndex;

        if (
          leftChildIndex < this.size &&
          this.heap[leftChildIndex] > this.heap[maxIndex] // 최소힙과 다른 부분
        ) {
          maxIndex = leftChildIndex;
        }

        if (
          rightChildIndex < this.size &&
          this.heap[rightChildIndex] > this.heap[maxIndex] // 최소힙과 다른 부분
        ) {
          maxIndex = rightChildIndex;
        }

        if (maxIndex === currentIndex) {
          break;
        }

        [this.heap[currentIndex], this.heap[maxIndex]] = [
          this.heap[maxIndex],
          this.heap[currentIndex],
        ];

        currentIndex = maxIndex;
      }
    }
  }

  class MinHeap {
    constructor() {
      this.heap = [];
    }

    get size() {
      return this.heap.length;
    }

    isEmpty() {
      return this.size === 0;
    }

    push(value) {
      this.heap.push(value);
      this._heapifyUp();
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const min = this.heap[0];
      const last = this.heap.pop();

      if (!this.isEmpty()) {
        this.heap[0] = last;
        this._heapifyDown();
      }

      return min;
    }

    _heapifyUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        if (this.heap[currentIndex] >= this.heap[parentIndex]) {
          break;
        }

        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      }
    }

    _heapifyDown() {
      let currentIndex = 0;

      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let minIndex = currentIndex;

        //
        if (
          leftChildIndex < this.size &&
          this.heap[leftChildIndex] < this.heap[minIndex]
        ) {
          minIndex = leftChildIndex;
        }

        if (
          rightChildIndex < this.size &&
          this.heap[rightChildIndex] < this.heap[minIndex]
        ) {
          minIndex = rightChildIndex;
        }

        if (minIndex === currentIndex) {
          break;
        }

        [this.heap[currentIndex], this.heap[minIndex]] = [
          this.heap[minIndex],
          this.heap[currentIndex],
        ];

        currentIndex = minIndex;
      }
    }
  }
}
// 1931
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [n, ...arr] = input.split("\n");
  const numArr = arr.map((v) => v.split(" ").map(Number));

  numArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let cnt = 1;
  let endTime = numArr[0][1];

  for (let i = 1; i < numArr.length; i++) {
    const [start, end] = numArr[i];
    if (start >= endTime) {
      endTime = end;
      cnt++;
    }
  }
  console.log(cnt);
}

// 1202
// 시간초과
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");
  const [n, k] = arr[0].split(" ").map(Number);

  const gems = [];
  const c = [];
  for (let i = 1; i < arr.length; i++) {
    if (i <= n) {
      const tmp = arr[i].split(" ");
      gems.push([Number(tmp[0]), Number(tmp[1])]);
    } else {
      c.push(Number(arr[i]));
    }
  }

  gems.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  c.sort((a, b) => a - b);
  let money = 0;

  for (let i = 0; i < c.length; i++) {
    let idx = 0;

    while (idx < gems.length) {
      if (gems[idx][0] <= c[i]) {
        money += gems[idx][1];
        gems.splice(idx, 1);
        break;
      }
      idx++;
    }
  }
  console.log(money);
}
// 1202
{
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    get size() {
      return this.heap.length;
    }

    isEmpty() {
      return this.size === 0;
    }

    insert(value) {
      this.heap.push(value);
      this._heapifyUp();
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const max = this.heap[0];
      const last = this.heap.pop();

      if (!this.isEmpty()) {
        this.heap[0] = last;
        this._heapifyDown();
      }

      return max;
    }

    _heapifyUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        if (this.heap[currentIndex] <= this.heap[parentIndex]) {
          break;
        }

        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      }
    }

    _heapifyDown() {
      let currentIndex = 0;

      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let maxIndex = currentIndex;

        if (
          leftChildIndex < this.size &&
          this.heap[leftChildIndex] > this.heap[maxIndex]
        ) {
          maxIndex = leftChildIndex;
        }

        if (
          rightChildIndex < this.size &&
          this.heap[rightChildIndex] > this.heap[maxIndex]
        ) {
          maxIndex = rightChildIndex;
        }

        if (maxIndex === currentIndex) {
          break;
        }

        [this.heap[currentIndex], this.heap[maxIndex]] = [
          this.heap[maxIndex],
          this.heap[currentIndex],
        ];

        currentIndex = maxIndex;
      }
    }
  }

  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");
  const [n, k] = arr[0].split(" ").map(Number);

  const gems = [];
  const c = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = arr[i].split(" ").map(Number);
    gems.push([x, y]);
  }
  for (let i = n + 1; i < arr.length; i++) {
    c.push(Number(arr[i]));
  }

  gems.sort((a, b) => a[0] - b[0]);
  c.sort((a, b) => a - b);

  const pq = new MaxHeap();
  let money = 0;
  let j = 0;

  for (let i = 0; i < k; i++) {
    while (j < n && gems[j][0] <= c[i]) {
      pq.insert(gems[j][1]);
      j++;
    }
    if (pq.size) {
      money += pq.pop();
    }
  }
  console.log(money);
}
// 14729
// 정답이지만 메모리초과 나옴 - 통과한 답 3개 뿐
{
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    get size() {
      return this.heap.length;
    }

    isEmpty() {
      return this.size === 0;
    }

    push(value) {
      this.heap.push(value);
      this._heapifyUp();
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const max = this.heap[0];
      const last = this.heap.pop();

      if (!this.isEmpty()) {
        this.heap[0] = last;
        this._heapifyDown();
      }

      return max;
    }

    _heapifyUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        // 최소힙과 다른 부분
        if (this.heap[currentIndex] <= this.heap[parentIndex]) {
          break;
        }

        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      }
    }

    _heapifyDown() {
      let currentIndex = 0;

      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let maxIndex = currentIndex;

        if (
          leftChildIndex < this.size &&
          this.heap[leftChildIndex] > this.heap[maxIndex] // 최소힙과 다른 부분
        ) {
          maxIndex = leftChildIndex;
        }

        if (
          rightChildIndex < this.size &&
          this.heap[rightChildIndex] > this.heap[maxIndex] // 최소힙과 다른 부분
        ) {
          maxIndex = rightChildIndex;
        }

        if (maxIndex === currentIndex) {
          break;
        }

        [this.heap[currentIndex], this.heap[maxIndex]] = [
          this.heap[maxIndex],
          this.heap[currentIndex],
        ];

        currentIndex = maxIndex;
      }
    }
  }

  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");
  const pq = new MaxHeap();

  for (let i = 1; i < arr.length; i++) {
    pq.push(Number(arr[i]));
    if (pq.size > 7) {
      pq.pop();
    }
  }

  let ans = [];
  let i = 0;
  while (i < 7) {
    ans.push(pq.pop());
    i++;
  }
  console.log(ans.reverse().join("\n"));
}

// 2170
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n").map((v) => v.split(" ").map(Number));
  arr.shift();
  arr.sort((a, b) => a[0] - b[0]);

  let start = arr[0][0];
  let end = arr[0][1];
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    if (end < arr[i][0]) {
      ans += end - start;
      start = arr[i][0];
      end = arr[i][1];
    } else if (end >= arr[i][0] && arr[i][1] >= end) {
      end = arr[i][1];
    }
  }
  ans += end - start;
  console.log(ans);
}

// 3273
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");

  const n = Number(arr[0]);
  const nums = arr[1].split(" ").map(Number);
  const x = Number(arr[2]);

  nums.sort((a, b) => a - b);
  let cnt = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === x) {
      cnt++;
      left++;
    } else if (sum > x) {
      right--;
    } else {
      left++;
    }
  }
  console.log(cnt);
}

// // 문제
// 2109
// 최대 q 쓰면 되는 것 같은데 js는 구현을 해야함;;
// 컨디션 좋을 때 복습 필
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [n, ...arr] = input.split("\n");
  const N = Number(n);
  if (N === 0) {
    console.log(0);
    return;
  }

  const incomes = new Array(10000).fill(0);
  const numArr = arr.map((v) => v.split(" ").map(Number));
  numArr.sort((a, b) => {
    if (b[0] === a[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  numArr.forEach((v) => {
    const [p, d] = v;

    for (let i = d; i > 0; i--) {
      if (incomes[i] === 0) {
        incomes[i] = p;
        break;
      }
    }
  });

  console.log(incomes.reduce((acc, cur) => acc + cur, 0));
}
// 2109 max hq
{
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    get size() {
      return this.heap.length;
    }

    isEmpty() {
      return this.size === 0;
    }

    push(value) {
      this.heap.push(value);
      this._heapifyUp();
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const min = this.heap[0];
      const last = this.heap.pop();

      if (!this.isEmpty()) {
        this.heap[0] = last;
        this._heapifyDown();
      }

      return min;
    }

    _heapifyUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        if (this.heap[currentIndex] >= this.heap[parentIndex]) {
          break;
        }

        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      }
    }

    _heapifyDown() {
      let currentIndex = 0;

      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let minIndex = currentIndex;

        //
        if (
          leftChildIndex < this.size &&
          this.heap[leftChildIndex] < this.heap[minIndex]
        ) {
          minIndex = leftChildIndex;
        }

        if (
          rightChildIndex < this.size &&
          this.heap[rightChildIndex] < this.heap[minIndex]
        ) {
          minIndex = rightChildIndex;
        }

        if (minIndex === currentIndex) {
          break;
        }

        [this.heap[currentIndex], this.heap[minIndex]] = [
          this.heap[minIndex],
          this.heap[currentIndex],
        ];

        currentIndex = minIndex;
      }
    }
  }
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [n, ...arr] = input.split("\n");
  const N = Number(n);
  if (N === 0) {
    console.log(0);
    return;
  }

  const numArr = arr.map((v) => v.split(" ").map(Number));
  numArr.sort((a, b) => a[1] - b[1]);

  const pq = new MinHeap();
  for (let i = 0; i < numArr.length; i++) {
    pq.push(numArr[i][0]);
    if (pq.size > numArr[i][1]) {
      pq.pop();
    }
  }
  let ans = 0;
  while (pq.size) {
    ans += pq.pop();
  }
  console.log(ans);
}

// 9935
// 메모리 초과
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [str, bomb] = input.split("\n");
  const pattern = new RegExp(bomb, "g");
  while (true) {
    const newStr = str.replace(pattern, "");
    if (newStr.length !== str.length) {
      str = newStr;
    } else {
      break;
    }
  }
  console.log(str ? str : "FRULA");
}
// 9935
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [str, bomb] = input.split("\n");

  const ans = [];

  for (let i = 0; i < str.length; i++) {
    ans.push(str[i]);
    if (ans.length >= bomb.length && bomb[bomb.length - 1] === str[i]) {
      let flag = true;

      for (let j = 1; j <= bomb.length; j++) {
        if (bomb[bomb.length - j] !== ans[ans.length - j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        for (let j = 1; j <= bomb.length; j++) {
          ans.pop();
        }
      }
    }
  }
  console.log(ans.length === 0 ? "FRULA" : ans.join(""));
}

// 1781
{
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    get size() {
      return this.heap.length;
    }

    isEmpty() {
      return this.size === 0;
    }

    push(value) {
      this.heap.push(value);
      this._heapifyUp();
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const min = this.heap[0];
      const last = this.heap.pop();

      if (!this.isEmpty()) {
        this.heap[0] = last;
        this._heapifyDown();
      }

      return min;
    }

    _heapifyUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        if (this.heap[currentIndex] >= this.heap[parentIndex]) {
          break;
        }

        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      }
    }

    _heapifyDown() {
      let currentIndex = 0;

      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let minIndex = currentIndex;

        //
        if (
          leftChildIndex < this.size &&
          this.heap[leftChildIndex] < this.heap[minIndex]
        ) {
          minIndex = leftChildIndex;
        }

        if (
          rightChildIndex < this.size &&
          this.heap[rightChildIndex] < this.heap[minIndex]
        ) {
          minIndex = rightChildIndex;
        }

        if (minIndex === currentIndex) {
          break;
        }

        [this.heap[currentIndex], this.heap[minIndex]] = [
          this.heap[minIndex],
          this.heap[currentIndex],
        ];

        currentIndex = minIndex;
      }
    }
  }
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [n, ...arr] = input.split("\n");
  const N = Number(n);

  const numArr = arr.map((v) => v.split(" ").map(Number));
  numArr.sort((a, b) => a[0] - b[0]);

  const pq = new MinHeap();
  for (let i = 0; i < numArr.length; i++) {
    pq.push(numArr[i][1]);
    if (pq.size > numArr[i][0]) {
      pq.pop();
    }
  }
  let ans = 0;
  while (pq.size) {
    ans += pq.pop();
  }
  console.log(ans);
}

// 14469
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [n, ...arr] = input.split("\n");
  const N = Number(n);

  const numArr = arr.map((v) => v.split(" ").map(Number));
  numArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let time = numArr[0][0] + numArr[0][1];
  for (let i = 1; i < numArr.length; i++) {
    const [arrived, waiting] = numArr[i];

    time = Math.max(time, arrived);
    time += waiting;
  }
  console.log(time);
}

// 1931
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [n, ...arr] = input.split("\n");
  const N = Number(n);

  const numArr = arr.map((v) => v.split(" ").map(Number));
  numArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let cnt = 1;
  let endTime = numArr[0][1];

  for (let i = 1; i < numArr.length; i++) {
    const [start, end] = numArr[i];
    if (start >= endTime) {
      endTime = end;
      cnt++;
    }
  }
  console.log(cnt);
}

// 1644
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const N = Number(input);
  const dp = new Array(N + 1).fill(true);
  dp[0] = false;
  dp[1] = false;

  const primes = [];
  for (let i = 2; i < N + 1; i++) {
    if (dp[i]) {
      primes.push(i);
      for (let j = i * 2; j < N + 1; j += i) {
        dp[j] = false;
      }
    }
  }

  if (primes.length === 1) {
    console.log(1);
    return;
  }

  let cnt = 0;
  let left = 0;
  let right = 1;
  let sum = primes[left] + primes[right];
  while (left <= right) {
    if (sum === N) {
      cnt++;
      sum -= primes[left++];
    } else if (sum < N) {
      sum += primes[++right];
    } else {
      sum -= primes[left++];
    }
  }
  console.log(cnt);
}

// 1644
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();
  const N = Number(input);

  const isPrime = new Array(N + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }
  const primes = isPrime.map((v, i) => (v ? i : 0)).filter(Boolean);
  if (primes.length === 1) {
    console.log(1);
    return;
  }

  let cnt = 0;
  let start = 0;
  let end = 1;
  let sum = primes[start] + primes[end];
  while (start <= end) {
    if (sum === N) {
      cnt++;
      sum -= primes[start++];
    } else if (sum < N) {
      sum += primes[++end];
    } else {
      sum -= primes[start++];
    }
  }
  console.log(cnt);
}

// 13144
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  const nums = new Array(100001).fill(false);

  let ans = 0;

  let start = 0;
  let end = 0;

  while (end < N) {
    if (!nums[arr[end]]) {
      nums[arr[end++]] = true;
    } else {
      ans += end - start;
      nums[arr[start++]] = false;
    }
  }

  ans += ((end - start) * (end - start + 1)) / 2;
  console.log(ans);
}
// 3273
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const arr = input.split("\n");

  const n = Number(arr[0]);
  const nums = arr[1].split(" ").map(Number);
  const x = Number(arr[2]);

  nums.sort((a, b) => a - b);
  let cnt = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === x) {
      cnt++;
      left++;
    } else if (sum > x) {
      right--;
    } else {
      left++;
    }
  }
  console.log(cnt);
}

// 1700
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, K] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  let cnt = 0;
  if (N >= K) {
    console.log(cnt);
    return;
  }

  const set = new Set();

  for (let i = 0; i < K; i++) {
    set.add(arr[i]);
    if (set.size > N) {
      cnt++;

      const slicedArr = arr.slice(i);
      let removeIdx = -1,
        removeValue = 0;

      for (let num of set) {
        const idx = slicedArr.indexOf(num);
        if (idx === -1) {
          removeValue = num;
          break;
        } else {
          if (removeIdx < idx) {
            removeIdx = idx;
            removeValue = num;
          }
        }
      }
      set.delete(removeValue);
    }
  }
  console.log(cnt);
}
// 17144
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const [[C, R, T], ...matrix] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let cleaner = [0, 0];

  for (let i = 0; i < R; i++) {
    if (matrix[i][0] === -1) {
      cleaner = [i, i + 1];
      break;
    }
  }
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  const getDustPoint = () => {
    const points = [];
    for (let y = 0; y < C; y++) {
      for (let x = 0; x < R; x++) {
        if (matrix[y][x] > 0) {
          value = Math.floor(matrix[y][x] / 5);
          points.push([y, x, value]);
        }
      }
    }
    return points;
  };

  const extendDust = (y, x, value) => {
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (0 <= ny && ny < C && 0 <= nx && nx < R && matrix[ny][nx] !== -1) {
        matrix[ny][nx] += value;
        matrix[y][x] = Math.max(matrix[y][x] - value, 0);
      }
    }
  };

  const moveDust = () => {
    for (let i = cleaner[0] - 2; i > -1; i--) {
      matrix[i + 1][0] = matrix[i][0];
    }

    for (let i = cleaner[1] + 1; i < C - 1; i++) {
      matrix[i][0] = matrix[i + 1][0];
    }

    matrix[0].shift();
    matrix[0].push(0);
    //
    matrix[C - 1].shift();
    matrix[C - 1].push(0);
    //
    for (let i = 0; i < cleaner[0]; i++) {
      matrix[i][R - 1] = matrix[i + 1][R - 1];
    }
    for (let i = C - 1; i > cleaner[1]; i--) {
      matrix[i][R - 1] = matrix[i - 1][R - 1];
    }

    for (let i = R - 1; i > 1; i--) {
      matrix[cleaner[0]][i] = matrix[cleaner[0]][i - 1];
      matrix[cleaner[1]][i] = matrix[cleaner[1]][i - 1];
    }
    matrix[cleaner[0]][1] = 0;
    matrix[cleaner[1]][1] = 0;
  };

  let time = 0;
  while (time < T) {
    const points = getDustPoint();
    points.forEach(([y, x, value]) => {
      extendDust(y, x, value);
    });
    moveDust();
    time++;
  }

  matrix[cleaner[0]][0] = 0;
  matrix[cleaner[1]][0] = 0;

  console.log(
    matrix.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + cur, 0), 0)
  );
}
