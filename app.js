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
