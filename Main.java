import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    int PLAY_TIME = 48 * 60;
    int N = Integer.parseInt(br.readLine());
    int scoreA = 0;
    int scoreB = 0;
    int winningTimeA = 0;
    int winningTimeB = 0;
    int lastTime = 0;
    for (int i = 0; i < N; i++) {
      String[] split1 = br.readLine().split(" ");
      int team = Integer.parseInt(split1[0]);
      String[] split2 = split1[1].split(":");
      int time = Integer.parseInt(split2[0]) * 60 + Integer.parseInt(split2[1]);
      if (scoreA > scoreB) {
        winningTimeA += time - lastTime;
      }
      if (scoreB > scoreA) {
        winningTimeB += time - lastTime;
      }
      if (team == 1) {
        scoreA++;
      } else {
        scoreB++;
      }
      lastTime = time;
    }
    if (scoreA > scoreB) {
      winningTimeA += PLAY_TIME - lastTime;
    }
    if (scoreB > scoreA) {
      winningTimeB += PLAY_TIME - lastTime;
    }
    sb.append(String.format("%02d:%02d", winningTimeA / 60, winningTimeA % 60)).append('\n');
    sb.append(String.format("%02d:%02d", winningTimeB / 60, winningTimeB % 60));
    System.out.println(sb);
  }
}
