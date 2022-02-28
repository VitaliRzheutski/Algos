// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//time O(n)  , n=every node in the tree
//space O(d), d=depth of tree(will use space in the callstack)
function validateBst(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity);
}
function validateBSTHelper(tree, min, max) {
  //if we reach a leaf node(bottom of the tree) -> we are done with traversing a tree
  if (tree === null) return true;
  //every node has a min possible value and a max possible value
  //check if a current node is in between the min value and max value
  //if not -> it's not  a BST
  //node must be  < max
  //node must be >= min
  //!!!initial root  should always be > -Infinity && < Infinity
  if (tree.value >= max || tree.value < min) return false;
  // if yes then check if its left subtree is valid as well as its right subtree
  return (
    validateBSTHelper(tree.left, min, tree.value) &&
    validateBSTHelper(tree.right, tree.value, max)
  );
}
