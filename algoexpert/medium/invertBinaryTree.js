// Time: O(N)
// Space:O(d) ,d - depth of the tree,can be O(log N)
function invertBinaryTree(tree) {
  if (!tree) return;
  swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swap(tree) {
  let swap = tree.left;
  tree.left = tree.right;
  tree.right = swap;
}
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
