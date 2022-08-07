{
  // 거리 두기 확인하기
  function solution(places) {
    return places.map((place) => {
      return place.some((row, rowIndex) => {
        return row.split("").some((column, index, arr) => {
          if (column == "X") return false;

          const userCount = [
            arr[index - 1] || "",
            arr[index + 1] || "",
            (place[rowIndex - 1] || "").charAt(index),
            (place[rowIndex + 1] || "").charAt(index),
          ].filter((v) => v == "P").length;

          if (
            (column == "P" && userCount > 0) ||
            (column == "O" && userCount >= 2)
          ) {
            return true;
          }

          return false;
        });
      })
        ? 0
        : 1;
    });
  }
  // 엄청난 천재가 푼듯
  // BTS 방식으로 코드 짰는데, 오랜만이라 감잃어서 완성은 못하고 답봄 ㅜㅠㅜ
  // 아래코드가 일반적인 방식
  const iskeepingDistance = (place) => {
    let roomInfo = place.map((rooms) => rooms.split(""));

    let queue = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (roomInfo[i][j] === "P") {
          queue.push([i, j]);
        }
      }
    }

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, 1, -1];

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
        if (roomInfo[nx][ny] === "X") continue;
        if (roomInfo[nx][ny] === "P") return 0;

        for (let j = 0; j < 4; j++) {
          let aroundNX = nx + dx[j];
          let aroundNY = ny + dy[j];

          if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5)
            continue;
          if (aroundNX === x && aroundNY === y) continue;
          if (roomInfo[aroundNX][aroundNY] === "P") return 0;
        }
      }
    }

    return 1;
  };

  function solution(places) {
    let keepingDistance = [];
    for (let i = 0; i < 5; i++) {
      keepingDistance.push(iskeepingDistance(places[i]));
    }

    return keepingDistance;
  }
}

{
  // 교점에 별 만들기

  function getPoint(line1, line2) {
    const [ax1, by1, c1] = line1;
    const [ax2, by2, c2] = line2;
    // 교점이 없는 경우
    if (ax1 * by2 - ax2 * by1 === 0) {
      return [];
    }
    const x = (by1 * c2 - by2 * c1) / (ax1 * by2 - ax2 * by1);
    return [x, -(ax1 / by1) * x - c1 / by1];
  }

  function solution(lines) {
    const box = new Set();
    const N = lines.length;
    const Xs = [];
    const Ys = [];

    for (let i = 0; i < N - 1; i++) {
      const line1 = lines[i];
      for (let j = i + 1; j < N; j++) {
        const line2 = lines[j];
        const point = getPoint(line1, line2);
        const [x, y] = point;
        if (x === undefined) continue;
        if (!(parseInt(x) === x) || !(parseInt(y) === y)) continue;
        Xs.push(x);
        Ys.push(y);
        box.add(point);
      }
    }
    //   중복 제거 및 정수 아닌 포인트 제거
    const arr = Array.from(box);
    if (arr.length === 1) {
      return ["*"];
    }

    const minX = Math.min(...Xs),
      minY = Math.min(...Ys),
      maxX = Math.max(...Xs),
      maxY = Math.max(...Ys);

    const YN = maxY - minY + 1;
    const sheet = Array.from({ length: YN }, () =>
      new Array(maxX - minX + 1).fill(".")
    );

    arr.forEach((line) => {
      const [x, y] = line;
      sheet[YN - (y - minY) - 1][x - minX] = "*";
    });
    return sheet.map((row) => row.join(""));
  }
}
