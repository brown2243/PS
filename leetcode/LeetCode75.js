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

const check = (node, p, q) => node.val === p.val || node.val === q.val;

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
