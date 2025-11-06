# 10주완성 C++ 코딩테스트

## 2주차

###

```java

```

### 9012 괄호

- stack 문제인데 그냥 int로 처리할 수 있을 것 같아 구현

```java
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
```

### 1436 영화감독 숌

- 문제푸는 아이디어는 간단한데 뭔가 최적화가 있을 것 같다.
- 딴 사람 푼거보니 뭔가 복잡쓰

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int N = Integer.parseInt(br.readLine());
String text = "666";
long i = 666;
int cnt = 1;
while (true) {
  if (cnt == N)
    break;
  i++;
  if (String.valueOf(i).contains(text))
    cnt++;
}
System.out.println(i);
```

### 2852 NBA 농구

- 구현 문제 초로 통일해야 계산이 편하다.
- 문자열 변환하기가 좀 불편하다.

```java
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
```

### 3474 교수가 된 현우

- 팩토리얼의 수에서 0의 자릿수 구하기
- 2 \* 5의 결과인데 2가 훨씬 많기에 5의 갯수만 구하면 됌
  - N // 5 : 5를 1개 이상 가진 수들의 개수 (이 수들에서 5를 1개씩 셈)
  - N // 25 : 5를 2개 이상 가진 수들의 개수 (이 수들에서 '추가 1개'를 셈)
  - N // 125: 5를 3개 이상 가진 수들의 개수 (이 수들에서 '또 추가 1개'를 셈)

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();
int N = Integer.parseInt(br.readLine());
for (int i = 0; i < N; i++) {
  int num = Integer.parseInt(br.readLine());
  int count = 0;
  for (int j = 5; j <= num; j *= 5) {
    count += num / j;
  }
  sb.append(count).append('\n');
}
System.out.println(sb);
```

### 10709 기상캐스터

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();
StringTokenizer st = new StringTokenizer(br.readLine());
int H = Integer.parseInt(st.nextToken());
int W = Integer.parseInt(st.nextToken());
int last;

for (int i = 0; i < H; i++) {
  last = -1;
  String line = br.readLine();
  for (int j = 0; j < W; j++) {
    char c = line.charAt(j);
    if ('c' == c) {
      last = 0;
    } else {
      if (last != -1) {
        last += 1;
      }
    }
    sb.append(last).append(' ');
  }
  sb.append('\n');
}
System.out.println(sb);
```

### 2870 수학숙제

- 문자를 전부 공백으로 만들고 스플릿
- 숫자가 100자리가 될 수 있음

```java
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
```

### 4659 비밀번호 발음하기

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();

Set<Character> vows = Set.of('a', 'e', 'i', 'o', 'u');
while (true) {
  String line = br.readLine();
  if (line.equals("end")) {
    break;
  }
  boolean flag1 = false;
  boolean flag2 = false;
  boolean flag3 = false;
  char[] charArray = line.toCharArray();
  char last = '0';
  int count = 0;
  boolean isVowSeq = false;

  for (char c : charArray) {
    boolean isVow = vows.contains(c);
    if (isVow) {
      flag1 = true;
    }
    if (isVow) {
      if (isVowSeq) {
        count += 1;
      } else {
        count = 1;
        isVowSeq = true;
      }
    } else {
      if (isVowSeq) {
        count = 1;
        isVowSeq = false;
      } else {
        count += 1;
      }
    }
    if (count == 3) {
      flag2 = true;
    }
    if (last == c && c != 'o' && c != 'e') {
      flag3 = true;
    }
    last = c;
  }
  sb.append('<').append(line).append('>');
  if (flag1 && !flag2 && !flag3) {
    sb.append(" is acceptable.\n");
  } else {
    sb.append(" is not acceptable.\n");
  }
}

System.out.println(sb);
```

### 2910 빈도 정렬

