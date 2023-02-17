/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  const N = s.length;
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (max >= N - i) {
      break;
    }
    const obj = {};
    let flag = true;
    for (let j = i; j < N; j++) {
      if (obj[s[j]]) {
        max = Math.max(max, j - i);
        flag = false;
        break;
      } else {
        obj[s[j]] = true;
      }
    }
    if (flag) {
      max = Math.max(max, N - i);
    }
  }

  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let pred = "";
  let curr = "";
  for (let a of s) {
    index = curr.indexOf(a);
    if (index !== -1) {
      if (curr.length > pred.length) {
        pred = curr;
      }
    }
    curr = curr.slice(index + 1) + a;
  }
  return curr.length > pred.length ? curr.length : pred.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    let pos = cur.indexOf(s[i]);
    if (pos !== -1) {
      cur = cur.slice(pos + 1);
    }
    cur += s[i];
    max = Math.max(max, cur.length);
  }
  return max;
};
