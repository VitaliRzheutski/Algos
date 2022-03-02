// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Time: O(N)
// Space: O(N)
function findKthLargestValueInBst(tree, k) {
  let array = [];
  traverseInOrder(tree, array);
  return array[array.length - k];
}

function traverseInOrder(tree, array) {
  if (tree.left) traverseInOrder(tree.left, array);
  array.push(tree.value);
  if (tree.right) traverseInOrder(tree.right, array);
}
