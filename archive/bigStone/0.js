var permutation = (arr, r, depth = 0) => {
  if (r === depth) {
    console.log(arr.slice(0, r).join(" "));
    return;
  }
  for (let i = depth; i < arr.length; i++) {
    [arr[i], arr[depth]] = [arr[depth], arr[i]];
    permutation(arr, r, depth + 1);
    [arr[i], arr[depth]] = [arr[depth], arr[i]];
  }
};

//
const N = 5;
const permutation = (arr = []) => {
  if (arr.length === 3) {
    console.log(arr);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!arr.includes(i)) {
      arr.push(i);
      permutation(arr);
      arr.pop();
    }
  }
};
permutation();

const arr = [1, 2, 3, 4, 5];

const combination = (start = 0, ans = []) => {
  if (ans.length === 3) {
    console.log(ans);
    return;
  }

  for (let i = start; i < arr.length; i += 1) {
    ans.push(arr[i]);
    combination(i + 1, ans);
    ans.pop();
  }
};

combination();

const split = (str = "", delimiter = "") => {
  const arr = [];
  while (str.indexOf(delimiter) !== -1) {
    const idx = str.indexOf(delimiter);
    const token = str.substring(0, idx);
    arr.push(token);
    str = str.substring(idx + delimiter.length);
  }
  arr.push(str);
  return arr;
};
