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
