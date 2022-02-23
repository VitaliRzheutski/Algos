// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
      
    depthFirstSearch(array) {
      // Write your code here.
          array.push(this.name);
          
          for(let i=0;i<this.children.length;i++){
              let child = this.children[i];
              console.log('child:',child)
              ////call recursion on each child
              //1.A -> has 3 children (B,C,D)
              //A is pushed to array
              //as we are in the loop we'll start from 1st child B(B.depthFirstSearch(array))
              //B is pushed to array
              //2.B-> has 2 children(E,F)
              //we call recursion on its 1st child(E) E.depthFirstSearch(array)
              //E is pushed to array
              //3.E-> has no children ->we are done with E->move to F
              //F is pushed to array
              //4.F->has 2 children (I,J)
              //we call recursion on its 1st child(I) I.depthFirstSearch(array) 
              //and so on... until there are no children of A left
              child.depthFirstSearch(array)
          }
          return array;
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  