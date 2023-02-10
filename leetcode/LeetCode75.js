/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] + (ans[i - 1] || 0);
    ans.push(num);
  }
  return ans;
};
{
  let runningSum = function (nums) {
    nums.reduce((a, c, i, arr) => (arr[i] += a));
    return nums;
  };

  runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1];
    }
    return nums;
  };
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// 원레 세번째 로직을 작성했는데, 문제를 잘못 이해해서 돌아옴
const pivotIndex = (nums) => {
  const N = nums.length;
  for (let i = 0, left = 0; i < N; i++) {
    left += nums[i - 1] || 0;
    right = 0;
    for (let j = i + 1; j < N; j++) {
      right += nums[j];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};
{
  let pivotIndex = function (nums) {
    let leftIndexSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      leftIndexSum.push(leftIndexSum[i - 1] + nums[i]);

      // To access j-th right sum value
      // leftMaxSum = leftIndexSum[j-1];
    }

    let leftMaxSum = leftIndexSum[nums.length - 1];
    for (let i = 0; i < nums.length; i++) {
      let leftSum = leftIndexSum[i] - nums[i];
      let rightSum = leftMaxSum - leftIndexSum[i];
      if (leftSum === rightSum) {
        return i;
      }
    }

    return -1;
  };
  pivotIndex = function (nums) {
    let left = 0;

    if (!nums.length) return -1;
    if (nums.length === 1) return 0;

    const totalSum = nums.reduce((prev, curr) => prev + curr);

    for (let i = 0; i < nums.length; i++) {
      if (left === totalSum - left - nums[i]) {
        return i;
      } else {
        left += nums[i];
      }
    }
    return -1;
  };
  pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((sum, x) => sum + x, 0);
    for (let i = 0; i < nums.length; i++) {
      if (i > 0) leftSum += nums[i - 1];
      rightSum -= nums[i];
      if (rightSum === leftSum) return i;
    }
    return -1;
  };
}

// 205. Isomorphic Strings
var isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  const map = new Map();
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if (set.has(t[i])) return false;
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }
  return true;
};

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy = new ListNode(-1);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummy.next;
}
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

var reverseList = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};
var reverseList = (head) => {
  let prev = null;
  let next = null;
  let current = head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const pointers = [head];
  while (head.next) {
    head = head.next;
    pointers.push(head);
  }
  const idx = Math.ceil(pointers.length / 2);
  return pointers[pointers.length % 2 === 0 ? idx : idx - 1];
};

const middleNode = function (head) {
  let fast = head.next;
  while (fast) {
    head = head.next;
    fast = fast.next?.next;
  }
  return head;
};

// 실패 7/17 two pointer 를 써야함
var detectCycle = function (head) {
  let current = head;
  if (!head) {
    return null;
  }
  const values = [current.val];

  while (current.next) {
    current = current.next;
    const now = current.val;
    const idx = values.indexOf(now);
    if (idx !== -1) {
      return current;
    }
    values.push(now);
  }
  return null;
};
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

// 이중반목 쓰면 시간 제한 걸림
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    const x = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const y = prices[j];
      max = Math.max(y - x, max);
    }
  }
  return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }
  return profit;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const obj = s.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  let flag = false;
  const ans = Object.keys(obj)
    .map((v) => {
      if (obj[v] % 2 === 0) {
        return obj[v];
      }
      flag = true;
      return obj[v] - 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  return flag ? ans + 1 : ans;
};

var longestPalindrome = function (s) {
  const map = new Map();
  let count = 0;

  for (const char of s) {
    if (map.has(char)) {
      count += 2;
      map.delete(char);
    } else {
      map.set(char);
    }
  }

  return count + (map.size > 0 ? 1 : 0);
};

var preorder = function (root, arr = []) {
  if (root) {
    arr.push(root.val);

    for (let i = 0; i < root.children.length; i++) {
      preorder(root.children[i], arr);
    }
  }
  return arr;
};
var preorder = function (root) {
  const dfs = (node, result = []) => {
    if (!node) return [];
    result.push(node.val);
    for (let i of node.children) {
      dfs(i, result);
    }
    return result;
  };
  return dfs(root);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root, arr = [], depth = 1) {
  if (!root) return [];
  if (arr.length === 0) {
    arr.push([root.val]);
  }
  const tmp = [];
  tmp.push(root.left);
  tmp.push(root.right);
  const filteredTmp = tmp.filter((v) => v);
  if (filteredTmp.length > 0) {
    if (!arr[depth]) {
      arr[depth] = [];
    }
  }
  for (const node of filteredTmp) {
    arr[depth].push(node.val);
  }
  for (const node of filteredTmp) {
    levelOrder(node, arr, depth + 1);
  }
  return arr;
};

var levelOrder = function (root) {
  const result = [];

  const bfs = (tree, level) => {
    if (result.length === level) result.push([]);

    result[level].push(tree.val);
    if (tree.left) bfs(tree.left, level + 1);
    if (tree.right) bfs(tree.right, level + 1);
  };

  if (!root) return result;
  bfs(root, 0);
  return result;
};
var levelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      currentLevel.push(currentNode.val);
    }
    res.push(currentLevel);
  }

  return res;
};

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;
    let lastBad = null;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        lastBad = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return lastBad;
  };
};

