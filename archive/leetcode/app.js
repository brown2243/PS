/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let ans = 0;
  for (let min = 0, max = 0, i = 0, j = 0, n = nums.length; i < n; i++) {
    const num = nums[i];
    if (i === 0) {
      min = num - 2;
      max = num + 2;
      ans += 1;
    }
  }
  // for (let cnt = 2; cnt <= n; cnt++) {
  //   for (let start = 0; start <= n - cnt; start++) {
  //     const num = nums[start];
  //     let min = num;
  //     let max = num;
  //     let flag = true;
  //     for (let end = start + 1; end < start + cnt; end++) {
  //       const next = nums[end];
  //       min = Math.min(min, next);
  //       max = Math.max(max, next);
  //       if (max - min > 2) {
  //         flag = false;
  //         break;
  //       }
  //     }
  //     if (flag) ans++;
  //   }
  // }
  return ans;
};

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const n = target.length;

  let i = 0,
    j = 0;

  while (i <= n && j <= n) {
    while (i < n && start[i] === "_") i++;
    while (j < n && target[j] === "_") j++;

    if (i === n || j === n) {
      return i === j;
    }

    if (start[i] !== target[j]) return false;

    if (start[i] === "L") {
      if (i < j) return false;
    } else {
      if (i > j) return false;
    }

    i++;
    j++;
  }
  return true;
};
start = "_L";
target = "LR";
canChange(start, target);
