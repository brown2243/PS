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

// 삼총사
// 재귀 푸는 방법이 생각이 안났음
function solution(number) {
  let ans = 0;

  const combination = (arr, start) => {
    if (arr.length === 3) {
      ans += arr.reduce((acc, cur) => acc + cur) === 0 ? 1 : 0;
    }
    for (let i = start; i < number.length; i++) {
      combination([...arr, number[i]], i + 1);
    }
  };
  combination([], 0);
  return ans;
}

// 숫자 짝궁
function solution(X, Y) {
  const x = X.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
  const y = Y.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  let ans = "";
  for (let i = 9; i > -1; i--) {
    const nowX = x[i];
    const nowY = y[i];
    const min = Math.min(nowX, nowY);

    if (!Number.isNaN(min)) {
      ans += i.toString().repeat(min);
    }
  }

  if (ans === "") return "-1";
  if (Number(ans) === 0) return "0";
  return ans;
}

// KAKAO
// 성격 유형 검사하기
function solution(survey, choices) {
  const MIND = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  const pointObj = MIND.reduce((acc, cur) => {
    const [a, b] = cur;
    acc[a] = 0;
    acc[b] = 0;
    return acc;
  }, {});

  for (let i = 0, N = survey.length; i < N; i++) {
    const a = survey[i][0];
    const b = survey[i][1];

    const choice = choices[i];
    if (choice === 4) {
      continue;
    }
    if (choice > 4) {
      pointObj[b] += choice - 4;
    } else {
      pointObj[a] += 4 - choice;
    }
  }

  let ans = "";
  MIND.forEach((val) => {
    const [a, b] = val;
    const aPoint = pointObj[a];
    const bPoint = pointObj[b];
    if (aPoint > bPoint) {
      ans += a;
    }
    if (aPoint < bPoint) {
      ans += b;
    }
    if (aPoint === bPoint) {
      ans += a.charCodeAt() - b.charCodeAt() > 0 ? b : a;
    }
  });

  return ans;
}
function solution(survey, choices) {
  const data = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const score = choices[i] - 4;
    let type = survey[i].split("")[score < 0 ? 0 : 1];
    data[type] += Math.abs(score);
  }

  const { R, T, C, F, J, M, A, N } = data;
  return `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${
    A >= N ? "A" : "N"
  }`;
}
//

// 신규 아이디 추천
function solution(new_id) {
  const sample = "abcdefghijklmnopqrstuvwxyz0123456789-_.".split("");
  const dot = "..";
  new_id = new_id
    .toLowerCase()
    .split("")
    .filter((v) => sample.includes(v));
  new_id = new_id
    .map((v, i) => {
      if (v === ".") {
        if (new_id[i + 1] === ".") {
          return "";
        }
      }
      return v;
    })
    .filter((v) => v);

  if (new_id[0] === ".") new_id[0] = "";

  if (new_id[new_id.length - 1] === ".") new_id[new_id.length - 1] = "";

  new_id = new_id.join("");
  if (new_id === "") {
    new_id = "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15);
    if (new_id.charAt(new_id.length - 1) === ".") {
      new_id = new_id.slice(0, -1);
    }
  }
  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id += new_id.charAt(new_id.length - 1);
    }
  }
  return new_id;
}
