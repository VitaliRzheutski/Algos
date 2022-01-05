class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);//create newNode
        if(this.root === null){ //do we have the root?
            this.root = newNode; //if not set this newNode to be root
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;//if we trying to insert the same value
            if(value < current.value){
                if(current.left === null){ //chech if there is a node to the  left
                    current.left = newNode;//if not,it will be newNode(add node to the left property)
                    return this;
                }
                current = current.left; //keep looking(update current)
            } else {
                if(current.right === null){//chech if there is a node to the  right
                    current.right = newNode;//add node to the right property
                    return this;
                } 
                current = current.right;//keep going
            }
        }
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)



