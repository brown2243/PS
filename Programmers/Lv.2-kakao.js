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
  //아래코드가 일반적인 방식
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
