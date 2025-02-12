/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const max = new Array(82).fill(0);
  let ans = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let key = 0,
      temp = x;

    while (temp !== 0) {
      key += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (max[key] !== 0) ans = Math.max(ans, num + max[key]);
    max[key] = Math.max(max[key], num);
  }
  return ans;
};
