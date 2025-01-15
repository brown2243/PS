/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  const binery1 = num1.toString(2);
  const binery2 = num2.toString(2);

  let cnt = 0;
  for (let i = 0; i < binery2.length; i++) {
    if (binery2[i] === "1") cnt++;
  }

  const ans = [];
  for (let i = 0; i < binery1.length; i++) {
    if (cnt === 0) {
      ans.push(..."0".repeat(binery1.length - i).split(""));
      break;
    }
    if (binery1[i] === "1") {
      ans.push("1");
      cnt--;
    } else {
      ans.push("0");
    }
  }

  for (let i = ans.length - 1; i >= 0; i--) {
    if (cnt === 0) {
      break;
    }
    if (ans[i] === "0") {
      ans[i] = "1";
      cnt--;
    }
  }
  if (cnt > 0) {
    ans.push(..."1".repeat(cnt).split(""));
  }
  return parseInt(ans.join(""), 2);
};

num1 = 65;
num2 = 84;
minimizeXor(num1, num2);
