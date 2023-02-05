/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pObj = {};

  for (const key of p) {
    if (!(key in pObj)) {
      pObj[key] = 0;
    }
    pObj[key]++;
  }

  let left = 0;
  let right = 0;
  let checkCount = p.length;
  const result = [];
  while (right < s.length) {
    if (pObj[s[right]] > 0) checkCount--;

    pObj[s[right]]--;
    right++;

    if (checkCount === 0) result.push(left);

    if (right - left === p.length) {
      if (pObj[s[left]] >= 0) checkCount++;
      pObj[s[left]]++;
      left++;
    }
  }
  return result;
};

var characterReplacement = function (s, k) {
  let left = 0,
    right = 0,
    maxCount = 0,
    maxLength = 0;
  let counts = Array(26).fill(0);
  for (right = 0; right < s.length; right++) {
    counts[s.charCodeAt(right) - "A".charCodeAt(0)]++;
    maxCount = Math.max(
      maxCount,
      counts[s.charCodeAt(right) - "A".charCodeAt(0)]
    );
    while (right - left + 1 - maxCount > k) {
      counts[s.charCodeAt(left) - "A".charCodeAt(0)]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
