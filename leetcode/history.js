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
// 다시
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

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    const key = fn(cur);
    if (!(key in acc)) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});
};

/**
 * @param {number[]} cost
 * @return {number}
 */
// 다시
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[n - 1], dp[n - 2]);
};
/**
 * @param {number} n
 * @return {number}
 */
// 다시
var numTilings = function (n) {
  const mod = 10 ** 9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for (let i = 4; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
  }
  return dp[n];
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);

  const arr = [];
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i1 = 0,
    i2 = 0;

  while (i1 < n1 || i2 < n2) {
    const val1 = arr1?.[i1];
    const val2 = arr2?.[i2];
    if (!val1) {
      arr.push(...arr2.slice(i2));
      break;
    }
    if (!val2) {
      arr.push(...arr1.slice(i1));
      break;
    }
    if (val1.id === val2.id) {
      const val = { ...val1, ...val2 };
      arr.push(val);
      i1++;
      i2++;
    } else if (val1.id < val2.id) {
      arr.push(val1);
      i1++;
    } else {
      arr.push(val2);
      i2++;
    }
  }
  return arr;
};
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function (arr1, arr2) {
  const ids = {};

  arr1.forEach((item) => {
    ids[item.id] = item;
  });

  arr2.forEach((item) => {
    const { id } = item;

    if (id in ids) {
      ids[id] = { ...ids[id], ...item };
    } else {
      ids[id] = item;
    }
  });

  return Object.values(ids);
};

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const recur = (arr, n) => {
    if (n <= 0) {
      return arr;
    }
    for (let i = 0; i < arr.length; i++) {
      const now = arr[i];
      if (Array.isArray(now)) {
        const leng = now.length;
        arr.splice(i, 1, ...now);
        i += leng - 1;
      }
    }
    return recur(arr, n - 1);
  };
  return recur([...arr], n);
};

var flat = function (arr, n) {
  const newArr = [];

  const recur = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth < n) {
        recur(arr[i], depth + 1);
      } else {
        newArr.push(arr[i]);
      }
    }
  };

  recur(arr, 0);
  return newArr;
};

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  const recur = (obj) => {
    let wasArray = false;

    if (Array.isArray(obj)) {
      wasArray = true;
      obj = obj.reduce((acc, cur, idx) => {
        acc[idx] = cur;
        return acc;
      }, {});
    }

    for (let key in obj) {
      const val = obj[key];
      if (!Boolean(val)) {
        delete obj[key];
      } else if ("object" === typeof val) {
        obj[key] = recur(val);
      }
    }

    return wasArray ? Object.values(obj) : obj;
  };
  return recur(obj);
};

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  function solve(obj) {
    if (!obj) return false;
    if (typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
      let res = [];
      obj.forEach((el) => {
        let subRes = solve(el);
        if (subRes) res.push(subRes);
      });

      return res;
    } else {
      let res = {};
      Object.entries(obj).forEach(([key, val]) => {
        let subRes = solve(val);
        if (subRes) res[key] = subRes;
      });
      return res;
    }
  }

  return solve(obj);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 다시
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let amnt = 1; amnt < dp.length; amnt++) {
    coins.forEach((coin) => {
      if (amnt < coin) {
        return;
      }
      if (dp[amnt - coin] !== Number.MAX_SAFE_INTEGER) {
        dp[amnt] = Math.min(dp[amnt], dp[amnt - coin] + 1);
      }
    });
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
