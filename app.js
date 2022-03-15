function solution(S, P, Q) {
  const ans = [];
  const shock = ["A", "C", "G", "T"];

  for (let i = 0; i < P.length; i++) {
    const arr = Array.from(new Set(S.slice(P[i], Q[i] + 1)));
    const idx = shock.findIndex((v) => arr.indexOf(v) !== -1);
    ans.push(idx + 1);
  }
  return ans;
}
solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);
