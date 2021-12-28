class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //push
    enqueue(val){
        var newNode = new Node(val); //created new node
        if(!this.first){ //if there are no nodes in the queue
            this.first = newNode; ////set newNodeto be the first and last property of the  queue
            this.last = newNode;
        } else {
            this.last.next = newNode;//set the next property on the current last to bew newNode
            this.last = newNode;//set the last property to be the newNode
        }
        return ++this.size;
    }
    //pop
    dequeue(){
        if(!this.first) return null; //if there is no first property,return null
        var temp = this.first; //store refference
        //if the first the same is the last(check if there is only  1 node)
        if(this.first === this.last) {
            this.last = null; //set the first and last to be null
        }
        this.first = this.first.next; //set the irst property to be the next property of first
        this.size--;
        return temp.value;
    }
}