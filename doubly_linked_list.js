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
    pop(){
        if(!this.head) return undefined; //if there is no head
        var poppedNode = this.tail; //store the current tail in a variable to return later
        if(this.length === 1){
            this.head = null; //set head and tail to null
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; //update the tail to be previous Node
            this.tail.next = null; //set the newTAil's next to null
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head; //store the current head in  a variable
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;//update the head to be the next of the old head
            this.head.prev = null;//set the head's prev property to null
            oldHead.next = null;//set the old head's next to null
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val); //create a new Node
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;//set the prev property on the head of the list to be the new node
            newNode.next = this.head;//set the next property on the new node to be the head property
            this.head = newNode; //update the head to be the new node
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        //if the index is less than or equal to hals the length of the list
        //loop through the list starting from the head and loop towards the middle
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
            //if the index is greater then half the length of the list
            //oop through the list starting from the tail and loop towards the middle
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1); 
        var afterNode = beforeNode.next;
        //set the next and prev properties on the correct nodes to link everything together
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
}
        