// 본인이 쓴 안되는 코드 ㅠㅠ
var isValidBST = function (root) {
  const ans = isValid(root, root.val);
  console.log(ans);
  return !ans;
};
var isValid = (node, rootVal) => {
  if (Number.isInteger(node.val)) {
    console.log(node.val, node.left?.val, node.right?.val);

    if (Number.isInteger(node.left?.val)) {
      if (node.left.val < node.val && node.left.val < rootVal) {
        isValid(node.left, rootVal);
      } else {
        return true;
      }
    }
    if (Number.isInteger(node.right?.val)) {
      if (node.right.val > node.val && node.right.val > rootVal) {
        isValid(node.right, rootVal);
      } else {
        return true;
      }
    }
  }
};

var isValidBST = function (root) {
  return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
var validate = function (node, min, max) {
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;
  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
};

var isValidBST = function (root, min, max) {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root?.left && root?.right) {
    if (check(root.left, p, q) && check(root.right, p, q)) {
      return root;
    }
  }
  if (root?.left) {
    if (check(root.left)) {
      return root.left;
    } else {
      lowestCommonAncestor(root.left, p, q);
    }
  }
  if (root?.right) {
    if (check(root.right)) {
      return root.right;
    } else {
      lowestCommonAncestor(root.right, p, q);
    }
  }
};

var check = (node, p, q) => node.val === p.val || node.val === q.val;

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  } else if (root === p || root === q) {
    return root;
  } else {
    let leftResult = lowestCommonAncestor(root.left, p, q);
    let rightResult = lowestCommonAncestor(root.right, p, q);
    if (leftResult === null && rightResult === null) {
      return null;
    } else if (leftResult !== null && rightResult === null) {
      return leftResult;
    } else if (leftResult === null && rightResult !== null) {
      return rightResult;
    } else {
      return root;
    }
  }
};
var lowestCommonAncestor = function (root, p, q) {
  p = p.val;
  q = q.val;
  while (true) {
    if (p > root.val && q > root.val) root = root.right;
    else if (p < root.val && q < root.val) root = root.left;
    else return root;
  }
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const checkBox = image.map((row) => row.map((_) => true));
  flood(image, checkBox, sr, sc, color, image[sr][sc]);
  return image;
};

var flood = (image, checkBox, x, y, color, init) => {
  const point = image[x]?.[y];

  if (!checkBox[x]?.[y] || point === undefined || point !== init) return;

  checkBox[x][y] = false;
  image[x][y] = color;
  flood(image, checkBox, x - 1, y, color, init);
  flood(image, checkBox, x + 1, y, color, init);
  flood(image, checkBox, x, y - 1, color, init);
  flood(image, checkBox, x, y + 1, color, init);
};

var floodFill = function (image, sr, sc, color) {
  const currColor = image[sr][sc];
  if (currColor === color) return image;

  function fill(image, sr, sc) {
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[sr].length ||
      image[sr][sc] !== currColor
    )
      return image;
    image[sr][sc] = color;
    fill(image, sr + 1, sc);
    fill(image, sr - 1, sc);
    fill(image, sr, sc + 1);
    fill(image, sr, sc - 1);
    return image;
  }
  return fill(image, sr, sc);
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cnt = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const point = grid[i][j];
      if (point === "1") {
        cnt += 1;
        move(grid, i, j);
      }
    }
  }
  return cnt;
};

