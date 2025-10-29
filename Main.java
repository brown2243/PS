import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int N = Integer.parseInt(st.nextToken());
    int M = Integer.parseInt(st.nextToken());
    int J = Integer.parseInt(br.readLine());
    int left = 1;
    int right = M;
    int moved = 0;

    for (int i = 0; i < J; i++) {
      int applePoint = Integer.parseInt(br.readLine());
      if (right < applePoint) {
        int gap = applePoint - right;
        moved += gap;
        right += gap;
        left += gap;
      } else if (left > applePoint) {
        int gap = left - applePoint;
        moved += gap;
        right -= gap;
        left -= gap;
      }
    }
    System.out.println(moved);
  }
}
