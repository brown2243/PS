/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let globalAsc = 1;
  let globalDesc = 1;
  let localAsc = 1;
  let localDesc = 1;

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const now = nums[i];

    if (prev < now) {
      localAsc += 1;
    } else {
      localAsc = 1;
    }
    if (prev > now) {
      localDesc += 1;
    } else {
      localDesc = 1;
    }
    if (globalAsc < localAsc) {
      globalAsc = localAsc;
    }
    if (globalDesc < localDesc) {
      globalDesc = localDesc;
    }
  }
  return Math.max(globalAsc, globalDesc);
};
