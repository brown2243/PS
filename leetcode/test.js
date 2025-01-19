/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  return (
    (nums2.length % 2 === 0 ? 0 : nums1.reduce((acc, cur) => acc ^ cur)) ^
    (nums1.length % 2 === 0 ? 0 : nums2.reduce((acc, cur) => acc ^ cur))
  );
};
