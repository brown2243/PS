// 5 kyu Rot13
function rot13(message) {
  const alphaUpper = new Array(26)
    .fill(0)
    .map((e, i) => String.fromCharCode(i + 65));
  const alphaLower = new Array(26)
    .fill(0)
    .map((e, i) => String.fromCharCode(i + 97));
  console.log(alphaLower);
  return message
    .split("")
    .map((v) => {
      if (alphaUpper.includes(v)) {
        const idx = alphaUpper.indexOf(v) + 13;
        const rotIdx = idx > 26 ? idx - 26 : idx;
        return alphaUpper[rotIdx];
      }
      if (alphaLower.includes(v)) {
        const idx = alphaLower.indexOf(v) + 13;
        const rotIdx = idx > 26 ? idx - 26 : idx;
        console.log(rotIdx);
        return alphaLower[rotIdx];
      }
      return v;
    })
    .join("");
}

console.log(rot13("abcdefghijklmnopqrstuvwxyz"));
