/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length;
  let cnt = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) cnt++;
  }
  if (nums[n - 1] > nums[0]) cnt++;

  return cnt <= 1;
};
