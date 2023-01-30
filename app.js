/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const obj = s.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  let flag = false;
  const ans = Object.keys(obj)
    .map((v) => {
      if (obj[v] % 2 === 0) {
        return obj[v];
      }
      flag = true;
      return obj[v] - 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  return flag ? ans + 1 : ans;
};
/**
 * @param {string} s
 * @return {number}
 */

// Idea is to leverage on the idea of a Set (an array that only contains unique elements)
// This can be done by checking for each element in a string, if it doesn't exist in the set, it will be added to the set
// Otherwise, we can increase a counter by the value of 2 (indicating we have 2 duplicate letters in our potential palindrom) and remove that character from the set
// If the letter persist again, twice, we repeat what happened above and the counter will increase by another 2
// In the end, if the set is empty, it indicates all values from the string are duplicates of each other and the string is even. Otherwise, there is a unique value from the string or the string consists of non-unique elements but is uneven in length.

var longestPalindrome = function (s) {
  const map = new Map();
  let count = 0;

  for (const char of s) {
    if (map.has(char)) {
      count += 2;
      map.delete(char);
    } else {
      map.set(char);
    }
  }

  return count + (map.size > 0 ? 1 : 0);
};
