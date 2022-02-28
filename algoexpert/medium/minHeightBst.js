// Time O(N(logN));
// Space O(N)
function minHeightBst(array) {
  // Write your code here.
  return constructMinHeihtBST(array, null, 0, array.length - 1);
}
function constructMinHeihtBST(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];

  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeihtBST(array, bst, startIdx, midIdx - 1);
  constructMinHeihtBST(array, bst, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
