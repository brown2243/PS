// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   append(data) {
//     const node = new Node(data);

//     if (this.head === null) {
//       this.head = node;
//     } else {
//       let cur = this.head;
//       while (cur.next !== null) {
//         cur = cur.next;
//       }
//       cur.next = node;
//     }
//     this.size++;
//   }
//   pop() {
//     if (this.size === 0) {
//       return null;
//     }

//     let cur = this.head;
//     let next = cur.next;
//     if (next === null) {
//       this.head = null;
//       return cur;
//     } else {
//       while (next.next !== null) {
//         cur = next;
//         next = cur.next;
//       }
//       cur.next = null;
//     }
//     this.size--;
//     return next;
//   }
//   insert(idx, data) {
//     if (idx < 0 || idx > this.size) {
//       throw new Error("Invalid idx");
//     }
//     const node = new Node(data);
//     if (idx === 0) {
//       node.next = this.head;
//       this.head = node;
//     } else {
//       let cnt = 0;
//       let cur = this.head;
//       let prev = null;
//       while (cnt < idx) {
//         prev = cur;
//         cur = cur.next;
//         cnt++;
//       }
//       node.next = cur;
//       prev.next = node;
//     }
//     this.size++;
//   }
//   remove(idx) {
//     if (idx < 0 || idx > this.size) {
//       throw new Error("Invalid idx");
//     }

//     if (idx === 0) {
//       this.head = this.head.next;
//     } else {
//       let cnt = 1;
//       let prev = this.head;
//       while (cnt < idx) {
//         prev = prev.next;
//         cnt++;
//       }
//       prev.next = prev.next.next;
//     }
//     this.size--;
//   }
// }

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// console.log(list);
// list.insert(0, 9);
// console.log(list);
// list.insert(3, 9);
// console.log(list);
// list.insert(5, 9);
// console.log(list);

// const arr = [
//   35, 12, 87, 63, 9, 71, 45, 26, 58, 93, 18, 52, 76, 41, 30, 22, 84, 69, 5, 37,
// ];

// const insert = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[i]) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//         console.log(arr.join(" "));
//       }
//     }
//   }
// };

// console.log(arr.join(" "));
// insert(arr);
// console.log(arr.join(" "));

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

const b = () => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return mid;
};
