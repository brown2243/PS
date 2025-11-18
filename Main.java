import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
  static List<List<Integer>> adjList;
  static boolean[] isVisited;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    StringTokenizer st = new StringTokenizer(br.readLine());
    Deque<Integer> stack = new ArrayDeque<>();
    int[] arr = new int[N];
    int[] ans = new int[N];
    Arrays.fill(ans, -1);

    for (int i = 0; i < N; i++) {
      arr[i] = Integer.parseInt(st.nextToken());
      while (stack.size() > 0 && arr[stack.peekLast()] < arr[i]) {
        ans[stack.pollLast()] = arr[i];
      }
      stack.add(i);
    }

    // System.out.println(Arrays.stream(ans).mapToObj(String::valueOf).collect(Collectors.joining("
    // ")));
    StringBuilder sb = new StringBuilder();
    for (int num : ans) {
      sb.append(num).append(' ');
    }
    System.out.println(sb);
  }
}
