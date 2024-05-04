function solution(n, works) {
  works.sort((a, b) => b - a);

  while (n > 0) {
    let max = works[0];
    for (let i = 0; i < works.length; i++) {
      if (n > 0 && works[i] === max) {
        works[i]--;
        n--;
      }
    }
  }
  return works.reduce((acc, cur) => acc + (cur <= 0 ? 0 : cur ** 2), 0);
}
