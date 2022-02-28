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

// Time O(N);
// Space O(N)
function minHeightBst(array) {
  // Write your code here.
  return constructTree(array, 0, array.length - 1);
}
//goal is to minimize Both sides of the tree so that BST has a minHeight(make it as balanced as it could be)
//try to make nodes in the left side be almost the same amount as in right side
function constructTree(array, leftIdx, rightIdx) {
  if (rightIdx < leftIdx) return null;

  let middle = Math.floor((leftIdx + rightIdx) / 2);
  let root = new BST(array[middle]); //we chose el in the middle because it has the same amount of values
  // 	to its left and to its right(because the input array is sorted)
  root.left = constructTree(array, leftIdx, middle - 1); //continue building root's left tree appluying the same logic
  root.right = constructTree(array, middle + 1, rightIdx); //building root's right subtree..
  return root;
}
