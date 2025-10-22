import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    char[] chars = br.readLine().toCharArray();
    int lowerACode = (int) 'a';
    int lowerZCode = (int) 'z';
    int upperACode = (int) 'A';
    int upperZCode = (int) 'Z';

    for (char c : chars) {
      int code = (int) c;
      if (lowerACode <= code && code <= lowerZCode) {
        int next = code + 13;
        if (next > lowerZCode) {
          next = lowerACode + next - lowerZCode - 1;
        }
        sb.append((char) next);
      } else if (upperACode <= code && code <= upperZCode) {
        int next = code + 13;
        if (next > upperZCode) {
          next = upperACode + next - upperZCode - 1;
        }
        sb.append((char) next);
      } else {
        sb.append(c);
      }
    }
    System.out.println(sb);
  }
}
