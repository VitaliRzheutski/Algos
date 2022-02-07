// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root,sums=[],sum = 0) {
    // Write your code here.
      sum +=root.value; //1
          //base case
      if(!root.right && !root.left){
          //if we reached the leaf node(the deepest one) then
          //push the calculated sum of the nodes from current branch
          sums.push(sum)
      }
      if(root.left){
          branchSums(root.left,sums,sum)
      }
      if(root.right){
          branchSums(root.right,sums,sum)
      }
      console.log('sums:',sums)
  return sums
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  