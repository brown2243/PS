/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const arr = new Array(26).fill(0);
  const aCode = "a".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt() - aCode;
    arr[code] += 1;
  }

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    if (arr[i] % 2 === 0) ans += 2;
    else ans += 1;
  }
  return ans;
};
