// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //create a new node
        let newNode = new Node(val);
        //if there is no head propetry on the list,
        //set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this //return the whole list
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        //loop through the list
        while(current.next){
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //if there is 0,set null
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current;
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")

list.push('Hi')
list.push('YOU')
// list.push(99);
list.push('vital')
console.log('list:',list)
list.pop();
console.log('NewList:',list)
