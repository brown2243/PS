import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String[] line = br.readLine().split(" ");
    int N = Integer.parseInt(line[0]);
    int M = Integer.parseInt(line[1]);
    StringBuilder sb = new StringBuilder();
    Map<Integer, String> indexMap = new HashMap<>();
    Map<String, Integer> nameMap = new HashMap<>();

    for (int i = 1; i < N + 1; i++) {
      String name = br.readLine();
      indexMap.put(i, name);
      nameMap.put(name, i);
    }
    for (int i = 0; i < M; i++) {
      String tmp = br.readLine();
      try {
        int num = Integer.parseInt(tmp);
        sb.append(indexMap.get(num)).append("\n");
      } catch (NumberFormatException e) {
        sb.append(nameMap.get(tmp)).append("\n");
      }
    }
    System.out.println(sb);
  }
}
