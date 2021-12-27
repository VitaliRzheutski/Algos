class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val); //created a new node
        if(this.length === 0){  //if head property is null
            this.head = newNode; // set head and tail to be the newly created node
            this.tail = newNode;
        } else {
            this.tail.next = newNode; //set the next property on the tail to be the node
            newNode.prev = this.tail;//set the previous property on the  newly created node to be the tail
            this.tail = newNode;// set the tail to be the newly created node
        }
        this.length++;
        return this; //return Doubly Linked List
    }
}
        