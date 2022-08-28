function permutations(string) {
  const res = getPermutations(string.split(""), string.length);
  return res.map((v) => v.join(""));
}

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

console.log(permutations("aabb"));
// 'aabb', ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
