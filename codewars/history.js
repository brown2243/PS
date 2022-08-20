//  6 kyu  Stop gninnipS My sdroW!

{
  function spinWords(str) {
    return str
      .split(" ")
      .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
      .join(" ");
  }
}
//  6 kyu  Find the odd int
{
  function findOdd(A) {
    return Object.entries(
      A.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
      }, {})
    ).find((v) => v[1] % 2 === 1)[0];
  }
}
// 7 kyu Categorize New Member
{
  function openOrSenior(data) {
    return data.map((v) => (v[0] >= 55 && v[1] > 7 ? "Senior" : "Open"));
  }
}
// 6 kyu Tribonacci Sequence
{
  function tribonacci(signature, n) {
    if (n < 4) return signature.slice(0, n);
    for (let i = 3; i < n; i++) {
      signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }
    return signature;
  }
}
// 7 kyu Sum of odd numbers
console.log(rowSumOddNumbers(10));
function rowSumOddNumbers(n) {
  return new Array((n * (n + 1)) / 2).fill(1).map((v, i) => v + i * 2);
}

// 7 kyu Sum of odd numbers
{
  function rowSumOddNumbers(n) {
    return new Array((n * (n + 1)) / 2)
      .fill(1)
      .map((v, i) => v + i * 2)
      .slice((n * (n + 1)) / 2 - n, (n * (n + 1)) / 2)
      .reduce((acc, cur) => acc + cur);
  }
}

// 5 kyu Rot13
function rot13(message) {
  const alphaUpper = new Array(26)
    .fill(0)
    .map((e, i) => String.fromCharCode(i + 65));
  const alphaLower = new Array(26)
    .fill(0)
    .map((e, i) => String.fromCharCode(i + 97));
  return message
    .split("")
    .map((v) => {
      if (alphaUpper.includes(v)) {
        const idx = alphaUpper.indexOf(v) + 13;
        const rotIdx = idx >= 26 ? idx - 26 : idx;
        return alphaUpper[rotIdx];
      }
      if (alphaLower.includes(v)) {
        const idx = alphaLower.indexOf(v) + 13;
        const rotIdx = idx >= 26 ? idx - 26 : idx;
        console.log(rotIdx);
        return alphaLower[rotIdx];
      }
      return v;
    })
    .join("");
}
