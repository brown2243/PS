import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    Deque<Character> stack = new ArrayDeque<>();
    String line;
    while ((line = br.readLine()) != null) {
      if (line.equals(".")) {
        break;
      }
      stack.clear();
      boolean flag = true;
      for (int i = 0; i < line.length(); i++) {
        char c = line.charAt(i);
        if (c == '(' || c == '[') {
          stack.add(c);
        }
        if (c == ')' || c == ']') {
          int lastIdx = stack.size();
          if (lastIdx == 0) {
            flag = false;
            break;
          }
          char last = stack.peekLast();
          if ((c == ')' && last == '(') || (c == ']' && last == '[')) {
            stack.removeLast();
          } else {
            flag = false;
            break;
          }
        }
      }
      if (flag && stack.size() == 0) {
        sb.append("yes").append('\n');
      } else {
        sb.append("no").append('\n');
      }
    }
    System.out.println(sb);
  }
}
