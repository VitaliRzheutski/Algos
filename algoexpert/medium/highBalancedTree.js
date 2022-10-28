class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class TreeInfo{
    constructor(height, isBalanced){
      this.height = height;
      this.isBalanced = isBalanced;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
   const treeInfo = getTreeInfo(tree);
   return treeInfo.isBalanced
  }
  
  let getTreeInfo = (node) =>{
    if(node === null) return new TreeInfo(0, true);
  
    const leftSubTreeInfo = getTreeInfo(node.left);
    const rightSubTreeInfo = getTreeInfo(node.right);
  
    const isBalanced = leftSubTreeInfo.isBalanced &&
      rightSubTreeInfo.isBalanced && 
      Math.abs(leftSubTreeInfo.height - rightSubTreeInfo.height) <= 1;
    const maxHeight = Math.max(leftSubTreeInfo.height, rightSubTreeInfo.height) + 1
    return new TreeInfo(maxHeight, isBalanced)
    
  }