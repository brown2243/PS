import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    int N = Integer.parseInt(br.readLine());
    int count = 0;

    for (int i = 0; i < N; i++) {
      for (char c : br.readLine().toCharArray()) {
        if (c == '(') {
          count += 1;
        } else {
          count -= 1;
        }
        if (count < 0) {
          break;
        }
      }
      if (count == 0) {
        sb.append("YES").append('\n');
      } else {
        sb.append("NO").append('\n');
      }
      count = 0;
    }
    System.out.println(sb);
  }
}
