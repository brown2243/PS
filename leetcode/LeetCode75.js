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
