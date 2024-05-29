/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;

  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(false));
  dp[0][0] = true;

  let last = s[0];

  for (let i = 1; i <= n; i++) {
    dp[i][i] = true;
    for (let j = i + 1; j <= n; j++) {
      if (s[i - 1] === s[j - 1] && (i - j <= 2 || dp[j + 1][i - 1])) {
      }
    }
  }
};
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  asteroids.forEach((asteroid) => {
    if (stack.length === 0) {
      stack.push(asteroid);
      return;
    }
    if (
      (stack[stack.length - 1] > 0 && asteroid > 0) ||
      (stack[stack.length - 1] < 0 && asteroid < 0)
    ) {
      stack.push(asteroid);
    } else {
      while (stack.length > 0) {
        const l = Math.abs(stack[stack.length - 1]);
        const n = Math.abs(asteroid);
        if (l === n) {
          stack.pop();
          break;
        } else if (l < n) {
          stack.pop();
        } else {
          stack[stack.length - 1] = asteroid;
          break;
        }
      }
    }
  });
  return stack;
};
