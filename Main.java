import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String[] split = br.readLine().split(" ");
    int N = Integer.parseInt(split[0]);
    int M = Integer.parseInt(split[1]);
    int[][] matrix = new int[N + 2][M + 2];
    boolean[][] isChecked = new boolean[N + 2][M + 2];

    Deque<int[]> isMelting = new ArrayDeque<>();
    Deque<int[]> queue = new ArrayDeque<>();

    for (int i = 0; i < N; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());
      for (int j = 0; j < M; j++) {
        int num = Integer.parseInt(st.nextToken());
        matrix[i + 1][j + 1] = num;
      }
    }
    int time = 0;
    int lastCheeseCount = 0;
    int[] dy = { 1, 0, -1, 0 };
    int[] dx = { 0, 1, 0, -1 };

    while (true) {
      queue.push(new int[] { 0, 0 });
      isChecked[0][0] = true;
      while (queue.size() > 0) {
        int[] now = queue.pollFirst();
        int y = now[0];
        int x = now[1];
        for (int i = 0; i < 4; i++) {
          int ny = y + dy[i];
          int nx = x + dx[i];
          if (0 <= ny && ny < matrix.length && 0 <= nx && nx < matrix[0].length && !isChecked[ny][nx]) {
            isChecked[ny][nx] = true;
            if (matrix[ny][nx] == 1) {
              isMelting.add(new int[] { ny, nx });
            } else {
              queue.add(new int[] { ny, nx });
            }
          }
        }
      }
      if (isMelting.size() == 0) {
        break;
      }
      // isMelting
      time++;
      lastCheeseCount = isMelting.size();
      while (isMelting.size() > 0) {
        int[] point = isMelting.poll();
        matrix[point[0]][point[1]] = 0;
      }
      isChecked = new boolean[N + 2][M + 2];
    }
    System.out.println(time + "\n" + lastCheeseCount);
  }
}
