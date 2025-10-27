import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    String line;
    while ((line = br.readLine()) != null) {
      int num = Integer.parseInt(line);
      int expect = 1;
      int count = 1;
      while (expect % num != 0) {
        expect = (expect * 10 + 1) % num;
        count++;
      }
      sb.append(count).append("\n");
    }
    System.out.println(sb);
  }
}
