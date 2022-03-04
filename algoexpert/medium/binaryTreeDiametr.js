// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// T: O(n);
// S: O(n)
function binaryTreeDiameter(tree) {
  // find the longest path of left subtree(exluding root);
  // 	find the elongest path of right subtree(excluding root)
  // 	combine the lengths of those paths + 1(root)
  // 	find the longest path including root
  let diameter = 0;

  // helper function will return the longest path between left or right tree + root node
  function getLongestPath(root) {
    if (root === null) return 0;
    const leftHeight = getLongestPath(root.left);
    const rightHeight = getLongestPath(root.right);
    const longestPathSoFar = leftHeight + rightHeight; // <- means a diameter//0,0
    console.log("longestPathSoFar", longestPathSoFar);

    diameter = Math.max(diameter, longestPathSoFar);
    console.log("diameter:", diameter);
    // returning the length of the longest branch between a node's left and right branches.
    return Math.max(leftHeight, rightHeight) + 1;
  }
  console.log("res from func", getLongestPath(tree));
  console.log("diameter", diameter);
  return diameter;
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
