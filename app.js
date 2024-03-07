function isInteresting(number, awesomePhrases) {
  const check = checking(awesomePhrases);
  if (check(number)) {
    return 2;
  }
  if (check(number + 1) || check(number + 2)) {
    return 1;
  }
  return 0;
}
const checking = (awesomePhrases) => (num) => {
  if (num < 100) {
    return false;
  }
  if (awesomePhrases.includes(num)) {
    return true;
  }
  const str = num.toString();
  if (Number(str.slice(1)) === 0) {
    return true;
  }
  if ("1234567890".includes(str)) {
    return true;
  }
  if ("9876543210".includes(str)) {
    return true;
  }
  const strArr = str.split("");
  if (str === strArr.reverse().join("")) {
    return true;
  }
  return false;
};