var move = (grid, x, y) => {
  const point = grid[x]?.[y];

  if (point === undefined || point === "0") return;
  grid[x][y] = "0";
  move(grid, x - 1, y);
  move(grid, x + 1, y);
  move(grid, x, y - 1);
  move(grid, x, y + 1);
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
//find first 1 -> using bfs to keep tracking the one
var numIslands = function (grid) {
  let count = 0;
  if (grid.length === 0) {
    return count;
  }

  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        queue.push([row, col]);
        grid[row][col] = "0";

        while (queue.length) {
          let current = queue.shift();
          const curRow = current[0];
          const curCol = current[1];

          for (let i = 0; i < direction.length; i++) {
            const currentDir = direction[i];
            const nextRow = curRow + currentDir[0];
            const nextCol = curCol + currentDir[1];

            if (
              nextRow < 0 ||
              nextCol < 0 ||
              nextRow > grid.length - 1 ||
              nextCol > grid[0].length - 1
            )
              continue;

            if (grid[nextRow][nextCol] === "1") {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = "0";
            }
          }
        }
      }
    }
  }
  return count;
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 2) {
    return 1;
  }
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1,
    b = 2,
    c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return n === 1 ? a : b;
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const ans = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    ans.push(Math.min(ans[i - 1], ans[i - 2]) + cost[i]);
  }

  return Math.min(ans.pop(), ans.pop());
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 && n === 0) {
    return 0;
  }
  const map = Array.from({ length: m }, () => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1];
    }
  }
  return map[m - 1][n - 1];
};
var uniquePaths = function (m, n) {
  let grid = new Array(m).fill(1).map(() => new Array(n).fill(1));
  // walk through m and n (nested for)
  // set curr tile to sum of prev m and prev n
  // return sum in last row
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m - 1][n - 1];
};
var uniquePaths = function (m, n) {
  let factorials = [1];
  for (let i = 1; i <= m + n - 2; i++) {
    factorials[i] = factorials[i - 1] * i;
  }

  return factorials[m + n - 2] / (factorials[m - 1] * factorials[n - 1]);
};
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Sliding Window Technique
var findAnagrams = function (s, p) {
  const checker = check(p);
  const n = p.length;
  const ans = [];

  for (let i = 0; i < s.length - n + 1; i++) {
    if (checker(s.slice(i, i + n))) {
      ans.push(i);
    }
  }
  return ans;
};

var check = (p) => {
  const pArr = p.split("").sort();
  return (q) => {
    const qArr = q.split("").sort();
    for (let i = 0; i < qArr.length; i++) {
      if (!(pArr[i] === qArr[i])) {
        return false;
      }
    }
    return true;
  };
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pObj = {};

  for (const key of p) {
    if (!(key in pObj)) {
      pObj[key] = 0;
    }
    pObj[key]++;
  }

  let left = 0;
  let right = 0;
  let checkCount = p.length;
  const result = [];
  while (right < s.length) {
    if (pObj[s[right]] > 0) checkCount--;

    pObj[s[right]]--;
    right++;

    if (checkCount === 0) result.push(left);

    if (right - left === p.length) {
      if (pObj[s[left]] >= 0) checkCount++;
      pObj[s[left]]++;
      left++;
    }
  }
  return result;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = [];
  const letters = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    letters[p.codePointAt(i) - 97] += 1;
  }
  for (let i = -1, j = 0; j < s.length; j++) {
    if (letters[s.codePointAt(j) - 97] - 1 < 0) {
      while (s[++i] !== s[j]) {
        letters[s.codePointAt(i) - 97] += 1;
      }
    } else {
      letters[s.codePointAt(j) - 97] -= 1;
    }
    if (j - i === p.length) {
      ans.push(i + 1);
    }
  }
  return ans;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
  let left = 0,
    right = 0,
    maxCount = 0,
    maxLength = 0;
  const counts = Array(26).fill(0);
  const codeA = "A".charCodeAt();
  for (; right < s.length; right++) {
    counts[s.charCodeAt(right) - codeA]++;
    maxCount = Math.max(maxCount, counts[s.charCodeAt(right) - codeA]);
    while (right - left + 1 - maxCount > k) {
      counts[s.charCodeAt(left) - codeA]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];

    if (obj[val] !== undefined) {
      return [obj[val], i];
    }
    obj[nums[i]] = i;
  }
};

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const s = new Array(10).fill(0);
  const g = new Array(10).fill(0);
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls += 1;
    } else {
      s[secret[i]] += 1;
      g[guess[i]] += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    cows += Math.min(s[i], g[i]);
  }
  return `${bulls}A${cows}B`;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return !(nums.length === new Set(nums).size);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    max = Math.max(max, current);
    current = Math.max(0, current);
  }

  return max;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let cnt = Math.floor((high - low) / 2);
  if (low % 2 !== 0) {
    cnt += 1;
  } else if (high % 2 !== 0) {
    cnt += 1;
  }
  return cnt;
};

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  return (
    salary.slice(1, salary.length - 1).reduce((acc, cur) => acc + cur, 0) /
    (salary.length - 2)
  );
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const arr = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }

  return arr[n];
};

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = guess(mid);

    if (res === 0) {
      return mid;
    }
    if (res !== 1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const arr = [];
  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(nums[i]);
    arr.push(nums[i + n]);
  }
  return arr;
};
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }
  return result;
};

