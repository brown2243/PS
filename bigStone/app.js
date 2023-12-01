// 무인도 여행
function solution(maps) {
  const n = maps.length,
    m = maps[0].length;
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const answer = [];

  const dfs = (i, j) => {
    let days = 0;

    const move = (i, j) => {
      if (0 <= i && i < n && 0 <= j && j < m) {
        if (visited[i][j] || maps[i][j] === "X") {
          return;
        }
        visited[i][j] = 1;
        days += Number(maps[i][j]);

        move(i + 1, j);
        move(i - 1, j);
        move(i, j + 1);
        move(i, j - 1);
      }
    };

    move(i, j);
    if (days > 0) {
      answer.push(days);
    }

    return days;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dfs(i, j);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
