var isValidBST = function (root) {
  return !isValid(root);
};
var isValid = (node) => {
  if (Number.isInteger(node.val)) {
    if (Number.isInteger(node.left?.val)) {
      if (node.left.val < node.val) {
        isValid(node.left);
      } else {
        return true;
      }
    }
    if (Number.isInteger(node.right?.val)) {
      if (node.right.val > node.val) {
        isValid(node.right);
      } else {
        return true;
      }
    }
  }
};
