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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const matrix = [];
  const recur = (node, depth = 0) => {
    if (!node) return;
    if (!matrix[depth]) {
      matrix[depth] = [];
    }
    matrix[depth].push(node.val);
    recur(node.left, depth + 1);
    recur(node.right, depth + 1);
  };
  recur(root);
  return matrix.map((v) => v.pop());
};
