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

// 6 kyu Playing with digits
{
  function digPow(n, p) {
    const ans =
      n
        .toString()
        .split("")
        .map((v, i) => Number(v) ** (i + p))
        .reduce((acc, cur) => acc + cur) / n;
    return ans === parseInt(ans) ? ans : -1;
  }
}

// 5 kyu The Hashtag Generator
{
  function generateHashtag(str) {
    const txt = str
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((v) => v.substring(0, 1).toUpperCase() + v.substring(1))
      .join("");
    return !txt || txt.length > 139 ? false : `#${txt}`;
  }
}
// 5 kyu Product of consecutive Fib numbers
{
  function productFib(prod) {
    const arr = [0, 1, 1];
    while (true) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      const tmp = arr[arr.length - 2] * arr[arr.length - 1];
      if (tmp >= prod) {
        return [arr[arr.length - 2], arr[arr.length - 1], tmp === prod];
      }
    }
  }
  function productFib(prod) {
    let [a, b] = [0, 1];
    while (a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
  }
}

// function encodeRailFenceCipher(string, numberRails) {
//   const arr = new Array(numberRails).fill("");
//   let isIncrease = true;
//   let idx = 0;
//   for (let i = 0; i < string.length; i++) {
//     arr[idx] += string[i];
//     if (isIncrease) {
//       idx += 1;
//     } else {
//       idx -= 1;
//     }
//     if (idx === numberRails - 1) isIncrease = false;
//     if (idx === 0) isIncrease = true;
//   }
//   let ans = "";
//   for (let i = 0; i < arr.length; i++) {
//     ans += arr[i];
//   }
//   return ans;
//   // return arr.reduce((acc, cur) => acc + cur, "");
// }
// function decodeRailFenceCipher(string, numberRails) {
//   const N = string.length;
//   const arr = Array.from({ length: numberRails }, () => new Array(N).fill(" "));

//   let numberRailsCnt = numberRails + numberRails - 2;
//   let idx = 0;
//   let cnt = 0;

//   for (let i = 0; i < N; i++) {
//     if (cnt >= N) {
//       idx += 1;
//       cnt = idx;
//     }
//     if (idx === 0 || idx === numberRails - 1) {
//       arr[idx][cnt] = string[i];
//       cnt += numberRailsCnt;
//     } else {
//       arr[idx][cnt] = string[i];
//       cnt += numberRailsCnt / 2;
//     }
//   }
//   let ans = "";
//   let isIncrease = true;
//   let idx2 = 0;
//   for (let i = 0; i < N; i++) {
//     ans += arr[idx2][i];
//     if (isIncrease) {
//       idx2 += 1;
//     } else {
//       idx2 -= 1;
//     }
//     if (idx2 === numberRails - 1) isIncrease = false;
//     if (idx2 === 0) isIncrease = true;
//   }
//   return ans;
// }

// console.log(
//   "WEAREDISCOVEREDFLEEATONCE",
//   encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3),
//   "WECRLTEERDSOEEFEAOCAIVDEN"
// );

// console.log(
//   "WECRLTEERDSOEEFEAOCAIVDEN",
//   decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)
// );

// 4 kyu Permutations
{
  const getCombinations = (arr, nums) => {
    const results = [];
    if (nums === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index) => {
      const rest = arr.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, nums - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      console.log(attached);
      results.push(...attached);
    });
    return results; // 결과 담긴 results return
  };

  const getPermutations = (arr, nums) => {
    const results = [];
    if (nums === 1) return arr.map((val) => [val]);
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, idx) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, nums - 1);
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((val) => [fixed, ...val]);
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };
}
