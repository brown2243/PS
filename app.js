// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   let prefix = "";

//   outer: for (let i = 0; i < strs[0].length; i++) {
//     const nowChar = strs[0]?.[i];
//     if (!now) {
//       break;
//     }
//     for (let j = 1; j < strs.length; j++) {
//       const char = strs[j]?.[i];
//       if (nowChar !== char) {
//         break outer;
//       }
//     }
//     prefix += nowChar;
//   }
//   return prefix;
// };

// queueMicrotask(() => {
//   console.log("test");
// });

const makeOne = (N, K) => {
  let cnt = 0;
  while (N !== 1) {
    const remain = N % K;
    if (remain === 0) {
      N /= K;
      cnt += 1;
    } else {
      N -= remain;
      cnt += remain;
    }
  }
  return cnt;
};
makeOne(25, 5);
```typescript
// 예제 3-4 1이 될 때 까지
// N, K
const makeOne = (N, K) => {
  let cnt = 0;
  while (N !== 1) {
    if (N % K === 0) {
      N /= K;
    } else {
      N -= 1;
    }
    cnt += 1;
  }
  return cnt;
};
makeOne(25, 5);
```;
