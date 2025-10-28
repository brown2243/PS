import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.stream.Stream;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    int[][] matrix = new int[N][N];

    for (int i = 0; i < N; i++) {
      matrix[i] = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    }

    Deque<int[]> queue = new ArrayDeque<>();
    int[] dy = { 1, 0, -1, 0 };
    int[] dx = { 0, 1, 0, -1 };
    int ans = 1;

    for (int depth = 1; depth < 100; depth++) {
      boolean[][] isVisited = new boolean[N][N];
      int count = 0;
      for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
          if (!isVisited[i][j] && matrix[i][j] > depth) {
            count++;
            isVisited[i][j] = true;
            queue.add(new int[] { i, j });

            while (queue.size() > 0) {
              int[] pop = queue.poll();
              int y = pop[0];
              int x = pop[1];
              for (int z = 0; z < 4; z++) {
                int ny = y + dy[z];
                int nx = x + dx[z];
                if (0 <= ny && ny < N && 0 <= nx && nx < N && !isVisited[ny][nx] && matrix[ny][nx] > depth) {
                  isVisited[ny][nx] = true;
                  queue.add(new int[] { ny, nx });
                }
              }
            }
          }
        }
      }
      if (count == 0) {
        break;
      }
      ans = Math.max(ans, count);
    }
    System.out.println(ans);
  }
}
