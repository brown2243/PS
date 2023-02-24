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

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j < i + 1; j++) {
      if (rows?.[i - 1]?.[j - 1] && rows?.[i - 1]?.[j]) {
        row.push(rows?.[i - 1]?.[j - 1] + rows?.[i - 1]?.[j]);
      } else {
        row.push(1);
      }
    }
    rows.push(row);
  }
  return rows;
};

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) {
    return mat;
  }
  const flat = mat.flat();
  const ans = [];

  let index = 0;
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(flat[index]);
      index++;
    }
    ans.push(row);
  }

  return ans;
};

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const matRow = mat.length;
  const matCol = mat[0].length;
  const output = [];

  let flatMat = null;

  // return original if new dimension doesn't match
  if (r * c !== matRow * matCol) return mat;

  // deconstruct the original array and reconstruct new array
  flatMat = mat.reduce((acc, curr) => acc.concat(curr), []);

  for (let i = 0; i < r; i++) output.push(flatMat.splice(0, c));

  return output;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s.reverse();
};
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  for (let i = 0; i < s.length - i; i += 1) {
    const temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr1 = s.split(" ");
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].split("").reverse().join("");
  }
  return arr1.join(" ");
};

/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     const words = s.split(" ");

//     return words.map(word => word.split("")).map(word => word.reverse().join("")).join(" ");
// };

var reverseWords = function (s) {
  const result = [];
  let left = 0,
    right = 0;

  while (left < s.length) {
    while (right < s.length && s[right] !== " ") {
      right++;
    }

    for (let i = right - 1; i >= left; i--) {
      result.push(s[i]);
    }

    if (right < s.length) result.push(" ");
    right++;
    left = right;
  }

  return result.join("");
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) sign = -sign;
  }
  return sign;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  {
    let gap = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== gap) {
        return false;
      }
    }
  }
  arr.sort((a, b) => b - a);
  let gap = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== gap) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => b - a);
  let diff = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (diff !== arr[i] - arr[i + 1]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, dp = []) {
  const arr = n.toString().split("").map(Number);
  const acc = arr.reduce((acc, cur) => acc + cur ** 2, 0);
  if (acc === 1) {
    return true;
  } else {
    if (dp.includes(acc)) {
      return false;
    }
    dp.push(acc);
    return isHappy(acc, dp);
  }
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const checked = [];

  while (n !== 1) {
    if (checked.includes(n)) {
      return false;
    }
    checked.push(n);

    const arr = String(n)
      .split("")
      .map((x) => Math.pow(Number(x), 2));
    n = arr.reduce((acc, iter) => acc + iter, 0);
  }

  return true;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let count = 0;
  let index1, index2;
  let n = s1.length;

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      count++;
      if (count === 1) {
        index1 = i;
      } else if (count === 2) {
        index2 = i;
      } else {
        return false;
      }
    }
  }
  if (count === 0) {
    return true;
  }
  return count === 2 && s1[index1] === s2[index2] && s1[index2] === s2[index1];
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 == s2) return true;

  let counter = 0;
  let arr1 = s1.split("").sort();
  let arr2 = s2.split("").sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    if (s1[i] !== s2[i]) counter++;
  }
  return counter <= 2 ? true : false;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }

    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return BigInt(BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const num1 = BigInt("0b" + a);
  const num2 = BigInt("0b" + b);
  const total = num1 + num2;
  return total.toString(2);
};

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  return (BigInt(num.join("")) + BigInt(k)).toString().split("");
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const arr = matrix.flat();

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let m = matrix.length,
    n = matrix[0].length;
  let start = 0,
    end = m * n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / n),
      col = mid % n;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Check rows
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (row.has(board[i][j])) {
          return false;
        }
        row.add(board[i][j]);
      }
    }
  }

  // Check columns
  for (let j = 0; j < 9; j++) {
    const col = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== ".") {
        if (col.has(board[i][j])) {
          return false;
        }
        col.add(board[i][j]);
      }
    }
  }

  // Check 3x3 sub-boxes
  for (let box = 0; box < 9; box++) {
    const subBox = new Set();
    const rowStart = Math.floor(box / 3) * 3;
    const colStart = (box % 3) * 3;
    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
        if (board[i][j] !== ".") {
          if (subBox.has(board[i][j])) {
            return false;
          }
          subBox.add(board[i][j]);
        }
      }
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let rowMap = {};
    let colMap = {};
    let boxMap = {};
    for (let j = 0; j < board[i].length; j++) {
      let box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (board[i][j] != ".") {
        if (rowMap[board[i][j]]) return false;
        rowMap[board[i][j]] = 1;
      }
      if (board[j][i] != ".") {
        if (colMap[board[j][i]]) return false;
        colMap[board[j][i]] = 1;
      }
      if (box != ".") {
        if (boxMap[box]) return false;
        boxMap[box] = 1;
      }
    }
  }
  return true;
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
 * @return {number}
 */
