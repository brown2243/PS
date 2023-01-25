/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (list1, list2) => {
  const a = nodeToList(list1);
  const b = nodeToList(list2);
  let node;
  a.concat(b)
    .sort((a, b) => a - b)
    .forEach((v) => {
      if (!node) {
        node = new ListNode(v);
      } else {
        node.next = new ListNode(v);
      }
    });
  return node;
};

const nodeToList = (nodes) => {
  const list = [];
  while (nodes?.val) {
    list.push(nodes.val);
    nodes = nodes.next;
  }
  return list;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = (head) =>{
  while(){
      
  }
};