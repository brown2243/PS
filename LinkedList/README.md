# 단순 연결 리스트(Singly Linked List)

연결될 다음 원소에 대한 주소를 저장해야하므로 <원소,주소>의 단위로 저장한다.
이러한 단위 구조를 노드(node)라 함. <data+link>

### **그래프(Graph)**

- `노드(node)`들과 노드들 사이를 연결하는 `간선(edge)`으로 구성되어 있습니다.
- 그래프는 `root node`가 하나 있고, 각 노드에는 `child node`가 연결되어 있습니다.

### **트리(Tree)**

- `트리`는 그래프의 일종으로, `cycle`이 없고, **서로 다른 두 노드를 잇는 길이 하나 뿐인 그래프**를 트리라고 합니다.
- 노드가 `N개`인 트리는 항상 `N-1개`의 간선을 가집니다.
- `child`의 갯수가 2개로 제한되면 **이진 트리(Binary Tree)**라고 합니다.

### **이진 트리의 종류**

- **Full Binary Tree**: 각각의 노드가 `child`가 0개 혹은 2개
- **Complete Binary Tree**: 왼쪽 위에서부터 가득 차 있는 트리
- **Perfect Binary Tree**: 모든 내부 노드가 2개의 `children`을 가지고 있으며, `leaf node`의 `level`이 같은 트리

### **이진 트리 순회 알고리즘(Binary Tree Traversal)**

**이진 트리 순회 알고리즘**은 트리에 저장된 모든 값을 중복이나 빠짐없이 살펴보고 싶을 때 사용합니다. 이진 트리의 순회 방법 중 **깊이 우선 순회 방법(Depth First Traversal)**으로는 `전위 순회(Pre-order traversal)`, `정위 순회(In-order traversal)`, `후위 순회(Post-order traversal)`가 있으며, **너비 우선 순회 방법(Breadth First Traversal)**으로는 `레벨 순회`가 있습니다.

- `Pre-order`: **N**LR ex). 1 2 4 5 3 6 7
- `In-order`: L**N**R ex).4 2 5 1 6 3 7
- `Post-order`: LR**N** ex).4 5 2 6 7 3 1
- `Level-order`: **N**LR ex).1 2 3 4 5 6 7

### 재귀적(Recursive) 방법

이진 트리 순회 방법 중 깊이 우선 순회 방법(BFS)은 재귀적(Recursive) 혹은 반복적(Iterative) 방법으로 구현할 수 있습니다.

먼저 재귀적인 방법으로 구현해보겠습니다.

```jsx
// 전위 순회(Pre-order)
var recursivePreOrder = function (node) {
  if (!node) {
    return;
  }
  console.log(node.val);
  this.recursivePreOrder(node.leftNode);
  this.recursivePreOrder(node.rightNode);
};
// 정위 순회(In-order)
var recursiveInOrder = function (node) {
  if (!node) {
    return;
  }
  this.recursiveInOrder(node.leftNode);
  console.log(node.val);
  this.recursiveInOrder(node.rightNode);
};
// 후위 순회(Post-order)
var recursivePostOrder = function (node) {
  if (!node) {
    return;
  }
  this.recursivePostOrder(node.leftNode);
  this.recursivePostOrder(node.rightNode);
  console.log(node.val);
};
```

### **반복적(Iterative) 방법**

반복적인 방법으로 구현할 때는 **스택(stack)**을 사용합니다. 먼저 그림을 살펴보고, 이를 코드로 구현하겠습니다.

```jsx
// 전위 순회
var iterativePreOrder = function (node) {
  if (node == null) {
    return;
  }
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    let pop_node = stack.pop();
    console.log(pop_node.val);
    if (pop_node.right) stack.push(pop_node.right);
    if (pop_node.left) stack.push(pop_node.left);
  }
};
// 정위 순회
var iterativeInOrder = function (node) {
  if (node == null) {
    return;
  }
  let crnt_node = node;
  let stack = [];
  while (true) {
    if (crnt_node != null) {
      stack.push(crnt_node);
      crnt_node = crnt_node.left;
    } else if (stack.length > 0) {
      crnt_node = stack.pop();
      console.log(crnt_node.val);
      crnt_node = crnt_node.right;
    } else {
      break;
    }
  }
};
// 후위 순회
var iterativePostOrder = function (node) {
  if (node == null) {
    return;
  }
  let crnt_node = node;
  let stack = [];
  let last_visit_node = null;
  while (true) {
    if (crnt_node != null) {
      stack.push(crnt_node);
      crnt_node = crnt_node.left;
    } else if (stack.length > 0) {
      peek_node = stack[stack.length - 1];
      if (peek_node.right != null && last_visit_node != peek_node.right) {
        crnt_node = peek_node.right;
      } else {
        console.log(peek_node.val);
        last_visit_node = stack.pop();
      }
    } else {
      break;
    }
  }
};
```

### **너비 우선 순회 방법(BFS)**

이진 트리의 `너비 우선 순회`에는 **레벨 순회**가 있습니다. **큐(queue)** 자료구조를 사용하면 간단히 구현할 수 있습니다.

```jsx
var levelOrderTraversal = function (node) {
  if (node == null) {
    return;
  }
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let pop_node = queue.shift();
    console.log(pop_node.val);
    if (pop_node.left) queue.push(pop_node.left);
    if (pop_node.right) queue.push(pop_node.right);
  }
};

levelOrderTraversal(root);
```

[https://doheelab.github.io/algorithm/binary_tree/](https://doheelab.github.io/algorithm/binary_tree/)