- 확실히 정렬하고, 데이터를 다루는 부분이 좀 더 장황한 느낌..? 알아야할 인터페이스, 메서드가 많다.

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
br.readLine();
StringTokenizer st = new StringTokenizer(br.readLine());
Map<Integer, Integer> map = new HashMap<>();
Map<Integer, Integer> orderMap = new HashMap<>();
List<Integer> list = new ArrayList<>();
int order = 0;
while (st.hasMoreTokens()) {
  int n = Integer.parseInt(st.nextToken());
  map.put(n, map.getOrDefault(n, 0) + 1);
  if (!orderMap.containsKey(n)) {
    orderMap.put(n, order++);
  }
}

map.entrySet().stream().sorted(
    Comparator.<Map.Entry<Integer, Integer>>comparingInt(Map.Entry::getValue)
        .reversed()
        .thenComparing((a, b) -> orderMap.get(a.getKey()) - orderMap.get(b.getKey())))
    .forEach(v -> {
      int key = v.getKey();
      int val = v.getValue();
      for (int i = 0; i < val; i++) {
        list.add(key);
      }
    });

System.out.println(list.stream().map((num) -> String.valueOf(num)).collect(Collectors.joining(" ")));

```

### 2828 사과 담기 게임

```java
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
```

### 1992 쿼드트리

- stream 형식으로 boolean[] 만드는게 불편하다.

```java
static StringBuilder sb = new StringBuilder();
static boolean[][] matrix;

public static void main(String[] args) throws IOException {
  BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  int N = Integer.parseInt(br.readLine());

  matrix = new boolean[N][N];

  for (int i = 0; i < N; i++) {
    String line = br.readLine();
    for (int j = 0; j < line.length(); j++) {
      matrix[i][j] = line.charAt(j) == '1';
    }
  }
  dfs(0, 0, N);
  System.out.println(sb);
}

private static void dfs(int Y, int X, int N) {
  boolean first = matrix[Y][X];

  for (int y = Y; y < Y + N; y++) {
    for (int x = X; x < X + N; x++) {
      if (first != matrix[y][x]) {
        sb.append("(");
        int half = N / 2;
        dfs(Y, X, half);
        dfs(Y, X + half, half);
        dfs(Y + half, X, half);
        dfs(Y + half, X + half, half);
        sb.append(")");
        return;
      }
    }
  }
  sb.append(first == true ? 1 : 0);
}
```

### 2583 영역 구하기

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer stringTokenizer = new StringTokenizer(br.readLine());
int M = Integer.parseInt(stringTokenizer.nextToken());
int N = Integer.parseInt(stringTokenizer.nextToken());
int K = Integer.parseInt(stringTokenizer.nextToken());

boolean[][] matrix = new boolean[M][N];

for (int i = 0; i < K; i++) {
  StringTokenizer st = new StringTokenizer(br.readLine());
  int x1 = Integer.parseInt(st.nextToken());
  int y1 = Integer.parseInt(st.nextToken());
  int x2 = Integer.parseInt(st.nextToken());
  int y2 = Integer.parseInt(st.nextToken());

  for (int y = y1; y < y2; y++) {
    for (int x = x1; x < x2; x++) {
      matrix[y][x] = true;
    }
  }
}
int count = 0;
List<Integer> list = new ArrayList<>();
Deque<int[]> queue = new ArrayDeque<>();
int[] dy = { 1, 0, -1, 0 };
int[] dx = { 0, 1, 0, -1 };

for (int i = 0; i < M; i++) {
  for (int j = 0; j < N; j++) {
    if (!matrix[i][j]) {
      count++;
      matrix[i][j] = true;
      queue.add(new int[] { i, j });
      int size = 1;

      while (queue.size() > 0) {
        int[] pop = queue.poll();
        int y = pop[0];
        int x = pop[1];
        for (int z = 0; z < 4; z++) {
          int ny = y + dy[z];
          int nx = x + dx[z];
          if (0 <= ny && ny < M && 0 <= nx && nx < N && !matrix[ny][nx]) {
            matrix[ny][nx] = true;
            queue.add(new int[] { ny, nx });
            size++;
          }
        }
      }
      list.add(size);
    }
  }
}

System.out.println(count + "\n" +
    list.stream()
        .sorted()
        .map((num) -> String.valueOf(num))
        .collect(Collectors.joining(" ")));
```

### 2468 안전 영역

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int N = Integer.parseInt(br.readLine());
int[][] matrix = new int[N][N];

