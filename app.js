class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++;
  }
  pop() {
    if (this.size === 0) {
      return null;
    }

    let cur = this.head;
    let next = cur.next;
    if (next === null) {
      this.head = null;
      return cur;
    } else {
      while (next.next !== null) {
        cur = next;
        next = cur.next;
      }
      cur.next = null;
    }
    this.size--;
    return next;
  }
  insert(idx, data) {
    if (idx < 0 || idx > this.size) {
      throw new Error("Invalid idx");
    }
    const node = new Node(data);
    if (idx === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let cnt = 0;
      let cur = this.head;
      let prev = null;
      while (cnt < idx) {
        prev = cur;
        cur = cur.next;
        cnt++;
      }
      node.next = cur;
      prev.next = node;
    }
    this.size++;
  }
  remove(idx) {
    if (idx < 0 || idx > this.size) {
      throw new Error("Invalid idx");
    }

    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let cnt = 1;
      let prev = this.head;
      while (cnt < idx) {
        prev = prev.next;
        cnt++;
      }
      prev.next = prev.next.next;
    }
    this.size--;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);
list.insert(0, 9);
console.log(list);
list.insert(3, 9);
console.log(list);
list.insert(5, 9);
console.log(list);
