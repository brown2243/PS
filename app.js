/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  outer: for (let i = 0; i < strs[0].length; i++) {
    const nowChar = strs[0]?.[i];
    if (!now) {
      break;
    }
    for (let j = 1; j < strs.length; j++) {
      const char = strs[j]?.[i];
      if (nowChar !== char) {
        break outer;
      }
    }
    prefix += nowChar;
  }
  return prefix;
};