for (int i = 0; i < N; i++) {
  matrix[i] = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
}

Deque<int[]> queue = new ArrayDeque<>();
int[] dy = { 1, 0, -1, 0 };
int[] dx = { 0, 1, 0, -1 };
int ans = 1;

for (int depth = 1; depth < 100; depth++) {
  boolean[][] isVisited = new boolean[N][N];
  int count = 0;
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      if (!isVisited[i][j] && matrix[i][j] > depth) {
        count++;
        isVisited[i][j] = true;
        queue.add(new int[] { i, j });

        while (queue.size() > 0) {
          int[] pop = queue.poll();
          int y = pop[0];
          int x = pop[1];
          for (int z = 0; z < 4; z++) {
            int ny = y + dy[z];
            int nx = x + dx[z];
            if (0 <= ny && ny < N && 0 <= nx && nx < N && !isVisited[ny][nx] && matrix[ny][nx] > depth) {
              isVisited[ny][nx] = true;
              queue.add(new int[] { ny, nx });
            }
          }
        }
      }
    }
  }
  if (count == 0) {
    break;
  }
  ans = Math.max(ans, count);
}
System.out.println(ans);
```

### 1012 유기농 배추

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();
int T = Integer.parseInt(br.readLine());

Deque<int[]> queue = new ArrayDeque<>();
int[] dy = { 1, 0, -1, 0 };
int[] dx = { 0, 1, 0, -1 };

for (int t = 0; t < T; t++) {
  String[] split = br.readLine().split(" ");
  int M = Integer.parseInt(split[0]);
  int N = Integer.parseInt(split[1]);
  int K = Integer.parseInt(split[2]);

  int count = 0;
  int[][] matrix = new int[N][M];
  for (int i = 0; i < K; i++) {
    String[] point = br.readLine().split(" ");
    int x = Integer.parseInt(point[0]);
    int y = Integer.parseInt(point[1]);
    matrix[y][x] = 1;
  }

  for (int i = 0; i < N; i++) {
    for (int j = 0; j < M; j++) {
      if (matrix[i][j] == 1) {
        count++;
        matrix[i][j] = 0;
        queue.add(new int[] { i, j });

        while (queue.size() > 0) {
          int[] pop = queue.poll();
          int y = pop[0];
          int x = pop[1];
          for (int z = 0; z < 4; z++) {
            int ny = y + dy[z];
            int nx = x + dx[z];
            if (0 <= ny && ny < N && 0 <= nx && nx < M && matrix[ny][nx] == 1) {
              matrix[ny][nx] = 0;
              queue.add(new int[] { ny, nx });
            }
          }
        }
      }
    }
  }
  sb.append(count).append("\n");
}
System.out.println(sb);
```

### 2178 미로 탐색

- 인풋을 받아 matrix 만드는게 번거롭다.
  네, 실무와 문제 해결(PS)에서 가장 핵심적으로 사용되는 자바의 자료구조 인터페이스와 클래스를 정리해 드릴게요.

#### **`List` 계열**

- **`ArrayList` (★★★★★)**

  - **특징**: **내부적으로 배열**을 사용합니다. 인덱스를 통한 **데이터 조회(`get`)가 매우 빠릅니다.**
  - **단점**: 데이터 추가/삭제 시, 특히 중간에 삽입/삭제할 때 다른 데이터들을 밀거나 당겨야 해서 느립니다.
  - **선택 기준**: **조회가 압도적으로 많고, 추가/삭제는 드물거나 리스트의 맨 뒤에서만 일어날 때** 사용합니다. 실무에서 가장 흔하게 사용됩니다.

- **`LinkedList`**
  - **특징**: **내부적으로 노드(Node)들의 연결**로 이루어져 있습니다. **데이터 추가/삭제가 매우 빠릅니다.**
  - **단점**: 특정 인덱스의 데이터를 찾으려면 처음부터 순서대로 찾아가야 해서 조회가 느립니다.
  - **선택 기준**: 데이터의 **추가/삭제가 조회보다 훨씬 빈번할 때** 사용합니다.

