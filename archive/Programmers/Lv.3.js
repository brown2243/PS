// KAKAO
// 보석 쇼핑
function solution(gems) {
  const cnt = new Set(gems).size;
  const gemMap = new Map();
  let answer = [1, gems.length];

  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === cnt) {
      const cand = [gemMap.values().next().value + 1, i + 1];
      answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
    }
  });

  return answer;
}

// 스티커 모으기(2)
function solution(sticker) {
  const n = sticker.length;

  if (n < 2) {
    return Math.max(...sticker);
  }

  const dp1 = new Array(n).fill(0);
  const dp2 = new Array(n).fill(0);

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];

  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + sticker[i], dp1[i - 1]);
  }

  dp2[1] = sticker[1];

  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }

  return Math.max(dp1[n - 2], dp2[n - 1]);
}
