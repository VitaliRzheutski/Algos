function findClosestValueInBst(tree, target) {
    // Write your code here.
  return helperFunc(tree,target,Infinity)
  }
  const helperFunc = (tree,target,closest)=> {
      if(!tree) return closest;
      if(Math.abs(target - closest) > Math.abs(target - tree.value)){
          closest = tree.value
      }
      if(target < tree.value){
          return helperFunc(tree.left,target,closest)
      }else if(target > tree.value){
          return helperFunc(tree.right,target,closest)
      }else{
          return closest
      }
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
      
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  