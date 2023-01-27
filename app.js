var detectCycle = function (head) {
  let current = head;
  let pos = null;
  const pointers = [];
  while (current.next) {
    if (typeof current.next === "number") {
      pos = current.next;
    }
    pointers.push(current);
    current = current.next;
  }
  if (pos === -1) {
    return head;
  }
  pointers[pointers.length - 1].next = pointers[pos];
  return head;
};

var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
