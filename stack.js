class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val); //creating a new node
        if(!this.first){ //if there are no nodes in the stack
            this.first = newNode; //set the first and last property to be the newly created node
            this.last = newNode;
        } else {
            //if there is at least one node
            //create a variable that stores the current first propetry on the stack
            var temp = this.first;
            //reset the first property to be the newly created node
            this.first = newNode;
            //set the next property on the node to be the previously created variable
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null; //if there are no nodes in the stack,return null
        var temp = this.first; //create a variable that stores the  first propetry on the stack
        //if there is only 1 node, set the first  and last propperty to be the null
        if(this.first === this.last){
            this.last = null;
        }
        //if there is more than 1 node, set the first property to be the next property on the current first
        this.first = this.first.next;
        //decrement size by 1
        this.size--;
        return temp.value;
    }
}