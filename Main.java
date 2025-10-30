import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    List<BigInteger> numbers = new ArrayList<>();

    int N = Integer.parseInt(br.readLine());
    for (int i = 0; i < N; i++) {
      String line = br.readLine();
      for (String s : line.replaceAll("[a-z]", " ").split("\\s+")) {
        if (!s.isEmpty()) {
          numbers.add(new BigInteger(s));
        }
      }
    }

    Collections.sort(numbers);

    for (BigInteger num : numbers) {
      sb.append(num).append('\n');
    }

    System.out.println(sb);
  }
}