const digging = (current, depth, arr) => {
  if (!current) {
    arr.push(depth - 1);
    return;
  }
  digging(current.left, depth + 1, arr);
  digging(current.right, depth + 1, arr);
};
var maxDepth = function (root) {
  const arr = [];
  digging(root, 1, arr);
  return Math.max(...arr);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = s.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  const arr = Object.keys(obj).filter((v) => obj[v] === 1);
  if (arr.length === 0) {
    return -1;
  }
  let ans = s.length;
  arr.forEach((v) => {
    ans = Math.min(ans, s.indexOf(v));
  });
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const ref = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    ref[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (ref[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const arr = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  for (let i = 0; i < magazine.length; i++) {
    arr[magazine.charCodeAt(i) - aCode]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!arr[ransomNote.charCodeAt(i) - aCode]) {
      return false;
    } else {
      arr[ransomNote.charCodeAt(i) - aCode] -= 1;
    }
  }
  return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  return (
    magazine.length >= ransomNote.length &&
    [...ransomNote].every((c) => {
      let i = magazine.indexOf(c);
      if (i >= 0) {
        magazine = magazine.slice(0, i) + magazine.slice(i + 1);
        return true;
      }
      return false;
    })
  );
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function (ransomNote, magazine) {
  for (letter of ransomNote) {
    if (magazine.includes(letter)) {
      magazine = magazine.replace(letter, "");
    } else return false;
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    s.length === t.length &&
    [...s].every((v) => {
      const idx = t.indexOf(v);
      if (idx === -1) {
        return false;
      }
      t = t.substring(0, idx) + t.substring(idx + 1);
      return true;
    })
  );
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const points = [];
  let current = head;
  while (current) {
    points.push(current);
    current = current.next;
  }
  const prevTargetNode = points[points.length - n - 1];
  const nextTargetNode = points[points.length - n + 1];
  if (prevTargetNode && nextTargetNode) {
    prevTargetNode.next = nextTargetNode;
  } else if (prevTargetNode) {
    prevTargetNode.next = null;
  } else {
    points[0] = points[0].next;
  }
  return points[0];
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const N = s.length;
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (max >= N - i) {
      break;
    }
    const obj = {};
    for (let j = i; j < N; j++) {
      if (obj[s[j]]) {
        max = Math.max(max, j - i);
        break;
      } else {
        obj[s[j]] = true;
      }
    }
  }
  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  const N = s.length;
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (max >= N - i) {
      break;
    }
    const obj = {};
    let flag = true;
    for (let j = i; j < N; j++) {
      if (obj[s[j]]) {
        max = Math.max(max, j - i);
        flag = false;
        break;
      } else {
        obj[s[j]] = true;
      }
    }
    if (flag) {
      max = Math.max(max, N - i);
    }
  }

  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let pred = "";
  let curr = "";
  for (let a of s) {
    index = curr.indexOf(a);
    if (index !== -1) {
      if (curr.length > pred.length) {
        pred = curr;
      }
    }
    curr = curr.slice(index + 1) + a;
  }
  return curr.length > pred.length ? curr.length : pred.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    let pos = cur.indexOf(s[i]);
    if (pos !== -1) {
      cur = cur.slice(pos + 1);
    }
    cur += s[i];
    max = Math.max(max, cur.length);
  }
  return max;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast) {
    fast = fast?.next?.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && slow) {
    if (!fast || !fast.next) return false;
    if (fast.next === slow) return true;

    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};
