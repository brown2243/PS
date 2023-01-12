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
    console.log(a, aPoint, b, bPoint);
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
solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
