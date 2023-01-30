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
 * @return {number[][]}
 */
var levelOrder = function (root, arr = [], depth = 1) {
  if (!root) return [];
  if (arr.length === 0) {
    arr.push([root.val]);
  }
  const tmp = [];
  tmp.push(root.left);
  tmp.push(root.right);
  const filteredTmp = tmp.filter((v) => v);
  if (filteredTmp.length > 0) {
    if (!arr[depth]) {
      arr[depth] = [];
    }
  }
  for (const node of filteredTmp) {
    arr[depth].push(node.val);
  }
  for (const node of filteredTmp) {
    levelOrder(node, arr, depth + 1);
  }
  return arr;
};

var levelOrder = function (root) {
  const result = [];

  const bfs = (tree, level) => {
    if (result.length === level) result.push([]);

    result[level].push(tree.val);
    if (tree.left) bfs(tree.left, level + 1);
    if (tree.right) bfs(tree.right, level + 1);
  };

  if (!root) return result;
  bfs(root, 0);
  return result;
};
var levelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      currentLevel.push(currentNode.val);
    }
    res.push(currentLevel);
  }

  return res;
};
