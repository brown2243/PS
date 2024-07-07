/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function recur(node, min, max) {
    if (node === null) {
      return true;
    }

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    return recur(node.left, min, node.val) && recur(node.right, node.val, max);
  }

  return recur(root, null, null);
};
