class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }
}