#### **`Set` 계열**

- **`HashSet` (★★★★★)**

  - **특징**: `HashMap`을 기반으로 만들어져 **검색(`contains`), 추가, 삭제 속도가 매우 빠릅니다.** 순서를 전혀 보장하지 않습니다.
  - **선택 기준**: **순서는 상관없고, 오직 중복 제거와 빠른 검색**이 필요할 때 사용합니다.

- **`TreeSet`**
  - **특징**: 데이터를 **자동으로 정렬**된 상태로 저장합니다.
  - **단점**: `HashSet`보다 추가/삭제/검색 속도가 느립니다.
  - **선택 기준**: **중복 제거와 동시에 정렬된 상태를 유지**해야 할 때 사용합니다.

#### **`Map` 계열**

- **`HashMap` (★★★★★)**

  - **특징**: **Key를 통한 Value 검색 속도가 가장 빠릅니다.** 순서를 보장하지 않습니다.
  - **선택 기준**: **순서는 상관없고, 가장 빠른 속도로 데이터를 저장하고 조회**하고 싶을 때 사용합니다. 실무에서 압도적으로 많이 쓰입니다.

- **`TreeMap`**
  - **특징**: Key를 기준으로 **자동으로 정렬**된 상태를 유지합니다.
  - **단점**: `HashMap`보다 성능이 느립니다.
  - **선택 기준**: **Key를 기준으로 정렬된 맵이 필요할 때** (e.g., 특정 범위의 Key를 검색할 때) 사용합니다.

---

### ## PS(알고리즘)에서 특히 유용한 자료구조

실무에서도 쓰이지만, 알고리즘 문제 풀이에서 빛을 발하는 자료구조들입니다. ✨

- **`PriorityQueue` (우선순위 큐)**

  - **특징**: 들어간 순서와 상관없이, **가장 우선순위가 높은 데이터(기본적으로 가장 작은 값)가 먼저 나옵니다.**
  - **언제 쓸까?**: **다익스트라(Dijkstra) 알고리즘**처럼 '가장 비용이 적은 노드'를 계속해서 뽑아야 하는 경우에 필수적입니다.

- **`Stack`**
  - **특징**: **LIFO(Last-In, First-Out)**, 즉 가장 나중에 들어온 데이터가 가장 먼저 나가는 구조입니다. 프링글스 통을 생각하면 쉽습니다.
  - **언제 쓸까?**: 깊이 우선 탐색(DFS), 괄호 짝 맞추기, 웹 브라우저의 '뒤로 가기' 기능 구현 등에 사용됩니다. `Deque` 인터페이스의 구현체인 `ArrayDeque`를 스택처럼 사용하는 것이 권장됩니다. (`Stack<E> stack = new ArrayDeque<>();`)

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String[] split = br.readLine().split(" ");
int N = Integer.parseInt(split[0]);
int M = Integer.parseInt(split[1]);
int[][] matrix = new int[N + 1][M + 1];
for (int i = 1; i <= N; i++) {
  String line = br.readLine();
  for (int j = 1; j <= line.length(); j++) {
    matrix[i][j] = line.charAt(j - 1) - '0';
  }
}

int[][] dp = new int[N + 1][M + 1];
int[] dy = { 1, 0, -1, 0 };
int[] dx = { 0, 1, 0, -1 };
Queue<int[]> queue = new LinkedList<>();
queue.add(new int[] { 1, 1 });
while (queue.size() > 0) {
  int[] pop = queue.poll();
  int y = pop[0];
  int x = pop[1];
  for (int i = 0; i < 4; i++) {
    int ny = y + dy[i];
    int nx = x + dx[i];
    if (1 <= ny && ny <= N && 1 <= nx && nx <= M && dp[ny][nx] == 0 && matrix[ny][nx] == 1) {
      dp[ny][nx] = dp[y][x] + 1;
      queue.add(new int[] { ny, nx });
    }
  }
}
System.out.println(dp[N][M] + 1);
```

## 1주차

### 4375 1

- lines() 메서드 사용 시, 사용자가 종료를 눌러야 입력완료
- 모듈연산으로 예상값을 계속 줄여줘야함

```java
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
```

### 1629 곱셈

- 재귀

```java
static long A, B, C;

