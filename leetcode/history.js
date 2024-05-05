/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  3;
  while (left < right) {
    const cur = numbers[left] + numbers[right];
    if (cur === target) {
      return [left + 1, right + 1];
    } else if (cur < target) {
      left++;
    } else {
      right--;
    }
  }
};

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = (fn, t) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const small = height[left] < height[right] ? left : right;
    const cur = (right - left) * height[small];
    max = Math.max(cur, max);
    if (small === left) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0,
    right = nums.length - 1,
    cnt = 0;
  nums.sort((a, b) => a - b);
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      cnt++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return cnt;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        obj[`${nums[i]}${nums[j]}${nums[k]}`] = [nums[i], nums[j], nums[k]];
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return Object.values(obj);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const now = nums[i];
    if (now > 0) {
      break;
    }
    if (i > 0 && now === nums[i - 1]) {
      continue;
    }
    const localTarget = 0 - now;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[j] + nums[k];
      if (localTarget < sum) {
        k--;
      } else if (localTarget > sum) {
        j++;
      } else {
        ans.push([nums[i], nums[j], nums[k]]);
        const leftVal = nums[j];
        const rightVal = nums[k];
        j++;
        k--;
        while (leftVal === nums[j] && rightVal === nums[k]) {
          j++;
          k--;
        }
      }
    }
  }
  return ans;
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const n = functions.length;
    const arr = new Array(n);
    let cnt = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((v) => {
          arr[i] = v;
          cnt++;
          if (cnt === n) {
            resolve(arr);
          }
        })
        .catch(reject);
    });
  });
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const dp = [0, 1, 1, 2, 4];
  for (let i = 5; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [nums[0], nums[1]];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[dp.length - 1];
};
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [0, 1, 2, 3];
  // 4
  // 1 1 1 1
  // 1 1 2
  // 1 2 1
  // 2 1 1
  // 2 2
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  const maxLength = Math.max(n, ...wordDict.map((v) => v.length));

  for (let i = 1; i < n + 1; i++) {
    for (let j = i - 1; j > Math.max(i - maxLength - 1, -1); j--) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
      }
    }
  }
  return dp[n];
};
