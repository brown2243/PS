/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let firstIdx = 0;
  let lastIdx = nums.length - 1;
  while (firstIdx <= lastIdx) {
    const selectIdx = Math.floor((firstIdx + lastIdx) / 2);

    if (nums[selectIdx] === target) {
      return selectIdx;
    }
    if (nums[selectIdx] < target) {
      firstIdx = selectIdx + 1;
    } else {
      lastIdx = selectIdx - 1;
    }
  }
  return -1;
};

const ans = search([2, 5], 2);
console.log(ans);
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
