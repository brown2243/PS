import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int[] costs = Arrays.stream(br.readLine().split(" "))
        .mapToInt(Integer::parseInt)
        .toArray();
    int A = costs[0];
    int B = costs[1];
    int C = costs[2];

    int[] time = new int[101];

    for (int i = 0; i < 3; i++) {
      int[] range = Arrays.stream(br.readLine().split(" "))
          .mapToInt(Integer::parseInt)
          .toArray();
      int start = range[0];
      int end = range[1];

      for (int j = start; j < end; j++) {
        time[j]++;
      }
    }

    int ans = Arrays.stream(time).reduce(0, (acc, count) -> {
      int val = 0;
      if (count == 1)
        val = (A * 1);
      if (count == 2)
        val = (B * 2);
      if (count == 3)
        val = (C * 3);
      return acc + val;
    });
    System.out.println(ans);
  }
}
