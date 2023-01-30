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
