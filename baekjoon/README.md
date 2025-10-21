# 10주완성 C++ 코딩테스트

## 2979 트럭 주차

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

## 10808 알파벳 개수

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

## 2309 일곱 난쟁이

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