var removeElements = function (head, val) {
  if (head == null) return head;

  if (head.val == val) {
    return removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
    return head;
  }
};
var removeElements = function (head, val) {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === val && !prev) {
      prev = curr;
      curr = curr.next;
      head = curr;
      prev.next = null;
      prev = null;
      continue;
    }

    prev = curr;
    curr = curr.next;

    while (curr && curr.val === val && prev) {
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    }
  }
  return head;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) {
      mid--;
    }

    if (nums[mid] !== nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 2;
    }
  }
  return nums[left];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (
      (mid % 2 == 0 && nums[mid] == nums[mid + 1]) ||
      (mid % 2 == 1 && nums[mid] == nums[mid - 1])
    )
      left = mid + 1;
    else {
      right = mid - 1;
    }
  }
  return nums[left];
};

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights); // Minimum possible capacity
  let right = weights.reduce((sum, w) => sum + w); // Maximum possible capacity
  while (left < right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle capacity
    let total = 0;
    let requiredDays = 1;
    for (const w of weights) {
      if (total + w > mid) {
        requiredDays++; // Need another day to ship the remaining packages
        total = w;
      } else {
        total += w; // Add the package to the current day's shipment
      }
    }
    if (requiredDays <= days) {
      // The current capacity can ship all packages in the given days or less
      right = mid; // Check if a smaller capacity can also work
    } else {
      // The current capacity cannot ship all packages in the given days
      left = mid + 1; // Try a larger capacity
    }
  }
  return left; // The minimum capacity required to ship all packages within the given days
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp.pop();
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length < 2) {
    return Math.max(nums[0], nums[1] || 0);
  }
  const dp1 = [];
  dp1[0] = nums[0];
  dp1[1] = Math.max(nums[0], nums[1]);
  const dp2 = [];
  dp2[0] = 0;
  dp2[1] = nums[1];

  for (let i = 2; i < nums.length; i++) {
    if (i === nums.length - 1) {
      dp1[i] = dp1[i - 1];
    } else {
      dp1[i] = Math.max(dp1[i - 2] + nums[i], dp1[i - 1]);
    }
    dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
  }

  return Math.max(dp1[nums.length - 2], dp2[nums.length - 1]);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
  let len = nums.length;

  if (len < 4) return Math.max(...nums);

  function rob(start, end) {
    let prev = 0,
      before_prev = 0;
    for (let i = start; i < end; i++) {
      let temp = prev;
      prev = Math.max(nums[i] + before_prev, prev);
      before_prev = temp;
    }
    return prev;
  }

  return Math.max(rob(0, len - 1), rob(1, len));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  // Create an array of length 10001 to store the frequency of each number.
  const freq = new Array(10001).fill(0);
  for (const num of nums) {
    freq[num]++;
  }

  // Initialize two dynamic programming tables.
  let dp1 = 0;
  let dp2 = freq[1];

  // Fill the dynamic programming tables using the recurrence relations.
  for (let i = 2; i < freq.length; i++) {
    const prev = Math.max(dp1, dp2);
    dp2 = prev + i * freq[i];
    dp1 = prev;
  }

  // Return the maximum number of points that can be earned.
  return Math.max(dp1, dp2);
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const check = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(true)
  );
  const ans = [matrix[0][0]];
  check[0][0] = false;
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let x = 0;
  let y = 0;
  let moveIdx = 0;
  while (true) {
    const nextMove = moves[moveIdx];
    const nextX = x + nextMove[0];
    const nextY = y + nextMove[1];

    if (matrix?.[nextX]?.[nextY] !== undefined && check?.[nextX]?.[nextY]) {
      ans.push(matrix[nextX][nextY]);
      check[nextX][nextY] = false;
      x = nextX;
      y = nextY;
    } else {
      let flag = true;
      for (let i = 0; i < 4; i++) {
        moveIdx = moveIdx + 1 === moves.length ? 0 : moveIdx + 1;

        const nextMove = moves[moveIdx];
        const nextX = x + nextMove[0];
        const nextY = y + nextMove[1];

        if (matrix?.[nextX]?.[nextY] !== undefined && check?.[nextX]?.[nextY]) {
          ans.push(matrix[nextX][nextY]);
          check[nextX][nextY] = false;
          x = nextX;
          y = nextY;
          flag = false;
          break;
        }
      }
      if (flag) {
        break;
      }
    }
  }
  return ans;
};

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = new Array(cols).fill(-1); // Initialize result array with -1s

  for (let col = 0; col < cols; col++) {
    let row = 0;
    let currCol = col;
    while (row < rows) {
      if (grid[row][currCol] === 1) {
        // Board redirects ball to the right
        if (currCol === cols - 1) {
          // Ball hits right wall
          break;
        }
        currCol++;
        if (grid[row][currCol] !== 1) {
          // Ball gets stuck between two boards
          break;
        }
      } else if (grid[row][currCol] === -1) {
        // Board redirects ball to the left
        if (currCol === 0) {
          // Ball hits left wall
          break;
        }
        currCol--;
        if (grid[row][currCol] !== -1) {
          // Ball gets stuck between two boards
          break;
        }
      }
      row++;
      if (row === rows) {
        // Ball falls out of the bottom
        result[col] = currCol;
      }
    }
  }

  return result;
};

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const result = new Array(grid[0].length);

  function dfs(row, col, grid) {
    if (row === grid.length) {
      return col;
    }

    const nextColumn = col + grid[row][col];

    if (
      nextColumn < 0 ||
      nextColumn > grid[0].length - 1 ||
      grid[row][col] !== grid[row][nextColumn]
    ) {
      return -1;
    }

    return dfs(row + 1, nextColumn, grid);
  }

  for (let i = 0; i < grid[0].length; i++) {
    result[i] = dfs(0, i, grid);
  }

  return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const n = s.length;
  let total = values[s[n - 1]];
  for (let i = n - 2; i >= 0; i--) {
    if (values[s[i]] < values[s[i + 1]]) {
      total -= values[s[i]];
    } else {
      total += values[s[i]];
    }
  }
  return total;
};
