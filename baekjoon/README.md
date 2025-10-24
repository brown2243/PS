# 10주완성 C++ 코딩테스트

## 1주차

###

```java

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