function totalFruit(fruits) {
  let left = 0,
    right = 0,
    max_picked = 0;
  const basket = new Map();

  for (; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

    if (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }
      left += 1;
    }
    max_picked = Math.max(max_picked, right - left + 1);
  }
  return max_picked;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const arr = new Array(nums.length).fill(Infinity);
  arr[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        arr[i] = Math.min(arr[i], arr[j] + 1);
      }
    }
  }
  return arr.pop();
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//Time Complexity : O(n),   Space Complexity: O(1)**
var jump = function (nums) {
  let jump = 0;
  let prev = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // Keep track of the maximum jump
    max = Math.max(max, i + nums[i]);
    // When we get to the index where we had our previous maximum jump, we increase our jump...
    if (i === prev) {
      jump++;
      prev = max;
    }
  }
  return jump;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let cnt1 = 0,
    flag1 = nums1.length - m;
  while (cnt1 < flag1) {
    nums1.pop();
    cnt1++;
  }
  let cnt2 = 0,
    flag2 = nums2.length - n;
  while (cnt2 < flag2) {
    nums1.pop();
    cnt2++;
  }
  nums2.forEach((v) => {
    nums1.push(v);
  });
  return nums1.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((v) => Math.pow(v, 2)).sort((a, b) => a - b);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0) {
    return nums;
  }
  const n = nums.length;
  k = k % n;
  const move = n - k;
  const right = nums.splice(move, n);

  nums.unshift(...right);
  return nums;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const arr = n.toString(2).split("");
  return arr.length - arr.filter((v) => v === "0").length;
};

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = n.toString().split("").map(Number);
  return (
    arr.reduce((acc, cur) => acc * cur, 1) -
    arr.reduce((acc, cur) => acc + cur, 0)
  );
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const n = grid.length,
    q = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        q.push([i, j]);
      }
    }
  }
  if (q.length === 0 || q.length === n ** 2) {
    return -1;
  }
  let steps = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = q.shift();
      for (const [dx, dy] of directions) {
        const a = x + dx;
        const b = y + dy;
        if (a >= 0 && a < n && b >= 0 && b < n && grid[a][b] === 0) {
          grid[a][b] = 1;
          q.push([a, b]);
        }
      }
    }
    steps++;
  }
  return steps - 1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const obj1 = nums1.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  const obj2 = nums2.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  const arr = [];
  Object.keys(obj1).forEach((key) => {
    const num1 = obj1[key];
    const num2 = obj2[key] || 0;
    for (let i = 0; i < Math.min(num1, num2); i++) {
      arr.push(key);
    }
  });
  return arr;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort((a, b) => a - b);
  const idx = nums.findIndex((v) => v > 0);
  if (idx) {
    nums.push(...nums.splice(0, idx));
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let idx = 0;
  let cnt = 0;
  while (true) {
    if (nums[idx] === undefined) {
      break;
    }
    if (nums[idx] === 0) {
      nums.splice(idx, 1);
      cnt += 1;
    } else {
      idx += 1;
    }
  }
  const zero = new Array(cnt).fill(0);
  nums.push(...zero);
};

const moveZeroes = (nums) => {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
    right++;
  }
  return nums;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    const now = numbers[i];
    const val = target - now;
    if (obj[val] !== undefined) {
      return [obj[val] + 1, i + 1];
    }
    obj[now] = i;
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const two = nums[i + 1];
    const three = nums[i + 2];
    if (first < two + three) {
      return first + two + three;
    }
  }
  return 0;
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  const arr = points
    .map((v) => (v[0] === x || v[1] === y ? v : [0, 0]))
    .map((v) => {
      if (v[0] === 0) {
        return Infinity;
      }
      return Math.abs(x - v[0]) + Math.abs(y - v[1]);
    });
  const val = Math.min(...arr);
  return val === Infinity ? -1 : arr.indexOf(val);
};

var nearestValidPoint = function (x, y, points) {
  let idx = -1;
  let min = Infinity;

  points.forEach(([a, b], i) => {
    if (a === x || b === y) {
      const dist = Math.abs(a - x) + Math.abs(b - y);
      if (dist < min) {
        min = dist;
        idx = i;
      }
    }
  });
  return idx;
};