public static void main(String[] args) throws IOException {
  BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  StringTokenizer stringTokenizer = new StringTokenizer(br.readLine());
  A = Long.parseLong(stringTokenizer.nextToken());
  B = Long.parseLong(stringTokenizer.nextToken());
  C = Long.parseLong(stringTokenizer.nextToken());
  System.out.println(recur(B));
}

private static long recur(long b) {
  if (b == 1) {
    return A % C;
  }
  long half = recur(b / 2);
  if (b % 2 == 0) {
    return half * half % C;
  } else {
    return (half * half % C) * A % C;
  }
}
```

### 3986 좋은 단어

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int N = Integer.parseInt(br.readLine());
int count = 0;
List<Character> stack = new ArrayList<>();
for (int i = 0; i < N; i++) {
  char[] charArray = br.readLine().toCharArray();
  for (char c : charArray) {
    int last = stack.size() - 1;
    if (stack.isEmpty() || stack.get(last) != c) {
      stack.add(c);
    } else if (!stack.isEmpty() && stack.get(last) == c) {
      stack.remove(last);
    }
  }
  if (stack.size() == 0) {
    count++;
  }
  stack.clear();
}
System.out.println(count);
```

### 1940 주몽

```java
int N = Integer.parseInt(br.readLine());
int M = Integer.parseInt(br.readLine());
int[] nums = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).sorted().toArray();
int count = 0;
int left = 0, right = nums.length - 1;
while (left < right) {
  int sum = nums[left] + nums[right];
  if (sum == M) {
    count++;
    left++;
    right--;
  } else if (sum < M) {
    left++;
  } else {
    right--;
  }
}
System.out.println(count);
```

### 1213 팰린드롬 만들기

repeat에 나머지 연산을 주는 실수를 해서 삽질...

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();
char[] charArray = br.readLine().toCharArray();
int[] codes = new int[26];
for (char c : charArray) {
  codes[c - 'A']++;
}
int oddIdx = -1;
boolean flag = true;
for (int code = 0; code < codes.length; code++) {
  int value = codes[code];
  if (value % 2 == 1) {
    if (oddIdx != -1) {
      flag = false;
      break;
    }
    oddIdx = code;
  }
  char c = (char) (code + 'A');
  sb.append(String.valueOf(c).repeat(value / 2));
}

if (!flag) {
  System.out.println("I'm Sorry Hansoo");
} else {
  StringBuilder reversed = new StringBuilder(sb).reverse();
  if (oddIdx != -1) {
    sb.append((char) (oddIdx + 'A'));
  }
  sb.append(reversed);
  System.out.println(sb);
}
```

### 9375 패션왕 신해빈

`map.getOrDefault` 메서드로 조건문 제거가능

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int N = Integer.parseInt(br.readLine());
StringBuilder sb = new StringBuilder();
Map<String, Integer> map = new HashMap<>();

for (int i = 0; i < N; i++) {
  int M = Integer.parseInt(br.readLine());
  for (int j = 0; j < M; j++) {
    String[] split = br.readLine().split(" ");
    if (map.containsKey(split[1])) {
      map.put(split[1], map.get(split[1]) + 1);
    } else {
      map.put(split[1], 1);
    }
  }
  sb.append(map.values().stream().reduce(1, (acc, cur) -> acc * (cur + 1)) - 1).append("\n");
  map.clear();
}
System.out.println(sb);
```

### 1620 나는야 포켓몬 마스터 이다솜

- 문제가 너무 길다...
- 맵 2개 만들어서 풀었다.
- 입력값을 문자, 숫자 구분할때 try catch를 사용했는데, 다른 답변에는 아스키코드를 활용한게 보인다.

```java
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
```

### 2559 수열

