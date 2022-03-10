// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// T: O(n);
// S: O(n)
function findSuccessor(tree, node) {
  //left->root->right
  let visited = visitAllNodes(tree);
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === node) return visited[i + 1];
  }
}
function visitAllNodes(tree, visited = []) {
  if (tree === null) return visited;
  if (tree.left) visitAllNodes(tree.left, visited);
  visited.push(tree);
  if (tree.right) visitAllNodes(tree.right, visited);
  return visited;
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
