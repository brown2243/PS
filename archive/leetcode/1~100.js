// 1. Two Sum
var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    const rest = target - nums[i];
    if (rest in obj) {
      return [i, obj[rest]];
    }
    obj[nums[i]] = i;
  }
  return null;
};

// 7. Reverse Integer
var reverse = function (x) {
  const isPositive = x >= 0;
  const arr = String(x).split("").reverse();
  if (!isPositive) arr.pop();
  const num = arr.join("");
  const ans = isPositive ? Number(num) : Number(-num);
  function check(ans) {
    if (-(2 ** 31) <= ans && ans <= 2 ** 31 - 1) {
      return true;
    }
    return false;
  }
  return check(ans) ? ans : 0;
};

// 9. Palindrome Number
var isPalindrome = function (x) {
  x = String(x);
  let i = 0,
    j = x.length - 1;
  while (i < j) {
    if (x[i] !== x[j]) return false;
    i++;
    j--;
  }
  return true;
};

// 13. Roman to Integer
var romanToInt = function (s) {
  const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = s.split("");
  return arr.reduce((acc, cur, idx) => {
    if (arr[idx + 1]) {
      if (cur === "I" && (arr[idx + 1] === "V" || arr[idx + 1] === "X")) {
        return acc - Roman[cur];
      } else if (
        cur === "X" &&
        (arr[idx + 1] === "L" || arr[idx + 1] === "C")
      ) {
        return acc - Roman[cur];
      } else if (
        cur === "C" &&
        (arr[idx + 1] === "D" || arr[idx + 1] === "M")
      ) {
        return acc - Roman[cur];
      }
    }
    return acc + Roman[cur];
  }, 0);
};

// 14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
  let ans = "";
  const arr = strs.sort((a, b) => a.length - b.length);

  outer: for (let idx = 0; idx < arr[0].length; idx++) {
    const tmp = arr[0][idx];
    for (let i = 1; i < arr.length; i++) {
      if (tmp !== arr[i][idx]) break outer;
    }
    ans += tmp;
  }
  return ans;
};

// 20. Valid Parentheses
var isValid = function (s) {
  const stack = [];
  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (["(", "{", "["].includes(val)) stack.push(val);
    else {
      if (stack[stack.length - 1] && obj[val] === stack[stack.length - 1]) {
        if (stack.length > 0) stack.pop();
        else return false;
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};

// 21. Merge Two Sorted Lists
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  if (nums.length < 1) return 0;

  let left = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[left]) {
      left++;
      nums[left] = nums[i];
      count++;
    }
  }
  return count;
};

// 27. Remove Element
var removeElement = function (nums, val) {
  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

// 28. Implement strStr()
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// 35. Search Insert Position
var searchInsert = function (nums, target) {
  const idx = nums.findIndex((v) => target <= v);
  return idx < 0 ? nums.length : idx;
};

// 53. Maximum Subarray
var maxSubArray = function (nums) {
  const len = nums.length;
  let curSum = nums[0],
    ans = nums[0];

  for (let i = 1; i < len; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    if (curSum > ans) ans = curSum;
  }
  return ans;
};

// 58. Length of Last Word
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

// 66. Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) digits.unshift(1);
    }
  }
  return digits;
};

// 67. Add Binary
var addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

// 69. Sqrt(x)
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

// 70. Climbing Stairs
var climbStairs = function (n) {
  const arr = [0, 1, 2, 3, 5];
  for (let i = 5; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

// 83. Remove Duplicates from Sorted List
var deleteDuplicates = function (head) {
  let now = head;
  while (now !== null && now.next !== null) {
    if (now.val === now.next.val) now.next = now.next.next;
    else now = now.next;
  }
  return head;
};

// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m) {
      nums1[i] = nums2[i - m];
    }
  }
  return nums1.sort((a, b) => a - b);
};

// 94. Binary Tree Inorder Traversal
var inorderTraversal = function (root) {
  const arr = [];
  recursiveInOrder(root);
  function recursiveInOrder(node) {
    if (!node) return;
    const { val, left, right } = node;

    recursiveInOrder(left);
    arr.push(val);
    recursiveInOrder(right);
  }
  return arr;
};

// 100. Same Tree
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