첫 수열의 합을 구하고 배열을 순회하며 좌측은 빼고 우측은 더해서 최대값 비교했다.

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String[] line = br.readLine().split(" ");
int N = Integer.parseInt(line[0]);
int K = Integer.parseInt(line[1]);
int[] nums = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
int local = 0;
int global;
for (int i = 0; i < K; i++) {
  local += nums[i];
}
global = local;
for (int i = 0; i < N - K; i++) {
  local -= nums[i];
  local += nums[i + K];
  global = Integer.max(local, global);
}
System.out.println(global);
```

### 9996 한국이 그리울 땐 서버에 접속하지

java split은 정규식이라 \* 이스케이프 필요

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();
int n = Integer.parseInt(br.readLine());
String[] patterns = br.readLine().split("\\*");
int patternLength = patterns[0].length() + patterns[1].length();

for (int i = 0; i < n; i++) {
  String text = br.readLine();
  if (text.length() < patternLength) {
    sb.append("NE\n");
    continue;
  }
  if (text.startsWith(patterns[0]) && text.endsWith(patterns[1])) {
    sb.append("DA\n");
  } else {
    sb.append("NE\n");
  }
}
System.out.println(sb);
```

### 11655 ROT13

- 정적블록으로 테이블을 만드는 풀이는 기발하다.
- 대부분 모듈러 연산을 사용하는데 13 고정값이라 필수는 아님

```java
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
```

### 1159 농구 경기

인트로 변환된 값을 다시 문자로 캐스팅

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int n = Integer.parseInt(br.readLine());
int[] arr = new int[26];
for (int i = 0; i < n; i++) {
  String name = br.readLine();
  arr[name.charAt(0) - 'a']++;
}

StringBuilder sb = new StringBuilder();
for (int i = 0; i < arr.length; i++) {
  if (arr[i] >= 5) {
    sb.append((char) (i + 'a'));
  }
}
System.out.println(sb.length() == 0 ? "PREDAJA" : sb);
```

### 10988 팰린드롬인지 확인하기

split으로 string[] 이면 equals를 써야함 객체니까
JS의 래핑객체 개념이 확실히 편리하긴 한듯

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
char[] arr = br.readLine().toCharArray();
boolean flag = true;
for (int i = 0; i < arr.length / 2; i++) {
  if (arr[i] != arr[arr.length - 1 - i]) {
    flag = false;
    break;
  }
}
System.out.println(flag ? 1 : 0);
```

### 2979 트럭 주차

- 자바 문법에 익숙해지는 중

```java
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
```

### 10808 알파벳 개수

- Java는 JavaScript처럼 문자 → 아스키 코드로 바로 변환하는 메서드(charCodeAt)가 없어요.
- 하지만 Java에서는 이미 char 타입이 숫자형(UTF-16 코드 단위) 이기 때문에, 그 자체로 코드 값으로 동작합니다.
- 확실히 자바스크립트의 array가 편하다. java의 array와 벡터를 합친 느낌

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringBuilder sb = new StringBuilder();
String text = br.readLine();
int[] arr = new int[26];

for (int i = 0; i < text.length(); i++) {
  arr[text.charAt(i) - 'a']++;
}

for (int a : arr) {
  sb.append(a + " ");
}
System.out.print(sb);
```

### 2309 일곱 난쟁이

1. 전체 합에 100을 빼고, 배열을 순회하며 두 값을 더해서 일치하는지 비교
2. 반복수를 줄임
   1. 정렬 먼자
   2. 두번째 반복문을 뒤에서 돌림
   3. 더한 값이 작다면 이중 반복 break

```java
public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    Vector<Integer> heights = new Vector<>();
    int sum = 0;
    for (int i = 0; i < 9; i++) {
      int num = Integer.parseInt(br.readLine());
      heights.add(num);
      sum += num;
    }
    heights.sort((a, b) -> (a.compareTo(b)));
    int gap = sum - 100;
    int size = heights.size();

    outer: for (int i = 0; i < size; i++) {
      for (int j = size - 1; j > i; j--) {
        int local = heights.get(i) + heights.get(j);
        if (gap == local) {
          heights.remove(j);
          heights.remove(i);
          break outer;
        }
        if (gap > local) {
          break;
        }
      }
    }
    heights.forEach(height -> System.out.println(height));
  }
}
```
