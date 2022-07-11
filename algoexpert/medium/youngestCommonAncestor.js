// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}
//Iterate the tree from bottom to the top
//1.find the depths of two descendants
//2.whichever descendant is deeper in the tree => we need to put him at the same level as another descendant
//3.Once the two nodes are at the same level => Let's go upwards until the meet at the same spot
//4.Once they're at the same spot( node1===node2)=>That's the youngest common ancestor(return either of them )
//Time O(d),d-is the depth of the lowest descendant; Space O(1)

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  //find how deep each descendant is located
  let descendantOneDepth = findDepth(topAncestor, descendantOne);
  let descendantTwoDepth = findDepth(topAncestor, descendantTwo);
  if (descendantOneDepth > descendantTwoDepth) {
    return backtrackingTree(
      descendantOne,
      descendantTwo,
      descendantOneDepth - descendantTwoDepth
    );
  } else {
    return backtrackingTree(
      descendantTwo,
      descendantOne,
      descendantTwoDepth - descendantOneDepth
    );
  }
}

let findDepth = (topAncestor, currentDescendant) => {
  let depth = 0;
  while (currentDescendant !== topAncestor) {
    depth++;
    currentDescendant = currentDescendant.ancestor;
  }
  return depth;
};

function backtrackingTree(lowerNode, higherNode, diff) {
  //move them up untill they are at the same level
  while (diff > 0) {
    lowerNode = lowerNode.ancestor;
    diff--;
  }
  //once they're at the same level move both of them up until theare at the same spot
  while (lowerNode !== higherNode) {
    lowerNode = lowerNode.ancestor;
    higherNode = higherNode.ancestor;
  }
  //that same spot will be their youngest common ancestor
  return lowerNode;
}
