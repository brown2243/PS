const logGraph = (arr) =>
  console.log(console.log(arr.map((v) => v.join(" ")).join("\n")));

module.exports = {
  logGraph,
};

const bfs = (matrix, start, end, block) => {
  const n = matrix.length;
  const m = matrix[0].length;

  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
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
        if (!visited[ny][nx] && matrix[ny][nx] !== block) {
          q.push([ny, nx]);
          visited[ny][nx] = visited[y][x] + 1;
        }
      }
    }
  }
  return visited[end[0]][end[1]];
};

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value) {
    const heap = this.heap;
    heap.push(value);
    let index = heap.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && heap[index] < heap[parent]) {
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let index = 0;

    while (index * 2 + 1 < heap.length) {
      let left = index * 2 + 1,
        right = index * 2 + 2,
        next = index;

      if (heap[next] > heap[left]) {
        next = left;
      }

      if (right < heap.length && heap[next] > heap[right]) {
        next = right;
      }

      if (next === index) {
        break;
      }

      [heap[index], heap[next]] = [heap[next], heap[index]];
      index = next;
    }

    return output;
  }
}
