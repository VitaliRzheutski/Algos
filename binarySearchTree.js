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
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;//if we found a item yet
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;//if we found it get out from loop
            }
        }
        if(!found) return undefined;//if we never found 
        return current;
    }
    //true/false version
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS(){
        var node = this.root,
            data = [], //visited
            queue = []; //queue
        queue.push(node); //place the root nonde in the queue

        while(queue.length){  //loop as long as there is anything in the queu
           node = queue.shift();//shift(delete the first el) a node from the queue
           data.push(node.value);//push this node to the visited variable
           if(node.left) queue.push(node.left); //if there is a left property on the node  dequeued - add it to the queue
           if(node.right) queue.push(node.right);//if there is a right property on the node  dequeued - add it to the queue
        }
        return data; //return the variable that stores a value
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



