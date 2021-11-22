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
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")

list.push('Hi')
list.push('YOU')
list.push(99);
list.push('vital')
console.log('list:',list)
