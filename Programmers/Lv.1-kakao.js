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
