// 과일 장수
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0, N = score.length; i < N; i += m) {
    const arr = score.slice(i, i + m);
    if (arr.length < m) {
      break;
    }
    ans += arr[arr.length - 1] * m;
  }
  return ans;
}
const solution = (_, m, s) =>
  s
    .sort()
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;
//

// 푸드 파이트 대회
function solution(food) {
  const str = food
    .slice(1)
    .map((v) => Math.floor(v / 2))
    .reduce((acc, cur, idx) => acc + `${(idx + 1).toString().repeat(cur)}`, "");
  return `${str}0${str.split("").reverse().join("")}`;
}

//

// 햄버거 만들기
// 시간 초과
function solution(ingredient) {
  let str = ingredient.join("");
  let ans = 0;

  while (str.includes("1231")) {
    str = str.replace("1231", "");
    ans += 1;
  }
  return ans;
}
function solution(ingredient) {
  const stack = [];
  let ans = 0;

  ingredient.forEach((char) => {
    stack.push(char);

    if (stack.length > 2) {
      const str = stack.slice(-4).join("");
      if (str === "1231") {
        ans++;
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
      }
    }
  });
  return ans;
}
function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}
//

// 옹알이 (2)
function solution(babbling) {
  const possible = ["aya", "ye", "woo", "ma"];
  const N = babbling.length,
    M = possible.length;
  let ans = 0;

  for (let i = 0; i < N; i++) {
    let txt = babbling[i];
    for (let j = 0; j < M; j++) {
      const pos = possible[j];
      if (txt.includes(pos.repeat(2))) {
        break;
      }
      txt = txt.replaceAll(pos, "0");
    }

    if (!txt.split("0").filter(Boolean).length) {
      ans += 1;
    }
  }
  return ans;
}
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}
//

// 콜라 문제
function solution(a, b, n, ans = 0) {
  const int = Math.floor(n / a);
  if (int === 0) {
    return ans;
  }
  return solution(a, b, n - int * a + int * b, ans + int * b);
}
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
//
